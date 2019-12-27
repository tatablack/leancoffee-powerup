const path = require('path');
const yargs = require('yargs');

const Browser = require('./utils/Browser');
const SupportedLanguages = require('./utils/SupportedLanguages');
const LoginPage = require('./pages/LoginPage');
const TestBoardPage = require('./pages/TestBoardPage');
const getLogger = require('./utils/Logger');

const logger = getLogger();

const supportedLanguagesPath = path.relative(
  process.cwd(),
  path.join(path.dirname(process.argv[1]), 'utils', 'SupportedLanguages.js')
);
let browserHandler;
let currentLanguage;

const { argv } = yargs.scriptName('\n🌟 build-screenshots 🌟')
  .usage('$0 [args]', 'Create screenshots for a target locale, or all supported ones (default)')
  .option('locale', {
    alias: 'l',
    demandOption: true,
    default: ['all'],
    type: 'array',
    describe: `one or more target locales from ${supportedLanguagesPath}, e.g. "en", or "zh-Hans", or "en it"`
  })
  .check((parsedArgv) => {
    if (!process.env.TRELLO_USERNAME || !process.env.TRELLO_PASSWORD) {
      throw new Error(
        'Unable to proceed: the environment variables TRELLO_USERNAME and TRELLO_PASSWORD need to be set.'
      );
    }

    // Only languages already declared in ./utils/SupportedLanguages.js are valid
    const supportedLanguageKeys = Object.keys(SupportedLanguages);
    if (parsedArgv.locale['0'] !== 'all' && !parsedArgv.locale.every((lang) => supportedLanguageKeys.includes(lang))) {
      throw new Error(
        'All target locales must be already supported.\n'
        + `You provided "${parsedArgv.locale}"`
        + ` but we only support "${supportedLanguageKeys}"`
      );
    }

    return true;
  })
  .version(false)
  .showHelpOnFail(false)
  .help();

(async () => {
  browserHandler = new Browser('Firefox');
  const browser = await browserHandler.open();
  await browser.maximizeWindow();

  const loginPage = new LoginPage(browser);
  await loginPage.open();
  await loginPage.login(process.env.TRELLO_USERNAME, process.env.TRELLO_PASSWORD);

  const testBoardPage = new TestBoardPage(browser);
  await testBoardPage.open();

  // eslint-disable-next-line no-restricted-syntax
  for (const [languageCode, languageName] of Object.entries(SupportedLanguages)) {
    if (argv.locale[0] === 'all' || argv.locale.includes(languageCode)) {
      currentLanguage = languageCode;
      // eslint-disable-next-line no-await-in-loop
      await testBoardPage.takeAllScreenshotsFor(languageCode, languageName);
    }
  }
})()
  .catch((e) => logger.error({ label: currentLanguage, message: e }))
  .finally(async () => {
    if (browserHandler) {
      try {
        await browserHandler.close();
      } catch (e) {
        logger.error({ label: currentLanguage, message: 'Unable to delete session 🤔' });
        logger.error({ label: currentLanguage, message: e });
      }
    }
  });

const hbs = require('handlebars');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const componentExists = require('./utils/component-exists');
const appRootDir = path.resolve(process.cwd());

const log = console.log;

function main(args) {
  if (!args.length) {
    log(chalk.red('The `npm run generate` command requires a blueprint name to be specified.'));
    return;
  } else if (args.length === 1) {
    log(chalk.red('The `npm run generate` command requires an entity name to be specified.'));
    return;
  }

  const blueprint = args[0];
  const entity = args[1];
  log(`installing ${blueprint}`);
  if (/^component$/i.test(blueprint)) {
    let data = {name: entity, wantPropTypes: true};
    let componentResult = require('./component/stateless.js.hbs')(data);
    let stylesResult = require('./component/styles.js.hbs')();
    let componentPath = path.resolve(appRootDir, 'app/components');
    let destinationPath = path.resolve(componentPath, entity);
    if (!fs.existsSync(destinationPath)){
        fs.mkdirSync(destinationPath);
    }
    if (fs.existsSync(path.resolve(destinationPath, 'index.js'))) {
      log(`${chalk.yellow('  already exists')} app/components/${entity}/index.js`);
    } else {
      let bytesWrittenC = fs.writeFileSync(path.resolve(destinationPath, 'index.js'), componentResult);
      log(`${chalk.green('  created')} app/components/${entity}/index.js`);
    }

    if (fs.existsSync(path.resolve(destinationPath, 'styles.js'))) {
      log(`${chalk.yellow('  already exists')} app/components/${entity}/styles.js`);
      return;
    } else {
      let bytesWrittenS = fs.writeFileSync(path.resolve(destinationPath, 'styles.js'), stylesResult);
      log(`${chalk.green('  created')} app/components/${entity}/styles.js`);
    }
  } else {
    log(chalk.red(`Unknown blueprint: ${blueprint}`));
    return;
  }
}

main(process.argv.slice(2));
process.exit();

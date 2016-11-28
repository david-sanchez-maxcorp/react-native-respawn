const fs = require('fs');
const pageComponents = fs.readdirSync('app/components');
const pageContainers = fs.readdirSync('app/containers');
const sharedPageComponents = fs.readdirSync('app/_shared/components');
const sharedPageContainers = fs.readdirSync('app/_shared/containers');
const components = pageComponents.concat(pageContainers, sharedPageComponents, sharedPageContainers);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
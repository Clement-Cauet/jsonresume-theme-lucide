const Handlebars = require('handlebars');
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');

const HELPERS = join(__dirname, 'theme/hbs-helpers');

const { birthDate } = require(join(HELPERS, 'birth-date.js'));
const { dateHelpers } = require(join(HELPERS, 'date-helpers.js'));
const { paragraphSplit } = require(join(HELPERS, 'paragraph-split.js'));
const { toLowerCase } = require(join(HELPERS, 'to-lower-case.js'));
const { spaceToDash } = require(join(HELPERS, 'space-to-dash.js'));
const { nameSplit } = require(join(HELPERS, 'name-split.js'));

const { MY, Y, DMY } = dateHelpers;

Handlebars.registerHelper('birthDate', birthDate);
Handlebars.registerHelper('MY', MY);
Handlebars.registerHelper('Y', Y);
Handlebars.registerHelper('DMY', DMY);
Handlebars.registerHelper('paragraphSplit', paragraphSplit);
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('spaceToDash', spaceToDash);
Handlebars.registerHelper('nameSplit', nameSplit);
Handlebars.registerHelper('eq', function (a, b) { return a === b; });

function render(resume) {
  const style = readFileSync(`${__dirname}/theme/.config/styles/style.css`, 'utf-8');
  const template = readFileSync(`${__dirname}/resume.hbs`, 'utf-8');
  const partialsDir = join(__dirname, 'theme/partials');
  const filenamePartial = readdirSync(partialsDir);

  filenamePartial.forEach((filenamePartial) => {
    const matches = /^([^.]+).hbs$/.exec(filenamePartial);
    if (!matches) return;
    const name = matches[1];
    const filepath = join(partialsDir, filenamePartial);
    const template = readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });

  return Handlebars.compile(template)({
    style,
    resume,
  });
}

const marginValue = '0.8 cm';
const pdfRenderOptions = {
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue,
  }
}

module.exports = { render, pdfRenderOptions };

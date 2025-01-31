const moment = require('moment');
moment.locale('fr');

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const dateHelpers = {
  DMY: date => capitalizeFirstLetter(moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY')),
  MY: date => capitalizeFirstLetter(moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')),
  Y:    date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  duration: (startDate, endDate) => {
    if (!startDate) return '';

    let start = moment(startDate, 'YYYY-MM-DD');
    let end = endDate ? moment(endDate, 'YYYY-MM-DD') : moment();

    if (!start.isValid() || !end.isValid()) {
      return "Dates invalides";
    }

    let years = end.diff(start, 'years');
    start.add(years, 'years');
    let months = end.diff(start, 'months');

    let result = [];
    if (years > 0) result.push(`${years} an${years > 1 ? 's' : ''}`);
    if (months > 0) result.push(`${months} mois`);

    return result.join(' ');
  }
};

module.exports = { dateHelpers };

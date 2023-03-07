// below function is used as a helper method for displaying the formatted date
module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },

  ifIn: (value, arrayElements) => {
    if (arrayElements.indexOf(value.toString()) > -1) {
      return "checked";
    } else {
      return "";
    }
  },
};

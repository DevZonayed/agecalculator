/**
 *  This is function for get element from docktype
 * @param {*} element
 * @returns
 */
function s(element) {
  return document.querySelector(element);
}

/**
 * main input and function workspace
 */
function finaluserage() {
  let birthDate = s("#birthDate").value;
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let today = new Date();

  let year1 = today.getFullYear();
  let month1 = today.getMonth() + 1;
  let date1 = today.getDate();
  lipchecker(year1);
  let birthdate = new Date(birthDate);
  let year2 = birthdate.getFullYear();
  let month2 = birthdate.getMonth() + 1;
  let date2 = birthdate.getDate();
  return finalresult(year1, year2, month1, month2, date1, date2, months);
}
/**
 * Check the lip year
 * @param {*} year
 */
function lipchecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  }
}
/**
 * final Calculations
 * @param {*} year1
 * @param {*} year2
 * @param {*} month1
 * @param {*} month2
 * @param {*} date1
 * @param {*} date2
 */
function finalresult(year1, year2, month1, month2, date1, date2, months) {
  let ageYear, ageMonth, ageday;
  if (
    year1 < year2 ||
    (month1 < month2 && year1 === year2) ||
    (date1 < date2 && month1 === month2 && year2 === year1)
  ) {
    alert("Must have to born");
  } else {
    ageYear = year1 - year2;
    if (month1 >= month2) {
      ageMonth = month1 - month2;
    } else {
      ageYear--;
      ageMonth = month1 + 12 - month2;
    }
    if (date1 >= date2) {
      ageday = date1 - date2;
    } else {
      ageMonth--;
      days = months[month2 - 2];
      ageday = days + date1 - date2;
      if (ageMonth < 0) {
        ageYear--;
        ageMonth = 11;
      }
    }
  }
  return (userage = {
    year: ageYear,
    month: ageMonth,
    days: ageday,
  });
}


/**
 * deleverd to output
 */
let submit = s(".calculate");
submit.onclick = () => {
  let uName = s("#userName").value;
  let output = s("#finalage");
  output.innerText = `Hello ${uName} your age = ${finaluserage().year} years ${
    finaluserage().month
  } Months ${finaluserage().days} Days`;
};

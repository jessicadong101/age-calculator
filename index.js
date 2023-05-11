var age_day = "--";
var age_month = "--";
var age_year = "--";

function getInput() {
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");

    if (!day || !month || !year) {
        return;
    } 

    const today = new Date();
    let year_t = today.getFullYear();
    let month_t = today.getMonth() + 1; // month is index-based
    let day_t = today.getDate();

    day = day.value;
    month = month.value; 
    year = year.value;

    let months_31 = [1, 3, 5, 7, 8, 10, 12];

    var error_vals = 0;
    /** Check for empty or invalid values */

    // day
    if (day == "") {
        document.getElementById('error-day').innerHTML = "This field is required.";
        error_vals++;
    } else if (day < '1' || day > '31') {
        document.getElementById('error-day').innerHTML = "Must be a valid day.";
        error_vals++;
    } else if ((day > '28' && month_t == 2 && year_t % 4 != 0) 
    || (day > '29' && month_t == 2 && year_t % 4 == 0)) {
        document.getElementById('error-day').innerHTML = "Must be a valid day.";
        error_vals++;
    } else if (day > '30' && !months_31.includes(month_t)) {
        document.getElementById('error-day').innerHTML = "Must be a valid day.";
        error_vals++;
    } else {
        document.getElementById('error-day').innerHTML = "";
    }

    // month
    if (month == "") {
        document.getElementById('error-month').innerHTML = "This field is required.";
        error_vals++;
    } else if (month < 1 || month > 12) {
        document.getElementById('error-month').innerHTML = "Must be a valid month.";
        error_vals++;
    } else {
        document.getElementById('error-month').innerHTML = "";
    }

    // year
    if (year == "") {
        document.getElementById('error-year').innerHTML = "This field is required.";
        error_vals++;
    } else if (year > year_t) {
        document.getElementById('error-year').innerHTML = "Must be in the past.";
        error_vals++;
    } else if (year == year_t && month > month_t) {
        document.getElementById('error-year').innerHTML = "Must be in the past.";
        error_vals++;
    } else if (year == year_t && month == month_t && day > day_t) {
        document.getElementById('error-year').innerHTML = "Must be in the past.";
        error_vals++;
    } else {
        document.getElementById('error-year').innerHTML = "";
    }

   

    if (error_vals > 0) {
        // change all styles to red
        console.log("error vals > 0");
        document.getElementById('top').style.color = "red";
    } else {
        document.getElementById('top').style.color = "black";
        

        if (day_t < day) {
            const temp = new Date(year_t, month_t, 0);
            day_t += temp.getDate();
            month_t -= 1;
        }
        if (month_t < month) {
            month_t += 12;
            year_t -= 1;
        }

        age_day = day_t - day;
        age_month = month_t - month;
        age_year = year_t - year;

        getAge();
    }
}

function getAge() {
    let year = document.getElementById('age-year');
    if (year) {
        year.innerHTML = age_year + " years";
    }

    let month = document.getElementById('age-month');
    if (month) {
        month.innerHTML = age_month + " months";
    }

    let day = document.getElementById('age-day');
    if (day) {
        day.innerHTML = age_day + " days";
    }
}
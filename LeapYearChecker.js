function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 400
            } else {
                return false; // Divisible by 100 but not by 400
            }
        } else {
            return true; // Divisible by 4 but not by 100
        }
    } else {
        return false; // Not divisible by 4
    }
}

// Test the function
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false

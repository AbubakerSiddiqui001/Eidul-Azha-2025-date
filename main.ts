#! /usr/bin/env node

import chalk from 'chalk';
import moment from 'moment-hijri';


console.log(chalk.italic.blueBright ("\n \t Wellcome to my '2025' Eid ul Azha date \n"));
console.log(" ================================================================ \n");



// Function to find the next Eidul Azha
function getNextEidulAzha(): string {
    // Eidul Azha falls on the 10th day of Dhu al-Hijjah
    const eidulAzhaDay = 10;
    const eidulAzhaMonth = 12; // Dhu al-Hijjah is the 12th month in the Hijri calendar

    // Get today's date in the Hijri calendar
    const todayHijriDate = moment();
    
    // Get the current Hijri year
    const currentHijriYear = todayHijriDate.iYear();

    // Calculate Eidul Azha for the current and next Hijri year
    const thisYearEidulAzha = moment(`${currentHijriYear}/${eidulAzhaMonth}/${eidulAzhaDay}`, 'iYYYY/iM/iD');
    const nextYearEidulAzha = moment(`${currentHijriYear + 1}/${eidulAzhaMonth}/${eidulAzhaDay}`, 'iYYYY/iM/iD');

    // Determine if Eidul Azha for this year has passed
    const nextEidulAzha = thisYearEidulAzha.isAfter(todayHijriDate) ? thisYearEidulAzha : nextYearEidulAzha;

    // Convert the next Eidul Azha date to the Gregorian calendar
    const nextEidulAzhaGregorian = nextEidulAzha.format('YYYY-MM-DD');

    return chalk.yellowBright(`The next Eidul Azha will be on ${chalk.redBright (nextEidulAzhaGregorian)}`);
}

// Output the next Eidul Azha date
console.log(getNextEidulAzha());





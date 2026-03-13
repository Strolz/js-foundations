
/*

1. You should have a function named getAverage.
2. Your getAverage function should return a number.
3. getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) should return 71.7.
4. getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) should return 85.4.
5. getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) should return 92.4.
6. getAverage([10, 20, 30, 40, 55, 65, 75, 83]) should return 47.25.
7. getAverage([10, 20, 30, 40, 50, 60, 70, 97]) should return 47.125.
8. Your getAverage function should return the average score of the test scores.
9. You should have a function named getGrade.
10. Your getGrade function should return "A+" if the score is 100.
11. Your getGrade function should return "A" if the score is between 90 and 99.
12. Your getGrade function should return "B" if the score is between 80 and 89.
13. Your getGrade function should return "C" if the score is between 70 and 79.
14. Your getGrade function should return "D" if the score is between 60 and 69.
15. Your getGrade function should return "F" if the score is between 0 and 59.
16. You should have a function named hasPassingGrade.
17. Your hasPassingGrade function should return a boolean value.
18. Your hasPassingGrade function should return true if the grade is an "A".
19. Your hasPassingGrade function should return false if the grade is an "F".
20. Your hasPassingGrade function should return true for all passing grades.
21. You should have a function named studentMsg.
22. studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) should return the following message: "Class average: 71.7. Your grade: F. You failed the course.".
23. studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) should return the following message: "Class average: 50.8. Your grade: A+. You passed the course.".
24. studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85) should return the following message: "Class average: 48.25. Your grade: B. You passed the course.".
25. studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75) should return the following message: "Class average: 45.625. Your grade: C. You passed the course.".
26. Your studentMsg function should return the correct message based on the student's score and the class average.

*/


/* Calculate average */ 
function getAverage(arr) {

    let sum = 0;
    
    for(const check of arr) {
        sum += check;
    }

    return sum / arr.length;

};

/* Calculate grade based off average */
function getGrade(score) {

    if(score <= 59) {
        return "F";
    } else if(score <= 69 && score >= 60) {
        return "D";
    } else if(score <= 79 && score >= 70) {
        return "C"; 
    } else if(score <= 89 && score >= 80) {
        return "B"; 
    } else if(score <= 99 && score >= 90) {
        return "A"; 
    } else {
        return "A+";
    }

};

/* Determine if score passes */
function hasPassingGrade(score) {

    let newScore = getGrade(score)

    if(newScore !== "F") {
        return true;
    } else {
        return false;
    }

};

/* Display formated pass / fail message */
function studentMsg(arr, num) {

    let average = getAverage(arr);
    let finalGrade = getGrade(num);
    let passOrNo = hasPassingGrade(num);

    if(passOrNo !== true) {
        return `Class average: ${average}. Your grade: ${finalGrade}. You failed the course.`
    } else {
        return `Class average: ${average}. Your grade: ${finalGrade}. You passed the course.`
    }

};


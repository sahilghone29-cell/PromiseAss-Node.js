
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }
        }, 2000);
    });
}



function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const total = marks.reduce((sum, mark) => sum + mark, 0);
            const average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }
        }, 2000);
    });
}



function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }
        }, 2000);
    });
}


const codingMarks = [80, 75, 90, 85, 70];
const technicalMarks = [75, 80, 85, 70, 90];

const codingCutoff = 60;
const technicalCutoff = 60;
const finalCutoff = 65;



codingScoreCheck(codingMarks, codingCutoff)
    .then((codingAverage) => {
        console.log("Coding Assessment Cleared!");
        console.log("Coding Average:", codingAverage);

        // Technical Interview
        return technicalInterviewCheck(
            technicalMarks,
            technicalCutoff
        );
    })
    .then((technicalAverage) => {
        console.log("Technical Interview Cleared!");
        console.log("Technical Average:", technicalAverage);

        // Final Selection
        return finalSelectionCheck(
            codingMarks.reduce((sum, mark) => sum + mark, 0) / codingMarks.length,
            technicalAverage,
            finalCutoff
        );
    })
    .then((finalAverage) => {
        console.log("Final Selection Cleared!");
        console.log("Final Average:", finalAverage);
        console.log("🎉 Congratulations! You are selected.");
    })
    .catch((error) => {
        console.log(error);
    });
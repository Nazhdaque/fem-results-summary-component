// --- all of this just for fun --- try to change data in data.json and reload the page
const capitalize = string =>
	string[0].toUpperCase() + string.substring(1).toLowerCase();

const grades = {
	terrible: "Most likely you are dying... or dishonestly answered questions",
	bad: "Hope you get better",
	tolerably: "Well... not bad",
	normal: "Congratulations! You're normal",
	great: "You scored higher than 65% of the people who have taken these tests",
	impressive: "Are you a Ghostrunner?",
	cheater: "Well, how did it happen, may I ask?",
};

const getRankData = index => {
	const grade = Object.keys(grades)[index];
	document.querySelector("#rank").textContent = capitalize(grade);
	document.querySelector("#desc").textContent = grades[grade];
};

export const getRank = rating => {
	if (rating <= 10) {
		getRankData(0);
	} else if (rating <= 30) {
		getRankData(1);
	} else if (rating <= 50) {
		getRankData(2);
	} else if (rating <= 70) {
		getRankData(3);
	} else if (rating <= 90) {
		getRankData(4);
	} else if (rating <= 100) {
		getRankData(5);
	} else {
		getRankData(6);
	}
};

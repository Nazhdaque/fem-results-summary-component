import "../style.css";
import { FetchWrapper } from "./fetchwrapper";

const scores = document.querySelectorAll(".score");
const titles = document.querySelectorAll(".summary-item__title");
const icons = document.querySelectorAll(".summary-item__icon use");
const result = document.querySelector("#rating");
const rank = document.querySelector("#rank");
const desc = document.querySelector("#desc");
const pathname = "images/icons.svg#icon-";
const grades = {
	terrible: "Most likely you are dying... or dishonestly answered questions",
	bad: "Hope you get better",
	tolerably: "Well... not bad",
	normal: "Congratulations! You're normal",
	great: "You scored higher than 65% of the people who have taken these tests",
	impressive: "Are you a Ghostrunner?",
	cheater: "Well, how did it happen, may I ask?",
};

const capitalize = word =>
	word[0].toUpperCase() + word.substring(1).toLowerCase();

const getRankData = index => {
	const grade = Object.keys(grades)[index];
	rank.textContent = capitalize(grade);
	desc.textContent = grades[grade];
};

const getIconURL = endpoint => window.location.href + pathname + endpoint;

const getRank = rating => {
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

class GetRating {
	constructor(scoreSum, knownRating) {
		this.scoreSum = scoreSum;
		this.knownRating = knownRating;
	}
	set knownRating(value) {
		this._knownRating = Number.parseInt(value, 10);
	}
	get knownRating() {
		return this._knownRating;
	}

	get100percent = () => {
		this.maxValue = (this.scoreSum * 100) / this.knownRating;
		// The calculated result 401.3157894736842 depends on the value of the score sum,
		// but in real life 100% is a known fixed value.
		// Now we know it and can use it to receive dynamically calculated rating values
		// depending on the data received from the API, so let
		this.maxValue = 401.3;
		return this;
	};
	getRoundedTo10 = () => {
		this.percent = Math.round(this.maxValue / 10) * 10;
		return this;
	};
	getRoundedPercent = () => Math.round((this.scoreSum * 100) / this.percent);
}

const API = new FetchWrapper("");
API.get("data.json").then(data => {
	let sum = 0;
	let fails = 0;
	const failsPercent = 100 / data.length;

	data.forEach((item, index) => {
		const endpoint = item.category.toLowerCase();
		const iconURL = getIconURL(endpoint);
		icons[index].setAttribute("href", `${iconURL}`);
		titles[index].textContent = item.category;
		scores[index].textContent = item.score;
		sum += Number.parseInt(item.score, 10);

		if (item.category === "Verbal" || item.category === "Visual") {
			return;
		} else {
			item.score <= 10 && (fails += failsPercent);
			item.score === 0 && (fails += failsPercent * 2);
		}
	});

	fails !== 0 && (sum -= (sum / 100) * fails);
	sum < 0 ? (sum = 0) : sum;

	const ratingData = new GetRating(sum, 76); // second argument is redundant and can be ommited, if we use fixed 100% value
	const rating = ratingData
		.get100percent()
		.getRoundedTo10()
		.getRoundedPercent();

	result.textContent = rating;
	getRank(rating);
});

console.log(
	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque",
	"background: #222; color: chartreuse; font-size: 1.25rem"
);

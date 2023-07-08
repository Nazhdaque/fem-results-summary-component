import "../style.css";
import { FetchWrapper } from "./fetchwrapper";
import { render } from "lit-html";
import { getRank } from "./getRank.js";
import { GetRating } from "./getRating.js";
import { listItemTemplate } from "./html-listItem.js";

// --- just for fun
let fails = 0;
const getFails = (category, score, data) => {
	const failsPercent = 100 / data.length;

	if (category === "Verbal" || category === "Visual") {
		return;
	} else {
		score <= 10 && (fails += failsPercent);
		score === 0 && (fails += failsPercent * 2);
	}
};
// --- just for fun
let sum = 0;
const getSum = (fails, sum) => {
	fails !== 0 && (sum -= (sum / 100) * fails);
	sum < 0 ? (sum = 0) : sum;
};

// ---
const API = new FetchWrapper("");
API.get("data.json").then(data => {
	const listItems = [];

	data.forEach(({ category, score }) => {
		listItems.push(listItemTemplate(category, score));
		sum += Number.parseInt(score, 10);
		getFails(category, score, data);
	});

	render(listItems, document.querySelector(".summary-items"));
	getSum(fails, sum);

	const ratingData = new GetRating(sum, 76); // second argument is redundant and can be ommited, if we use fixed 100% value
	const rating = ratingData
		.get100percent()
		.getRoundedTo10()
		.getRoundedPercent();

	document.querySelector("#rating").textContent = rating;
	getRank(rating);
});

// ---
console.log(
	"%cCoded by ✨Nazhdaque✨\nhttps://www.frontendmentor.io/profile/Nazhdaque/solutions",
	"background: #222; color: chartreuse; font-size: 1.25rem"
);

import { html } from "lit-html";

const getIconURL = endpoint =>
	window.location.href + "images/icons.svg#icon-" + endpoint;

export const listItemTemplate = (category, score) => html`
	<li class="summary-item">
		<div class="summary-item__caption-group">
			<svg class="summary-item__icon">
				<use href="${getIconURL(category.toLowerCase())}"></use>
			</svg>
			<h3 class="summary-item__title">${category}</h3>
		</div>

		<p class="summary-item__score"><span class="score">${score}</span> / 100</p>
	</li>
`;

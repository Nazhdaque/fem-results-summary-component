// --- all of this just for fun
export class GetRating {
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

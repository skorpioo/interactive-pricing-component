const rangeSlider = document.querySelector("[data-slider]");
const pageViews = document.querySelector("[data-pageviews]");
const price = document.querySelector("[data-price]");
const fullPrice = document.querySelector("[data-fullprice]");
const time = document.querySelector("[data-time]");
const toggle = document.querySelector("[data-toggle]");

var prices = [8, 12, 16, 24, 36];
var views = ["10K", "50K", "100K", "500K", "1M"];

rangeSlider.oninput = function () {
	pageViews.innerHTML = views[this.value];
	if (toggle.checked) {
		price.innerHTML = "$" + prices[this.value] * 12 * 0.75 + ",-";
		fullPrice.innerHTML =
			"You save: $" + (prices[this.value] * 12 - prices[this.value] * 12 * 0.75) + ",-";

		time.innerHTML = "/ year";
	} else {
		price.innerHTML = "$" + prices[this.value] + ",-";
		fullPrice.innerHTML = "";
		fullPrice.style.padding = "0";
		time.innerHTML = "/ month";
	}

	toggle.addEventListener("change", e => {
		if (e.target.checked) {
			price.innerHTML = "$" + prices[this.value] * 12 * 0.75 + ",-";
			fullPrice.innerHTML =
				"You save: $" + (prices[this.value] * 12 - prices[this.value] * 12 * 0.75) + ",-";
			time.innerHTML = "/ year";
		} else {
			price.innerHTML = "$" + prices[this.value] + ",-";
			fullPrice.innerHTML = "";
			fullPrice.style.padding = "0";
			time.innerHTML = "/ month";
		}
	});
};
rangeSlider.oninput();

function addListenerMulti(el, s, fn) {
	s.split(" ").forEach(e => el.addEventListener(e, fn, false));
}

addListenerMulti(rangeSlider, "change mousemove", function () {
	var x = rangeSlider.value * 25;
	var color =
		"linear-gradient(90deg, var(--clr-accent-soft)" + x + "%, var(--clr-empty-slider-bar)" + x + "%)";
	rangeSlider.style.background = color;
});

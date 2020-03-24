// Fetching cities from endpoint
const cities = [];
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    cities.push(...data);
  });

// Eventlistener for the input
const input = document.querySelector("input");
input.addEventListener("change", searchMatch);
input.addEventListener("keyup", searchMatch);

// Searching the matching cities or states, and calling display function
function searchMatch() {
  const matched = cities.filter(el => {
    return (
      el.city.toLowerCase().includes(this.value) ||
      el.state.toLowerCase().includes(this.value)
    );
  });
  displayMatched(matched, this.value);
}

// Displaying the result
function displayMatched(matched, input) {
  const html = matched
    .map(el => {
      const regex = new RegExp(input, "gi");
      const cityName = el.city.replace(
        regex,
        `<span class="hl">${input}</span>`
      );
      const stateName = el.state.replace(
        regex,
        `<span class="hl">${input}</span>`
      );
      return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(el.population)}</span>
        </li>`;
    })
    .join("");

  document.querySelector(".suggestions").innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

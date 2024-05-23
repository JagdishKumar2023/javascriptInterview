const btn = document.querySelector(".incrementBtn");
const pressedBtn = document.querySelector(".incrementPressed");
const countBtn = document.querySelector(".incrementCount");

let pressedCount = 0;
let triggerCount = 0;

const debounceCount = _.debounce(() => {
  const now = new Date().getTime();
  console.log(now);
  countBtn.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  pressedBtn.textContent = ++pressedCount;
  debounceCount();
});

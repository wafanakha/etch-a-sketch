const container = document.querySelector("#flex-container");
const grid = document.querySelectorAll("#option button");
let pixLength = 64;

for (let i = 0; i < pixLength ** 2; i++) {
  const div = document.createElement("div");
  div.classList.add("pix");
  container.appendChild(div);
}

const pix = document.querySelectorAll(".pix");
pix.forEach((element) => {
  element.addEventListener(
    "mouseover",
    () => (element.style.backgroundColor = "black")
  );
});

grid.forEach((element) => {
  element.addEventListener("click", () => {
    pix.forEach((element) => {
      element.style.backgroundColor = "rgb(204, 196, 205)";
    });
    pixLength = parseInt(element.innerText);
    for (let i = 0; i < pixLength ** 2; i++) {
      const div = document.createElement("div");
      div.classList.add("pix");
      container.appendChild(div);
    }
  });
});

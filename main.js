const container = document.querySelector("#flex-container");
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

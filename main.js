const container = document.querySelector("#flex-container");

for (let i = 0; i < 64; i++) {
  var div = document.createElement("div");
  div.classList.add("pix");
  container.appendChild(div);
  console.log(div);
}

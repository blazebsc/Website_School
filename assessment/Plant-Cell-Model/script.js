const parts = document.querySelectorAll(".part");
const name = document.getElementById("name");
const description = document.getElementById("description");

parts.forEach(part => {
  part.addEventListener("click", () => {
    name.textContent = part.dataset.name;
    description.textContent = part.dataset.info;
  });
});

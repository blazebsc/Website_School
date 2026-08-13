const parts = document.querySelectorAll(".part");
const name = document.getElementById("name");
const description = document.getElementById("description");

parts.forEach(part => {
  part.addEventListener("click", () => {
    name.textContent = part.dataset.name;
    description.textContent = part.dataset.info;
  });
});

const vacuole = document.querySelector('[data-name="Central Vacuole"]');
const clickTimes = [];

vacuole.addEventListener("click", (e) => {
  const now = Date.now();
  clickTimes.push(now);

  while (clickTimes.length > 0 && clickTimes[0] < now - 5000) {
    clickTimes.shift();
  }

  if (clickTimes.length >= 10) {
    clickTimes.length = 0;

    const overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:white;";
    overlay.innerHTML = `<img src="easter-egg.jpg" style="max-width:100%;max-height:100%;">`;
    document.body.appendChild(overlay);

    setTimeout(() => overlay.remove(), 500);
  }
});

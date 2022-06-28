const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

const seasonStartMonth = Math.abs(Math.floor(month / 3)) * 3;
const seasonStartDate = new Date(year, seasonStartMonth, 1, 0, 0, 0);
const weekNumber =
  Math.floor((today - seasonStartDate) / (1000 * 60 * 60 * 24 * 7)) + 1;

let season = "";
if (month < 3) {
  season = "Winter";
} else if (month < 6) {
  season = "Spring";
} else if (month < 9) {
  season = "Summer";
} else {
  season = "Fall";
}

document.getElementById("weekno").textContent = weekNumber;
document.getElementById("seasonyear").textContent = season + " " + year;

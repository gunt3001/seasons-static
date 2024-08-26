// Get current day, month, year
const today = new Date();
const month = today.getMonth(); // Month in JS is 0-based (0-11)
const year = today.getFullYear();

// Calculate the starting month for current season (0-January, 3-April, 6-July, or 9-October)
const seasonStartMonth = Math.abs(Math.floor(month / 3)) * 3;
// Create Date object of the first day of the season (always the 1st of whatever month above)
const seasonStartDate = new Date(year, seasonStartMonth, 1, 0, 0, 0);
// If the first day of the season is not Sunday (0), adjust the date to the next Sunday
if (seasonStartDate.getDay() !== 0) {
  const daysUntilSunday = 7 - seasonStartDate.getDay();
  seasonStartDate.setDate(seasonStartDate.getDate() + daysUntilSunday);
}
// Calculate how many weeks has it been since the first Sunday of the season
const weekNumber =
  Math.floor((today - seasonStartDate) / (1000 * 60 * 60 * 24 * 7)) + 1;

// Get the season text to be displayed
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

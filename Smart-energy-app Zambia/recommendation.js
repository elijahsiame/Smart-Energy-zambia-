const appliances = JSON.parse(localStorage.getItem("appliances") || "[]");

function generateRecommendation() {
  const totalKwh = appliances.reduce((sum, a) => sum + (a.watts * a.hours / 1000), 0);
  const maxWatts = appliances.reduce((max, a) => Math.max(max, a.watts), 0);
  const batterySize = totalKwh * 1.5;
  const inverterSize = (maxWatts / 1000) * 1.2;

  document.getElementById("rec-kwh").textContent = totalKwh.toFixed(2);
  document.getElementById("battery-size").textContent = batterySize.toFixed(2);
  document.getElementById("inverter-size").textContent = inverterSize.toFixed(2);
}

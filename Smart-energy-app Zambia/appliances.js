let appliances = JSON.parse(localStorage.getItem("appliances") || "[]");

function addAppliance() {
  const name = document.getElementById("appliance-name").value;
  const watts = parseFloat(document.getElementById("appliance-watts").value);
  const hours = parseFloat(document.getElementById("appliance-hours").value);
  if (name && watts && hours) {
    appliances.push({ name, watts, hours });
    localStorage.setItem("appliances", JSON.stringify(appliances));
    renderList();
  }
}

function renderList() {
  const list = document.getElementById("appliance-list");
  list.innerHTML = "";
  appliances.forEach((a, i) => {
    const li = document.createElement("li");
  const dailyKwh = ((a.watts * a.hours) / 1000).toFixed(2);
  li.textContent = `${a.name} - ${a.watts}W × ${a.hours}h = ${dailyKwh} kWh/day`;


    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => {
      appliances.splice(i, 1);
      localStorage.setItem("appliances", JSON.stringify(appliances));
      renderList();
    };
    li.appendChild(btn);
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderList);

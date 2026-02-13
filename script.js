// script.js

const petsURL = "https://raw.githubusercontent.com/skbidi-ai/Gameservices-website/main/pet_values.json";

// Create a container dynamically
const container = document.createElement("div");
container.id = "pets-container";
container.style.position = "fixed";
container.style.top = "50%";
container.style.left = "50%";
container.style.transform = "translate(-50%, -50%)";
container.style.background = "white";
container.style.border = "2px solid #333";
container.style.borderRadius = "10px";
container.style.padding = "20px";
container.style.maxHeight = "80vh";
container.style.overflowY = "auto";
container.style.zIndex = "9999";
container.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
document.body.appendChild(container);

// Fetch JSON
fetch(petsURL)
  .then(response => {
    if (!response.ok) throw new Error("Network error: " + response.status);
    return response.json();
  })
  .then(pets => displayPets(pets))
  .catch(error => {
    console.error("Error loading pets:", error);
    container.innerText = "Failed to load pets.";
  });

// Function to display pets
function displayPets(pets) {
  container.innerHTML = ""; // Clear loading text
  for (const key in pets) {
    const pet = pets[key];
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "5px";
    card.style.margin = "5px";
    card.style.padding = "10px";
    card.style.textAlign = "center";

    card.innerHTML = `
      <img src="${pet.image_url}" alt="${pet.name}" style="width:100px;height:auto;border-radius:4px"/>
      <h4>${pet.name}</h4>
      <p><strong>Value:</strong> ${pet.value}</p>
      <p><strong>Demand:</strong> ${pet.demand}</p>
      <p><strong>Trend:</strong> ${pet.trend}</p>
      <p><strong>Tier:</strong> ${pet.tier}</p>
      <p><strong>Obtain:</strong> ${pet.obtainement}</p>
    `;
    container.appendChild(card);
  }
}

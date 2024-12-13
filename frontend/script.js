const properties = [
    {
        type: "2 BHK",
        name: "Cozy 2 BHK Villa",
        location: "Calangute Beach, Goa",
        price: "₹5,000/night",
        img: "images/prop1.jpg"
    },
    {
        type: "2 BHK",
        name: "Luxury 2 BHK Apartment",
        location: "Anjuna Beach, Goa",
        price: "₹7,500/night",
        img: "images/prop2.png"
    },
    {
        type: "4 BHK",
        name: "Spacious 4 BHK Villa",
        location: "Vagator Beach, Goa",
        price: "₹12,000/night",
        img: "images/prop3.jpg"
    },
    {
        type: "4 BHK",
        name: "Beachside 4 BHK House",
        location: "Baga Beach, Goa",
        price: "₹15,000/night",
        img: "images/prop4.jpg"
    }
];

document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("results-container");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter results based on search query
    const filteredProperties = properties.filter(property =>
        property.type.toLowerCase().includes(query)
    );

    if (filteredProperties.length > 0) {
        filteredProperties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("recommendation-card");
            card.innerHTML = `
                <img src="${property.img}" alt="${property.name}">
                <h3>${property.name}</h3>
                <p>${property.location}</p>
                <p>${property.price}</p>
            `;
            resultsContainer.appendChild(card);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found. Try searching for '2 BHK' or '4 BHK'.</p>";
    }
});

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-toggle");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
}

function scrollToRecommendations() {
    document.getElementById("recommendations").scrollIntoView({ behavior: "smooth" });
}

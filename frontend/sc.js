const properties = [
    {
        type: "2 BHK",
        name: "Cozy 2 BHK Villa",
        location: "Candolim, Goa",
        price: "₹5,000/night",
        img: "https://via.placeholder.com/250"
    },
    {
        type: "2 BHK",
        name: "Luxury 2 BHK Apartment",
        location: "Anjuna, Goa",
        price: "₹7,500/night",
        img: "https://via.placeholder.com/250"
    },
    {
        type: "4 BHK",
        name: "Spacious 4 BHK Villa",
        location: "Baga, Goa",
        price: "₹12,000/night",
        img: "https://via.placeholder.com/250"
    },
    {
        type: "4 BHK",
        name: "Beachside 4 BHK House",
        location: "Vagator, Goa",
        price: "₹15,000/night",
        img: "https://via.placeholder.com/250"
    }
];

document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.trim();
    const resultsContainer = document.getElementById("results-container");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter results based on user query
    const filteredProperties = properties.filter(property =>
        property.type.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProperties.length > 0) {
        filteredProperties.forEach(property => {
            const card = document.createElement("div");
            card.classList.add("result-card");
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

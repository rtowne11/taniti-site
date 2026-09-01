const categoryButtons = document.querySelectorAll(".category-filter");
const activityButtons = document.querySelectorAll(".activity-filter");
const adventureItems = document.querySelectorAll(".adventure-item");
const resultCount = document.getElementById("resultCount");

let selectedCategory = "all";
let selectedActivity = "all";
const adventures = [
  {
    name: "Taniti Volcano Adventure",
    category: ["island-tours"],
    activity: "volcano-tours",
    image: "images/taniti-volcano-tour.png",
    description:
      "Explore Taniti's famous volcano and enjoy spectacular views of the island.",
    price: 75,
  },
  {
    name: "Sea Turtle Snorkeling",
    category: [ "wildlife-nature", "water"],
    activity: "snorkeling",
    image: "images/sea-turtle-snorkeling.png",
    description:
      "Explore colorful reefs and marine life in Taniti's clear tropical waters.",
    price: 45,
  },
  {
    name: "Taniti Rainforest Adventures",
    category: ["wildlife-nature"],
    activity: "rainforests",
    image: "images/rainforest.png",
    description:
      "Hike through lush tropical vegetation, streams, and hidden waterfalls.",
    price: 55,
  },
  {
    name: "Volcano Ridge Tours",
    category: ["island-tours"],    
    activity: "volcano-tours",
    image: "images/ridge-tour.png",
    description: "Explore the stunning ridges of Taniti's volcano.",
    price: 80,
  },
  {
    name: "Wildleaf Rainforest Expedition",
    category: ["wildlife-nature"],
    activity: "rainforests",
    image: "images/rainforest-expedition.png",
    description:
      "Embark on an exciting adventure through Taniti's diverse wildlife and natural habitats.",
    price: 70,
  },
  {
    name: "Taniti Zipline Adventures",
    category: ["outdoor"],
    activity: "ziplining",
    image: "images/zipline1.png",
    description: "Soar through Taniti's tropical rainforest canopy.",
    price: 65,
  },
  {
    name: "Taniti Heritage Museum",
    category: ["culture"],
    activity: "museum",
    image: "images/heritage-museum.png",
    description:
      "Discover the rich history and culture of Taniti at this interactive museum.",
    price: 25,
  },
  {
    name: "Taniti Boat Tours",
    category: ["water", "island-tours"],
    activity: "boat-tours",
    image: "images/boat-tour1.png",
    description:
      "Experience the beauty of Taniti's coastline with a scenic boat tour.",
    price: 60,
  },
  {
    name: "Island Explorer Boat Tour",
    category: ["water", "island-tours"],
    activity: "boat-tours",
    image: "images/boat-tour2.png",
    description:
      "Explore the hidden coves and beaches of Taniti on a guided boat tour.",
    price: 80,
  },
  {
    name: "Lagoon Boat Tour",
    category: ["water", "island-tours"],
    activity: "boat-tour",
    image: "images/boat-tour3.png",
    description: "Explore the crystal-clear waters of Taniti's lagoons.",
    price: 50,
  },
  {
    name: "Taniti Fishing",
    category: ["water", "outdoor"],
    activity: "fishing",
    image: "images/fishing.png",
    description:
      "Go fishing in Taniti's pristine waters and catch some of the local fish.",
    price: 40,
  },
  {
    name: "Yellow Leaf Bay Fishing Tour",
    category: ["water", "island-tours"],
    activity: "fishing",
    image: "images/fishing-tour.png",
    description: "Enjoy a day of fishing in the beautiful Yellow Leaf Bay.",
    price: 65,
  },
  {
    name: "Taniti Helicopter Rides",
    category: ["outdoor"],
    activity: "helicopter",
    image: "images/helicopter.png",
    description:
      "Take to the skies and see Taniti from a whole new perspective.",
    price: 150,
  },
  {
    name: "Seagull Helicopter Tours",
    category: ["outdoor", "island-tours"],
    activity: "helicopter",
    image: "images/helo2.png",
    description:
      "Experience the thrill of a helicopter tour over Taniti's stunning landscapes.",
    price: 200,
  },
  {
    name: "Merriton Art House",
    category: ["culture"],
    activity: "art-gallery",
    image: "images/art-house.png",
    description: "Explore the vibrant art scene at Merriton Art House.",
    price: 20,
  },
  {
    name: "Merriton Bay Golf Club",
    category: ["outdoor"],
    activity: "golfing",
    image: "images/golf-course.png",
    description: "Play a round of golf at Merriton Bay Golf Club.",
    price: 75,
  },
  {
    name: "Taniti Lights Center",
    category: ["culture"],
    activity: "theater",
    image: "images/theater.png",
    description: "Enjoy traditional island music, dance, and cultural performances at the Taniti Lights Center.",
    price: 40,
  },
  {
    name: "Taniti Reef Snorkeling Adventure",
    category: ["water", "outdoor"],
    activity: "snorkeling",
    image: "images/snorkeling.png",
    description:
      "Swim with tropical fish in the crystal-clear waters of Taniti's reefs.",
    price: 55,
  },
  {
    name: "Cove Arcade",
    category: ["culture"],
    activity: "arcade",
    image: "images/arcade.png",
    description: "Have fun at the exciting Cove Arcade.",
    price: 20,
  },
  {
    name: "Pub Crawl",
    category: ["nightlife","culture"],
    activity: "pub-crawl",
    image: "images/pub-crawl.png",
    description:
      "Experience the vibrant nightlife of Taniti on a guided pub crawl.",
    price: 30,
  },
  {
    name: "Yellow Leaf Bay",
    category: ["water"],
    activity: "beaches",
    image: "images/bay-beach.png",
    description:
      "Enjoy a day of fun and relaxation at the beautiful Yellow Leaf Bay.",
    price: 10,
  },
  {
    name: "Taniti Beach",
    category: ["water"],
    activity: "beaches",
    image: "images/taniti-beach.png",
    description:
      "Relax on the sandy shores of Taniti Beach and soak up the sun.",
    price: 0,
  },
  {
    name: "Marriton Beach",
    category: ["water"],
    activity: "beaches",
    image: "images/marriton-beach.png",
    description: "Experience the pristine beauty of Marriton Beach.",
    price: 20,
  },
  {
    name: "Taniti Scenic Tours",
    category: ["island-tours", "bus-tours"],
    activity: "bus-tours",
    image: "images/bus2.png",
    description: "Explore the beautiful landscapes of Taniti on a scenic bus tour.",
    price: 50,
  },
  {
    name: "Discovery Bus Tours",
    category: ["island-tours", "bus-tours"],
    activity: "bus-tours",
    image: "images/bus-tour.png",
    description: "Discover the hidden gems of Taniti on a guided bus tour.",
    price: 40,
  },
  {
    name: "Blue Wave Club",
    category: ["nightlife", "culture"],
    activity: "dancing",
    image: "images/dance.png",
    description: "Enjoy traditional island music, dance, and cultural performances at the Blue Wave Club.",
    price: 40,
  },
  {
    name: "Taniti Tiki Bar",
    category: ["nightlife", "culture"],
    activity: "dancing",
    image: "images/dance2.png",
    description: "Experience the vibrant nightlife of Taniti at the famous tiki bar.",
    price: 25,
  },
  {
    name: "Canopy Thrills",
    category: ["outdoor"],
    activity: "ziplining",
    image: "images/zipline2.png",
    description: "Soar through the treetops on a thrilling zipline adventure.",
    price: 80,
  }
];

function displayAdventures(adventuresToShow) {
  const results = document.getElementById("adventureResults");

  results.innerHTML = "";

  adventuresToShow.forEach((adventure) => {
    results.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card adventure-card h-100">

                    <img src="${adventure.image}"
                         class="card-img-top"
                         alt="${adventure.name}">

                    <div class="card-body d-flex flex-column">

                        <span class="adventure-category">
                            ${adventure.category[0].replace("-", " ")}
                        </span>

                        <h3 class="card-title h4">
                            ${adventure.name}
                        </h3>

                        <p class="card-text">
                            ${adventure.description}
                        </p>

                        <p class="adventure-price">
                            From $${adventure.price} per person
                        </p>

                        <a href="adventure.html"
                           class="btn adventure-button mt-auto">
                            View Adventure
                        </a>

                    </div>
                </div>
            </div>
        `;
  });

  document.getElementById("resultCount").textContent = adventuresToShow.length;
}

function filterAdventures() {
  const filtered = adventures.filter((adventure) => {
    const matchesCategory =
      selectedCategory === "all" ||
      adventure.category.includes(selectedCategory);

    const matchesActivity =
      selectedActivity === "all" || adventure.activity === selectedActivity;

    return matchesCategory && matchesActivity;
  });

  displayAdventures(filtered);
}
displayAdventures(adventures);

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const clickedFilter = button.dataset.filter;
        const wasActive = button.classList.contains("active");

        // Clear ALL category and activity buttons
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        activityButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Reset activity filter
        selectedActivity = "all";

        if (wasActive) {
            // Clicking same filter again turns it off
            selectedCategory = "all";
        } else {
            button.classList.add("active");
            selectedCategory = clickedFilter;
        }

        filterAdventures();
    });
});


activityButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const clickedFilter = button.dataset.filter;
        const wasActive = button.classList.contains("active");

        // Clear ALL category and activity buttons
        categoryButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        activityButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Reset category filter
        selectedCategory = "all";

        if (wasActive) {
            // Clicking same filter again turns it off
            selectedActivity = "all";
        } else {
            button.classList.add("active");
            selectedActivity = clickedFilter;
        }

        filterAdventures();
    });
});
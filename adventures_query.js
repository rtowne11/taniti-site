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
      "Get an up-close look at Taniti’s famous volcano. Explore scenic trails and experience the island’s volcanic landscape firsthand!",
    price: 75,
  },
  {
    name: "Sea Turtle Snorkeling",
    category: [ "wildlife-nature", "water"],
    activity: "snorkeling",
    image: "images/sea-turtle-snorkeling.png",
    description:
      "Snorkel in warm island waters and discover sea turtles in their natural habitat. Enjoy an unforgettable look at Taniti’s underwater world!",
    price: 45,
  },
  {
    name: "Taniti Rainforest Adventures",
    category: ["wildlife-nature"],
    activity: "rainforests",
    image: "images/rainforest.png",
    description:
      "Step into the heart of Taniti’s tropical rainforest. Follow winding trails through vibrant plants and beautiful island scenery!",
    price: 55,
  },
  {
    name: "Volcano Ridge Tours",
    category: ["island-tours"],    
    activity: "volcano-tours",
    image: "images/ridge-tour.png",
    description: "Follow scenic routes along the slopes of Taniti’s volcano. Experience impressive views and the island’s unique volcanic landscape!",
    price: 80,
  },
  {
    name: "Wildleaf Rainforest Expedition",
    category: ["wildlife-nature"],
    activity: "rainforests",
    image: "images/rainforest-expedition.png",
    description:
      "Journey beneath the rainforest canopy and explore Taniti’s wild landscapes. Enjoy scenic trails surrounded by tropical plants and wildlife!",
    price: 70,
  },
  {
    name: "Taniti Zipline Adventures",
    category: ["outdoor"],
    activity: "ziplining",
    image: "images/zipline1.png",
    description: "Race through the rainforest canopy on an unforgettable island adventure. Enjoy breathtaking views and an exciting journey through the trees!",
    price: 65,
  },
  {
    name: "Taniti Heritage Museum",
    category: ["culture"],
    activity: "museum",
    image: "images/heritage-museum.png",
    description:
      "Learn more about Taniti beyond its beaches and adventures. The Taniti Heritage Museum offers a closer look at the island’s history and culture!",
    price: 25,
  },
  {
    name: "Taniti Boat Tours",
    category: ["water", "island-tours"],
    activity: "boat-tours",
    image: "images/boat-tour1.png",
    description:
      "Set sail and discover Taniti from the water. Take in tropical scenery, peaceful coves, and beautiful coastal views along the way!",
    price: 60,
  },
  {
    name: "Island Explorer Boat Tour",
    category: ["water", "island-tours"],
    activity: "boat-tours",
    image: "images/boat-tour2.png",
    description:
      "Discover hidden corners of Taniti on a scenic boat journey. Enjoy peaceful waters and tropical views as you explore the island’s coastline!",
    price: 80,
  },
  {
    name: "Lagoon Boat Tour",
    category: ["water", "island-tours"],
    activity: "boat-tour",
    image: "images/boat-tour3.png",
    description: "Cruise through the calm waters of Taniti’s beautiful lagoon. Enjoy tropical scenery and relaxing views from the boat!",
    price: 50,
  },
  {
    name: "Taniti Fishing",
    category: ["water", "outdoor"],
    activity: "fishing",
    image: "images/fishing.png",
    description:
      "Enjoy a laid-back day of fishing surrounded by Taniti’s tropical scenery. Go fishing in Taniti's pristine waters and catch some of the local fish!",
    price: 40,
  },
  {
    name: "Yellow Leaf Bay Fishing Tour",
    category: ["water", "island-tours"],
    activity: "fishing",
    image: "images/fishing-tour.png",
    description: "Escape to the open water for a scenic fishing experience. Yellow Leaf Bay offers the perfect setting for a relaxing island adventure!",
    price: 65,
  },
  {
    name: "Taniti Helicopter Rides",
    category: ["outdoor"],
    activity: "helicopter",
    image: "images/helicopter.png",
    description:
      "See Taniti from a whole new perspective on a scenic helicopter ride. Soar above tropical landscapes and take in breathtaking island views!",
    price: 150,
  },
  {
    name: "Seagull Helicopter Tours",
    category: ["outdoor", "island-tours"],
    activity: "helicopter",
    image: "images/helo2.png",
    description:
      "Discover Taniti’s natural beauty on an unforgettable helicopter tour. Enjoy panoramic views as you fly across the island!",
    price: 200,
  },
  {
    name: "Merriton Art House",
    category: ["culture"],
    activity: "art-gallery",
    image: "images/art-house.png",
    description: "Step inside the famous Merriton Art House and discover the spirit of Taniti. View distinctive artwork influenced by the island’s people and scenery!",
    price: 20,
  },
  {
    name: "Merriton Bay Golf Club",
    category: ["outdoor"],
    activity: "golfing",
    image: "images/golf-course.png",
    description: "Tee off against the scenic backdrop of Merriton Bay. Enjoy a leisurely round surrounded by tropical landscapes and coastal views!",
    price: 75,
  },
  {
    name: "Taniti Lights Center",
    category: ["culture"],
    activity: "theater",
    image: "images/theater.png",
    description: "Enjoy live performances and entertainment at Taniti Lights Center. Experience music, theater, and local productions for visitors of all ages!",
    price: 40,
  },
  {
    name: "Taniti Reef Snorkeling Adventure",
    category: ["water", "outdoor"],
    activity: "snorkeling",
    image: "images/snorkeling.png",
    description:
      "Dive into Taniti’s underwater world on a scenic reef adventure. Discover colorful coral and tropical sea life along the way!",
    price: 55,
  },
  {
    name: "Cove Arcade",
    category: ["culture"],
    activity: "arcade",
    image: "images/arcade.png",
    description: "Enjoy classic arcade games at the Cove Arcade. A perfect indoor escape for the whole family!",
    price: 20,
  },
  {
    name: "Pub Crawl",
    category: ["nightlife","culture"],
    activity: "pub-crawl",
    image: "images/pub-crawl.png",
    description:
      "Visit local pubs and bars while enjoying a fun and social night out. Join a guided night pub crawl at the best spots in Taniti!",
    price: 30,
  },
  {
    name: "Yellow Leaf Bay",
    category: ["water"],
    activity: "beaches",
    image: "images/bay-beach.png",
    description:
      "Unwind beneath the island sun at Yellow Leaf Bay. Clear blue water and a scenic shoreline make it a perfect place to relax!",
    price: 10,
  },
  {
    name: "Taniti Beach",
    category: ["water"],
    activity: "beaches",
    image: "images/taniti-beach.png",
    description:
      "Cool off at the famous Taniti Beach. Enjoy swimming, sunshine, and amazing island views!",
    price: 0,
  },
  {
    name: "Marriton Beach",
    category: ["water"],
    activity: "beaches",
    image: "images/marriton-beach.png",
    description: "Relax on the soft sands of Marriton Beach. Swim and enjoy views of Taniti's coast!",
    price: 20,
  },
  {
    name: "Taniti Scenic Tours",
    category: ["island-tours", "bus-tours"],
    activity: "bus-tours",
    image: "images/bus2.png",
    description: "Sit back and enjoy a scenic journey across Taniti. Visit popular sights while learning more about the island!",
    price: 50,
  },
  {
    name: "Discovery Bus Tours",
    category: ["island-tours", "bus-tours"],
    activity: "bus-tours",
    image: "images/bus-tour.png",
    description: "Discover the sights and stories of Taniti on a guided island tour. Visit memorable locations while learning more about the island!",
    price: 40,
  },
  {
    name: "Blue Wave Club",
    category: ["nightlife", "culture"],
    activity: "dancing",
    image: "images/dance.png",
    description: "Hit the dance floor under colorful lights and experience the best party in Taniti! Blue Wave Club offers an unforgettable night by the sea!",
    price: 40,
  },
  {
    name: "Taniti Tiki Bar",
    category: ["nightlife", "culture"],
    activity: "dancing",
    image: "images/dance2.png",
    description: "Come and enjoy Taniti Tiki Bar. Tropical drinks and island vibes make it a perfect night out with friends!",
    price: 25,
  },
  {
    name: "Canopy Thrills",
    category: ["outdoor"],
    activity: "ziplining",
    image: "images/zipline2.png",
    description: "Climb into the canopy and prepare for an unforgettable ride. Zip through Taniti’s tropical rainforest surrounded by beautiful island scenery!",
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
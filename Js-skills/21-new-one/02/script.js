// 1. Initial Variables
let tripBudget = 500;
let daysPlanned = 3;

// 2. Function 1: Update the remaining budget
const updateBudget = (cost) => {
    // Subtract the cost from the global budget
    tripBudget -= cost;
};

// 3. Function 2: Check if an expense can be afforded
const canAfford = (cost) => {
    // Check if the current budget is greater than or equal to the cost
    return tripBudget >= cost;
};

// 4. Function 3: Log the itinerary step
const logItinerary = (activity) => {
    // Print the plan and the current remaining budget
    console.log(`Plan: ${activity}. Remaining Budget: $${tripBudget}`);
};

// --- Test Scenario ---
console.log("--- Starting Travel Budget Simulation ---");
console.log(`Initial Budget: $${tripBudget}`);
console.log(`Days Planned: ${daysPlanned}`);

// 1. Initial log
logItinerary("Starting the trip!");

// 2. Assume $150 flight cost
const flightCost = 150;
console.log(`\nAttempting to book Flight ($${flightCost})...`);
if (canAfford(flightCost)) {
    updateBudget(flightCost); // Deduct cost
    logItinerary("Paid for the flight.");
} else {
    logItinerary("Cannot afford the flight.");
}

// 3. Assume $300 hotel cost
const hotelCost = 300;
console.log(`\nAttempting to book Hotel ($${hotelCost})...`);
if (canAfford(hotelCost)) {
    upda544444444444444teBudget(hotelCost); // Deduct cost
    logItinerary("Checked into hotel.");
} else {
    logItinerary("Cannot afford the hotel.");
}

// 4. Assume $100 for a souvenir
const souvenirCost = 100;
console.log(`\nAttempting to buy Souvenir ($${souvenirCost})...`);
if (canAfford(souvenirCost)) {
    updateBudget(souvenirCost); // Deduct cost
    logItinerary("Bought a souvenir.");
} else {
    logItinerary("Cannot afford the souvenir.");
}

console.log("\n--- Simulation Complete ---");
console.log(`Final Remaining Budget: $${tripBudget}`);

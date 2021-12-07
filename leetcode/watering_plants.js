/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */

// improved solution 
var wateringPlants = function(plants, capacity) {
  let currentIndex = 0;
  let currentSteps = 0;
  let currentWateredPlants = 0;
  let currentCapacity = capacity;

  while (currentIndex < plants.length) {
    let currentPlant = plants[currentIndex];
    currentCapacity -= currentPlant;
    currentSteps += 1;
    currentWateredPlants += 1;

    const nextPlant = plants[currentIndex + 1];

    if (!nextPlant) return currentSteps;

    if (currentCapacity === 0) {
      currentSteps += currentWateredPlants * 2;
      currentCapacity = capacity;
    }

    const possibleCapacity = currentCapacity - nextPlant;

    if (possibleCapacity < 0) {
      currentSteps += currentWateredPlants * 2;
      currentCapacity = capacity;
    }

    currentIndex += 1;
  } 
};

// first solution

var wateringPlants = function(plants, capacity) {
  return watering(0, capacity, 0, plants, 0);
  
  function watering(currentIndex, leftCapacity, wateredPlants, plantsToWater, steps) {
    const currentPlant = plantsToWater[0];

    let currentCapacity = leftCapacity - currentPlant;
    let currentSteps = steps + 1;
    let currentWateredPlants = wateredPlants + 1;

    if (!plantsToWater[1]) return currentSteps;

    if (currentCapacity === 0) {
      currentSteps += currentWateredPlants * 2;
      currentCapacity = capacity;
    }


    let possibleCapacity = currentCapacity - plantsToWater[1];

    if (possibleCapacity < 0) {
      currentSteps += currentWateredPlants * 2;
      currentCapacity = capacity;
    } 

    

    return watering(currentIndex + 1, currentCapacity, currentWateredPlants, plantsToWater.slice(1), currentSteps)
  } 
    
    
};

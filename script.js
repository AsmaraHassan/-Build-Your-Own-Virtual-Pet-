var pet = {
  name: "Bruno",
  type: "dog",
  age: 7,
  happiness: 65,
  hunger: 4,

  // Method 1: feed()
  feed: function() {
      this.hunger -= 20;
      if (this.hunger < 0) {
          this.hunger = 0;
      }
      alert(`${this.name} has been fed. Hunger level is now ${this.hunger}.`);
  },

  // Method 2: play()
  play: function() {
      this.happiness += 20;
      if (this.happiness > 100) {
          this.happiness = 100;
      }
      alert(`${this.name} played happily. Happiness is now ${this.happiness}.`);
  },

  // Method 3: age()
  age: function() {
      this.age += 1;
      this.happiness -= 5;
      this.hunger += 10;

      if (this.happiness < 0) {
          this.happiness = 0;
      }
      alert(`${this.name} is now ${this.age} years old. Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
  }
};

// Function to interact with the pet
function interactWithPet() {
  var act = prompt("What would you like to do? (feed, play, age)").toLowerCase();

  if (act === "feed") {
      pet.feed();
  } else if (act === "play") {
      pet.play();
  } else if (act === "age") {
      pet.age(); // Corrected from agePet to age
  } else {
      alert("Invalid action! Please choose 'feed', 'play', or 'age'.");
  }
}

// Loop to keep interacting with the pet
while (true) {
  interactWithPet();
  var continuePlaying = prompt("Do you want to keep playing with your pet? (yes/no)").toLowerCase();
  if (continuePlaying !== "yes") {
      alert(`Goodbye! Your pet ${pet.name} will miss you.`);
      break;
  }
}
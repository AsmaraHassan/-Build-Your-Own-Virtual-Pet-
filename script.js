// Pet Object
let pet = {
    name: "",
    type: "",
    age: 0,
    happiness: 0,
    hunger: 0,    

    // Method to feed the pet
    feed() {
        if (this.hunger > 0) {
            this.hunger -= 20;
            if (this.hunger < 0) this.hunger = 0; // Hunger can't be negative
            alert(`${this.name} has been fed. Hunger is now: ${this.hunger}`);
        } else {
            alert(`${this.name} is not hungry.`);
        }
    },

    // Method to play with the pet
    play() {
        if (this.happiness < 100) {
            this.happiness += 20;
            if (this.happiness > 100) this.happiness = 100; // Happiness can't exceed 100
            alert(`${this.name} played and is happy! Happiness is now: ${this.happiness}`);
        } else {
            alert(`${this.name} is already fully happy!`);
        }
    },

    // Method to age the pet
    agePet() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;

        if (this.happiness < 0) this.happiness = 0; // Happiness can't be below 0
        if (this.hunger > 100) this.hunger = 100;   // Hunger can't exceed 100

        alert(`${this.name} has grown older! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    }
};

// Function to start the game and interact with the pet
function startGame() {
    pet.name = prompt("What is your pet's name?");
    pet.type = prompt("What kind of pet is it (e.g., dog, cat, dragon)?");
    pet.age = parseInt(prompt("How old is your pet?"), 10);
    pet.happiness = prompt("How happy is your pet?");
    pet.hunger = prompt("How hungry is your pet?");


    let playing = true;
    while (playing) {
        let action = prompt(`What would you like to do with ${pet.name}? Choose an action:
        1. Feed
        2. Play
        3. Age
        4. Quit`);

        switch (action) {
            case "1":
                pet.feed();
                break;
            case "2":
                pet.play();
                break;
            case "3":
                pet.agePet();
                break;
            case "4":
                alert(`Goodbye! Thanks for taking care of ${pet.name}.`);
                playing = false;
                break;
            default:
                alert("Invalid option! Please choose again.");
        }
    }
}

// Start the game by calling the function
startGame();

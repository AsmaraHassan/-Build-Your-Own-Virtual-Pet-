


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
            showAlert(`${this.name} has been fed. Hunger is now: ${this.hunger}`, './image/feed-image.jpg');
        } else {
            showAlert(`${this.name} is not hungry.`, './image/sad-image.jpg');
        }
    },

    // Method to play with the pet
    play() {
        if (this.happiness < 100) {
            this.happiness += 20;
            if (this.happiness > 100) this.happiness = 100; // Happiness can't exceed 100
            showAlert(`${this.name} played and is happy! Happiness is now: ${this.happiness}`, './image/happy-image.jpg');
        } else {
            showAlert(`${this.name} is already fully happy!`, './image/super-happy-image.jpg');
        }
    },

    // Method to age the pet
    agePet() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;

        if (this.happiness < 0) this.happiness = 0; // Happiness can't be below 0
        if (this.hunger > 100) this.hunger = 100;   // Hunger can't exceed 100

        showAlert(`${this.name} has grown older! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`, './image/age-image.jpg');
    }
};

// Function to show custom alert
function showAlert(message, imageUrl) {
    document.getElementById("alert-message").textContent = message;
    document.getElementById("alert-image").src = imageUrl;
    document.getElementById("custom-alert").style.display = "flex"; // Use flex to center the content
}

// Close the custom alert
document.getElementById("close-alert").onclick = function() {
    document.getElementById("custom-alert").style.display = "none";
}

// Function to start the game
function startGame() {
    pet.name = prompt("What is your pet's name?");
    pet.type = prompt("What kind of pet is it (e.g., dog, cat, dragon)?");
    pet.age = parseInt(prompt("How old is your pet?"), 10);
    pet.happiness = parseInt(prompt("How happy is your pet? (0-100)"), 10);
    pet.hunger = parseInt(prompt("How hungry is your pet? (0-100)"), 10);

    let playing = true;
    while (playing) {
        let action = prompt(`What would you like to do with ${pet.name}? Choose an action:\n1. Feed\n2. Play\n3. Age\n4. Quit`);

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
                showAlert(`Goodbye! Thanks for taking care of ${pet.name}.`, './image/goodbye-image.jpg');
                playing = false;
                break;
            default:
                showAlert("Invalid option! Please choose again.", './image/error-image.jpg');
        }
    }
}

// Start the game by calling the function

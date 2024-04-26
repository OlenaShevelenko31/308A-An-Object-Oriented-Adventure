const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
        },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
            
        
    }

    for(let i =0; i<adventurer.inventory.length; i++){
        console.log(adventurer.inventory[i]);    
    }

adventurer.companion.companion = {
    name: "Frank",
    type: "Flea",
    inventory:["small hat", "sunglasses"]
}
console.log(adventurer);

adventurer.roll();
adventurer.roll();
adventurer.roll();

// =========================== Part 2: Class Fantasy ========================
console.log("=========================== Part 2: Class Fantasy ===========================");

class Character {
    static MAX_HEALTH = 100;

    constructor (name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

class Companion extends Character {
    constructor(name, type) {
    super(name);
        this.type = type;
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);

  // =========================== Part 3: Class Features ========================
console.log("=========================== Part 3: Class Features ===========================");

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor (name, role) {
        super(name);
    
      // Adventurers have specialized roles.
        this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    rest() {
        console.log(`${this.name} is resting...`);
        this.health += 10; 
        if (this.health > Character.MAX_HEALTH) {
            this.health = Character.MAX_HEALTH;
          }
        console.log(`${this.name} restored health. Current health: ${this.health}`);
      }
    
  }

 const adventurer1 = new Adventurer("MiuMiu", "Ranger"); 
adventurer1.scout();  
adventurer1.rest();  
adventurer1.rest();  
console.log(adventurer1);

class Companion2 extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
      this.inventory.push("small hat", "sunglasses");
    }
    fetch() {
        console.log(`${this.name} is fetching...`);
      }
    reload() {
        console.log(`${this.name} is reloading...`);
      }
}  

const max = new Adventurer("Max", "Rogue");

const leo = new Companion2("Leo", "Cat");
const frank = new Companion2("Frank", "Flea");

max.companion = leo;
leo.companion = frank;

console.log(max);
console.log(leo);
console.log(frank);


  // =========================== Part 4: Class Uniforms ========================
  console.log("=========================== Part 4: Class Uniforms  ===========================");

  console.log(Character.MAX_HEALTH);  
  console.log(Adventurer.ROLES);  
  
  const adventurerUser = new Adventurer("Alice", "Healer");
  console.log(adventurerUser);
  

  

//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	set species(val){
		return this.species = val;
	}
	makeSound(){
		console.log(`The ${species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log(`The ${this.species} makes a sound woof`);
	}
}

class Cat extends Animal {
	purr(){
		console.log(`The ${this.species} makes a sound purr`);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

/* Question 3.6
Animal Shelter: An animal shelter, which holds only dogs and cats,
operates on a strictly "first in, first out" basis. People must adopt
either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive
the oldest animal of that type). They cannot select which specific animal they
would like. Create the data structure to maintain this system and implement
operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
You may use the built-in LinkedList data structure.
*/

function testAnimalShelter() {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue(AnimalType.CAT);
    animalShelter.enqueue(AnimalType.DOG);
    animalShelter.enqueue(AnimalType.CAT);
    animalShelter.enqueue(AnimalType.CAT);
    console.log(animalShelter.dequeueAny()); // Cat { arrivalOrder: 0 }
    console.log(animalShelter.dequeueAny()); // Dog { arrivalOrder: 1 }
    console.log(animalShelter.dequeueCat()); // Dog { arrivalOrder: 2 }
    animalShelter.enqueue(AnimalType.DOG);
    console.log(animalShelter.dequeueDog()); // Dog { arrivalOrder: 4 }
}

const Queue = require('../data_structures/Queue');

const AnimalType = {
    CAT: 'CAT',
    DOG: 'DOG',
};

class Animal {
    constructor(arrivalOrder) {
        this.arrivalOrder = arrivalOrder;
    }
}

class Cat extends Animal {
    constructor(arrivalOrder) {
        super(arrivalOrder);
    }
}

class Dog extends Animal {
    constructor(arrivalOrder) {
        super(arrivalOrder);
    }
}

class AnimalShelter {
    constructor() {
        this.catQueue = new Queue();
        this.dogQueue = new Queue();
        this.order = 0;
    }

    enqueue(animalType) {
        if (animalType === AnimalType.CAT) {
            this.catQueue.enqueue(new Cat(this.order));
        } else if (animalType === AnimalType.DOG) {
            this.dogQueue.enqueue(new Dog(this.order));
        } else {
            throw 'InvalidAnimalTypeException';
        }
        this.order++;
    }

    dequeueAny() {
        const catOrder = !this.catQueue.isEmpty() ? this.catQueue.peek().arrivalOrder : Infinity;
        const dogOrder = !this.dogQueue.isEmpty() ? this.dogQueue.peek().arrivalOrder : Infinity;
        return catOrder <= dogOrder ? this.catQueue.dequeue() : this.dogQueue.dequeue();
    }

    dequeueCat() {
        return this.catQueue.dequeue();
    }

    dequeueDog() {
        return this.dogQueue.dequeue();
    }
}

testAnimalShelter();
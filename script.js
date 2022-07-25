class Vehicle{
    constructor(make, model, year){
        for (let inpt of [make, model]){
            if (typeof inpt !== 'string'){
                throw new Error('Make and Model must be strings.');
            }
        }
        if(typeof year !== 'number'){
            throw new Error('Year must be a number');
        }
        this.make = make,
        this.model = model, 
        this.year = year
    }

    honk(){
        console.log('Beep!')
    }

    toString(){
        console.log(`This vehicle is a ${this.year} ${this.make} ${this.model}.`)
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 2
    }

    revEngine(){
        console.log('VROOM!!!')
    }
}

class Garage{
    constructor(capacity){
        if(typeof capacity !== 'number') {
            throw new Error('Capacity must be a number')
        }
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle){
        if(!vehicle instanceof Vehicle){
            console.log('Sorry, only vehicles allowed in here.')
            return
        }
        if(this.vehicles.length < this.capacity){
            this.vehicles.push(vehicle);
            console.log('Vehicle added to garage.')
        }
        else{
            console.log('Sorry, the garage is full.')
        }
    }
}

let car = new Vehicle('Chevrolet', 'Camaro', 2022)
let garage = new Garage(2)
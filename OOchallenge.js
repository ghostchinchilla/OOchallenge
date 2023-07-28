//part 1
class Vehicle {
    constructor(make, model, year) {
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk() {
        return "BEEP!";
    }
    toString() {
        return 'The vehicle is a `${this.make}` `${this.model}` from `${this.year}`';
    }
}

//part 2
class Car extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
            this.numWheels=4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super (make, model, year);
        this.numWheels=2;
    }
    revEngine() {
        return "VROOM!";
    }
 }

//part 3
class Garage {
    consstructor (capacity) {
        this.vehicles=[];
        this.capacity=capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only Vehicles Allowed!"
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle) {
            return "Vehicle added!";
        }
    }
}

//the garage part was hard.. but fine.
class vehicle{
    constructor(brand){
        this.brand=brand;
    }
    
    start(){
        console.log(`${this.brand} is started`)
    }
}

class Car extends vehicle{
    honk(){
              console.log(`${this.brand} is honking`)

    }
}

let c1 =new Car('honda')
console.log(c1.start())
console.log(c1.honk())
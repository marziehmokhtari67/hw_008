let animal = {
    speaks: true,
    walk() {
    console.log("Animal walks");
    }
    }
    let rabbit =Object.create(animal)
    console.log(rabbit.walk())
    console.log(rabbit)
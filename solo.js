class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get needs() {
    console.log(`animal ${this.name} requires  to sustain since the age of ${""},,,,,,,,,,,,,,,`)
  }

  set() {
    return null
  }
}


const ani = new Animal()
ani.name = "Annie Leonheart"
ani.age= 20

ani.needs
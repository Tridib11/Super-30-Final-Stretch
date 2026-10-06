class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;  
  }

  static legCount(){
    console.log("Animal")
  }
  speak() {
    console.log(`Hi there ${this.name} speaks ${this.speaks}`);
  }
}

Animal.legCount()
let dog = new Animal("Dog", 4, "Bhow bhow");

dog.speak();
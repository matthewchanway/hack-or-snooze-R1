class Car{
    constructor(name){
        this.name=name;
    }
}

class carList{
    constructor(type){
        this.type=type;
    }
    create(name){
      return new Car(name);

    }
}
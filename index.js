/// Javascript code 

// JS Class
class Rectangle{
    constructor(length , breadth){
        this.Length = length;
        this.Breadth = breadth;
    }

    calculateArea(){
        return this.Length * this.Breadth;
    }
}

// Class object
var shape = new Rectangle(10,20);

console.log(shape.calculateArea());
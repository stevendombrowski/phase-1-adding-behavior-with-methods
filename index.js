// Your code here
class Dog {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.speak = function(){
            return `${this.name} says woof!`
        }
    }
}

class Cat{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.speak = function(){
            return `${this.name} says meow!`
        }
    }
}

class Bird{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.speak = function(){
            if (this.gender ==='male')
            return `It's me! ${this.name}, the parrot!`
            else if (this.gender != 'male')
        return `${this.name} says squawk!`
        
    } 
    }
}
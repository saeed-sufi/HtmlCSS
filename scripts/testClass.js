function Person(name, favColor) {
  this.name = name
  this.favColor = favColor
  this.greet = function() {
    console.log("this is "+ this.name + " and I like "+this.favColor+".")
  }
}

var saeed = new Person("Saeed", "green")
saeed.greet()



var john = {
  nam: "John",
  favColor: "Blue",
  greet: function(nam, favColor) {
    console.log("My name is "+nam+" and my favorite color is "+favColor);
  }
}
console.log(john.nam)
john.greet("hasan", "ghermez")

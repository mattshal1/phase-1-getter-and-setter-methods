// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter method for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter method for circumference
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter method for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example usage:
  const myCircle = new Circle(5); // Creates a circle with radius 5
  
  console.log(myCircle.diameter); // Prints the diameter of the circle (should be 10)
  console.log(myCircle.circumference); // Prints the circumference of the circle
  console.log(myCircle.area); // Prints the area of the circle
  
  myCircle.diameter = 12; // Sets the diameter of the circle to 12
  console.log(myCircle.radius); // Prints the new radius (should be 6)
  
  myCircle.area = 50; // Sets the area of the circle to 50
  console.log(myCircle.radius); // Prints the new radius (should be approximately 3.989...) 
  
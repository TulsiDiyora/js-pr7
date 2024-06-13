let pr74 = document.getElementById('pr74');
let pr75 = document.getElementById('pr75');
class Shape {
    constructor(width, height, radius) {
      this.width = width;
      this.height = height;
    }
     rectangleArea() {
        pr74.innerHTML = "RactangleArea : " + this.width * this.height + "<br>";
    }
  
     circleArea(radius) {
    pr75.innerHTML = "CircleArea : " + 3.14 * (radius * radius) + "<br>";
    }
  }
  
let ra = new Shape(5, 10);
ra.rectangleArea();
ra.circleArea(7);

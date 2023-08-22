  //car movement component
  AFRAME.registerComponent("car-movement", {
    schema: {
      speedOfCar: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfCar = this.el.getAttribute("movement");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var carmovement = this.data.speedOfCar;      
        var carposition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (carmovement.x < 10) {
            carmovement.x += 0.5;
            this.el.setAttribute("movement", carmovement);
          }
        }
        if (e.key === "ArrowLeft") {
          if (carmovement.x > -10) {
            carmovement.x -= 0.5;
            this.el.setAttribute("movement", carmovement);
          }
        }
        if (e.key === "ArrowUp") {
          if (carmovement.z < 20) {
            carmovement.z += 0.5;
            this.el.setAttribute("movement", carmovement);
          }
          if (carposition.y < 2) {
            carposition.y += 0.01;
            this.el.setAttribute("position", carposition);
          }
        }
        if (e.key === "ArrowDown") {
          if (carmovement.z > -10) {
            carmovement.z -= 0.5;
            this.el.setAttribute("movement", carmovement);
          }
          if (carposition.y > -2) {
            carposition.y -= 0.01;
            this.el.setAttribute("position", carposition);
          }
        }
      });
    }
  });
  
  
  
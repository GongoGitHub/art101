// index.js - Lab 6
// Author: Sam Ingraffia
// Date: April 29, 2024

// Define Variables
myTransport = {"Ford Focus", "bike", "walking", "bus"};

//create an object for my main ride
myMainRide = {
  make: "Ford",
  model: "Focus",
  color: "Silver",
  year: 2008,

  age : function () {
    return 2024 - this.year;

  }
}

// output
document.writeln("Kinds of transportation I use ", myTransport, "</br");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

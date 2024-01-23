// document.addEventListener('DOMContentLoaded', function(){}
document.addEventListener("click", function(event) {
    const circle = document.createElement("div");
    //const circle = document.getElementById("container");
    circle.className = "circle";

    const radius = Math.floor(Math.random() * 191) + 10;
    const halfradius = radius / 2;

    circle.style.backgroundColor = `#CCE8CC`;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`
    circle.style.left = `${event.clientX - halfradius}px`;
    circle.style.top = `${event.clientY - halfradius}px`;
    circle.style.marginTop = `10%`

    circle.style.transition = 'transform 0.3s ease-out';

    document.getElementById("container").appendChild(circle);

    // Add a transition to smoothly scale the circle
    setTimeout(function () {
        circle.style.transform = 'scale(0)';
      }, 500);

      // Remove the circle from the DOM after the transition
      setTimeout(function () {
        document.getElementById('container').removeChild(circle);
      }, 300);
});

// function yellow()
// {
//     const yellowButton = document.getElementById("yellow");
//     const pinkButton = document.getElementById("pink");
//     const blueButton = document.getElementById("blue");


//     yellowButton.style.border = `2px solid black`; 
//     pinkButton.style.border = `none`;
//     blueButton.style.border = `none`;

    
// }

// function pink()
// {
//     const pinkButton = document.getElementById("pink");
//     const yellowButton = document.getElementById("yellow");
//     const blueButton = document.getElementById("blue");

//     pinkButton.style.border = `2px solid black`;
//     yellowButton.style.border = `none`;
//     blueButton.style.border = `none`;
// }

// function blue()
// {
//     const blueButton = document.getElementById("blue");
//     const yellowButton = document.getElementById("yellow");
//     const pinkButton = document.getElementById("pink");
//     blueButton.style.border = `2px solid black`;
//     yellowButton.style.border = `none`;
//     pinkButton.style.border = `none`;
// }



// function circle(color)
// {
//     document.addEventListener("click", function(event) {
//     const circle = document.createElement("div");
//     //const circle = document.getElementById("container");
//     circle.className = "circle";

//     const radius = Math.floor(Math.random() * 191) + 10;
//     const halfradius = radius / 2;

//     if(color == "yellow")
//     {
//         circle.style.backgroundColor = `#FEDC56`;
//     }
//     else if(color == "pink")
//     {
//         circle.style.backgroundColor = `#FFC0CB`;
//     }
//     else if(color == "blue")
//     {
//         circle.style.backgroundColor = `#007FFF`;
//     }
    
//     circle.style.width = `${radius}px`;
//     circle.style.height = `${radius}px`
//     circle.style.left = `${event.clientX - halfradius}px`;
//     circle.style.top = `${event.clientY - halfradius}px`;

    

//     document.getElementById("container").appendChild(circle);

//     // Add a transition to smoothly scale the circle
//     setTimeout(function () {
//         circle.style.transform = 'scale(0)';
//       }, 500);

//       // Remove the circle from the DOM after the transition
//       setTimeout(function () {
//         document.getElementById('container').removeChild(circle);
//       }, 300);
// });
// }


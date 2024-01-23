let currentColor = "#CCE8CC";

function border(color)
{
    if(color == "yellow")
    {
        const yellowButton = document.getElementById("yellow");
        const pinkButton = document.getElementById("pink");
        const blueButton = document.getElementById("blue");


        yellowButton.style.border = `2px solid black`; 
        pinkButton.style.border = `none`;
        blueButton.style.border = `none`;

        currentColor = "#FEDC56";
    }
    else if(color == "pink")
    {
        const pinkButton = document.getElementById("pink");
        const yellowButton = document.getElementById("yellow");
        const blueButton = document.getElementById("blue");

        pinkButton.style.border = `2px solid black`;
        yellowButton.style.border = `none`;
        blueButton.style.border = `none`;

        currentColor = "#FFC0CB";
    }
    else if( color == "blue")
    {
        const blueButton = document.getElementById("blue");
        const yellowButton = document.getElementById("yellow");
        const pinkButton = document.getElementById("pink");
        blueButton.style.border = `2px solid black`;
        yellowButton.style.border = `none`;
        pinkButton.style.border = `none`;

        currentColor = "#007FFF";
    }
}


document.addEventListener("click", function(event) {
    const circle = document.createElement("div");
    circle.className = "circle";

    const radius = Math.floor(Math.random() * 191) + 10;
    const halfradius = radius / 2;

    circle.style.backgroundColor = currentColor;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`
    circle.style.left = `${event.clientX - halfradius}px`;
    circle.style.top = `${event.clientY - halfradius}px`;
    circle.style.marginTop = `10%`

    //circle.style.transition = 'transform 0.3s ease-out';

    document.getElementById("container").appendChild(circle);

    // Add a transition to smoothly scale the circle
    setTimeout(function () {
        circle.style.transform = 'scale(0)';
      }, 500);

      // Remove the circle from the DOM after the transition
      setTimeout(function () {
        document.getElementById('container').removeChild(circle);
      }, 1000);
});

function resetScreen()
{
    document.getElementById("container").innerHTML = "";
}
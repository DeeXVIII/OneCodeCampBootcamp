// //Get element by id
// var headingElement = document.getElementById("heading");
// console.log("Element by ID: ", headingElement);

// //Get element by class name
// var textElement = document.getElementsByClassName("text");
// console.log("Elements by class name: ", textElement);

// //Get element by tag name
// var listItems = document.getElementsByTagName("list");
// console.log("Elements by tag name: ", listItems);

// //Query Selectors
// var containerElement = document.querySelector("#container");
// console.log("Query Selector: ", containerElement);

// //Parent Node
// var listParent = document.getElementById("list").parentNode;
// console.log("Parent Node: ", listParent);

// //Children Node
// var containerChildren = document.getElementById("container").children;
// console.log("Children of the Element: ", containerChildren);

// //previous sibling
// var firstListItem = document.querySelector("li");
// var previousSibling = firstListItem.previousSibling;
// console.log("Previous Sibling: ", previousSibling);

// //next sibling
// var nextSibling = firstListItem.nextSibling;
// console.log("Next Sibling: ", nextSibling);

// //Modify Inner HTML returns the entire html content
// headingElement.innerHTML = "Updated Content";
// console.log("Modified inner HTML: ", headingElement);

// //Modifying text content won't modify anything except the content
// var textElement = document.getElementsByClassName("text")[0];
// textElement.textContent = "New Text";

// //Setting attribute
// var imageElement = document.createElement("img");
// imageElement.setAttribute("src", "image.jpg");
// console.log("Image Element with src attribute: ", imageElement);

// //Modifying Styles:
// var btnElement = document.getElementById("btn");
// btnElement.style.backgroundColor = "blue";
// console.log("Modified Style: "), btnElement;

// //Creating and appending elements
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph.";
// document.getElementById("container").appendChild(newParagraph);

//Handling Events
const button = document.getElementById("btn");
button.addEventListener("click", handleClick);


function handleClick(event)
{
    console.log("Button is clicked!");
}
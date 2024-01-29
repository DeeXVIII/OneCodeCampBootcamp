// var userOne = 
// {
//     email: "ryu@ninjas.com",
//     name: "Ryu",
//     login(){
//         console.log(this.email, "has logged in.");
//     },
//     logout(){
//         console.log(thie.email, "has logout.");
//     }
// }; 

//console.log(userOne.name);

//change the value of the property of an object outside

//Dot Method
//userOne.name
//userOne.name = "Yoshi";

//Square Brackets Method
//userOne["email"]
//userOne["name"] = "mario"

//Usage of Square Bracket

//uisng the prop method
// var prop = "name";
// userOne[prop];

// prop = "email";

// userOne[prop];

// //userOne.prop; result to undefined

// //create new property and methods

// var userTwo = 
// {
//     email: "ryu@ninjas.com",
//     name: "Ryu",
//     login(){
//         console.log(this.email, "has logged in.");
//     },
//     logout(){//     }
// }; 

//Different Object with the same type

//Classes - starts with an Uppercase
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     //add methods outside the function
//     login(){
//         console.log(this.email, "just logged in");
//         return this;
//     }
//     logout(){
//         console.log(this.email, "just logged out");
//         //need return this to perform method chaining
//         return this;
//     }
//     updateScore(){
//          this.score++;
//          console.log(this.email, "score is now", this.score);
//          return this;
//     }
// }

//the 'new' keyword - creates a new empty object{}: sets the value of 'this' to the new empty object: calls the constructor method
// var userOne = new User("ryu@ninjas.com", "Ryu");
// var userTwo = new User("yoshi@mariokorp.com", "Yoshi");

// console.log(userOne);
// console.log(userTwo);

// userOne.login();
// userTwo.logout();

//Method Chaining
// userOne.login().updateScore().logout();

//Inherators

//Admin will get the same property with User
// class Admin extends User {
//     deleteUser(user){
//         users = users.filter(u => {
//         return u.email != user.email;
//         });
//     }
// }

// var admin = new Admin("shaun@ninjas.com", "Shaun");

// var users = [userOne, userTwo, admin];



// admin.deleteUser(userOne);

// console.log(users);


//Prototype
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, "has logged in.");
    }
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, "has logged in.");
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, "has logged out.");
}

//Prototype Inhiretance

function Admin(...args){
    //console.log(args);
    User.apply(this, args);
    this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User("ryu@ninjas.com", "Ryu");
var admin = new Admin("shaun@ninjas.com", "Shaun");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");

var users = [userOne, userTwo, admin];

// console.log(userOne);
// userTwo.login();

//proto

// var nums = [1, 2, 3, 4, 5];
// nums.sort();


// userOne.login();

// userTwo.logout();

console.log(admin);



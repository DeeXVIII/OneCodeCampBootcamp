

//class creation for OOP
class MobilePhone
{
    //constructor
    constructor(brand, color, sim, apps = []){
        //properties
        this.brand = brand;
        this.color = color;
        this.sim = sim;
        this.apps = apps;
    }    

    //methods
    installApp(appName){
        this.apps.push(appName);
        console.log(`${appName} app was installed successfully.`);
        return this;
    }
    // text(){

    // }
    // call(){

    // }

    displayDetails(){
        console.log(`Mobile Phone Details: 
Brand: ${this.brand}
Color: ${this.color}
Sim: ${this.sim}
Apps: ${this.apps.length > 0 ? this.apps.join(', '): "None"}`);
        //above is a ternary operator
    }
}

// mobile1 = new MobilePhone("Oppo", "White", "Dual", );
// mobile1.installApp("Messenger").displayDetails();

// mobile1.installApp("Messenger").installApp("Youtube");

mobile2 = new MobilePhone("iPhone", "Black", "Smart");
mobile2.installApp("Youtube").installApp("Facebook").displayDetails();
/*
//1. Shopping Cart

class Item 
{
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.sold = 0;
    }
    logDetails()
    {
        console.log(`Item: ${this.name}
Price: ${this.price}
Stock/s: ${this.stock}
Sold: ${this.sold}`);
    }
    buy()
    {
        if (this.stock > 0)
        {
            console.log(`Buying ${this.name}`);
            this.sold++;
            this.stock--;
        }
        else
        {
            console.log(`Out of stock!`);
        }
    }
    returnItem()
    {
        if(this.sold > 0)
        {
            console.log(`Returning ${this.name}`);
            this.sold--;
            this.stock++;
        }
        else
        {
            console.log("No items sold to return.");
        }
    }
}

//creating instances

//1st instance
const tobleron = new Item('Tobleron', 10, 5);
//2nd instance
const kitkat = new Item('KitKat', 20, 8);
//3rd instance
const cadburry = new Item('CadBurry', 15, 10);

//Testing first instance
tobleron.buy();
tobleron.buy();
tobleron.buy();
tobleron.returnItem();
tobleron.logDetails();

//Testing second instance
kitkat.buy();
kitkat.buy();
kitkat.returnItem();
kitkat.returnItem();
kitkat.logDetails();

//Testing third instance
cadburry.returnItem();
cadburry.returnItem();
cadburry.returnItem();
cadburry.logDetails();
*/

/*
//2. House
class House
{
    constructor(location, price, lot, type)
    {
        this.location = location;
        this.price = price;
        this.lot = lot;
        this.type = type;
        this.totalPrice = 0;
        this.discount = 0;

        if(this.type == "Pre-selling")
        {
            this.totalPrice = price - (price * .20);
            this.discount = 0.2;
        }
        else
        {
            this.totalPrice = price - (price * .05); 
            this.discount = 0.05;
        }
    }
    show_all()
    {
        console.log(`Location: ${this.location}
Price: ${this.price}
Lot: ${this.lot}
Type: ${this.type}
Discount: ${this.discount}
Total Price: ${this.totalPrice}`);
    }
}


//Instances
let house1 = new House("La Union", 
1500000, 100, "Pre-selling");
let house2 = new House("Metro Manila", 1000000, 100, "Ready for Occupancy");
let house3 = new House("Tagaytay", 2500000, 100, "Ready for Occupancy");
let house4 = new House("Cebu", 1300000, 100, "Pre-selling");
let house5 = new House("Davao", 2000000, 100, "Ready for Occupancy");

//Testing the Instances
house1.show_all();
house2.show_all();
house3.show_all();
house4.show_all();
house5.show_all();
*/

/*
//3. Email Builder
class EmailBuilder
{
    constructor()
    {
        this.email = {
            recipient: '',
            subject: '',
            body: '',
            attachments: [],
        };
    }

    setRecipient(recipient)
    {
        this.email.recipient = recipient;
        return this;
    }

    setSubject(subject)
    {
        this.email.subject = subject;
        return this;
    }

    setBody(body)
    {
        this.email.body = body;
        return this;
    }

    addAttachment(attachment)
    {
        this.email.attachments.push(attachment);
        return this;
    }

    send()
    {
      console.log(`Sending email...
Recipient: ${this.email.recipient}
Subject: ${this.email.subject}
Body: ${this.email.body}
Attachments: ${this.email.attachments}`);
    }
}


//Instance
const emailBuilder = new EmailBuilder();

//chaining method
emailBuilder
    .setRecipient('Yuzuha@ninjago.com')
    .setSubject('Meeting Tomorrow')
    .setBody(`Hi Yuzuha-san, we'll have a meeting tomorrow. See you there!`)
    .addAttachment('Document.pdf')
    .send();

    //instance
const emailBuilder2 = new EmailBuilder();

//chaining
emailBuilder2
    .setRecipient('Ryuga@ninjago.com')
    .setSubject('Meeting Next Week')
    .setBody(`Hi Ryuga-san, we'll have a meeting next week for our new project. See you soon!`)
    .addAttachment('Array(1)')
    .send();
*/
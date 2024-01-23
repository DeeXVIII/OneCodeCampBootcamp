var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function()
            {
                return Math.floor(Math.random() * ninja1.strength) + 1;
            },
    hp_update: function(damage)
                {
                    this.hp = this.hp - damage;
                    return this.hp
                }
};

var ninja2 = 
{
    hp: 150,
    strength: 10,
    attack: function()
            {
                return Math.floor(Math.random() * ninja2.strength) + 1;
            },
    hp_update: function(damage)
    {
        this.hp = this.hp - damage;
        return this.hp
    }
};

for(let cntr = 1; cntr <= 10; cntr++)
{
    console.log("=== Round " + cntr + " ===");

    //Ninja 1
    var ninja1Damage = ninja1.attack();
    var ninja2HpAfterAttack = ninja2.hp_update(ninja1Damage)    
    console.log("Ninja1 attacks Ninja2 and does a damage of " + ninja1Damage + "!" + " Ninja1 health: " + ninja1.hp + " || " + "Ninja2 health: " + ninja2HpAfterAttack);
    

    //Ninja 2
    var ninja2Damage = ninja2.attack();
    var ninja1HpAfterAttack = ninja1.hp_update(ninja2Damage);
    console.log("Ninja2 attacks Ninja1 and does a damage of " + ninja2Damage + "!" + " Ninja1 health: " + ninja1HpAfterAttack + " || " + "Ninja2 health: " + ninja2.hp);

    if(cntr == 10)
    {
        if(ninja1.hp > ninja2.hp)
        {
            console.log("Ninja1 WINNS!!! HP Ninja1: " + ninja1.hp + " HP Ninja2: " + ninja2.hp);
        }
        else
        {
            console.log("Ninja2 WINNS!!!! HP Ninja1: " + ninja1.hp + " HP Ninja2: " + ninja2.hp);
        }
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

class Defendant extends Person {
    constructor(name, age) {
        super(name, age);
        this.caseInstance = null;
    }

    assignCase(crime, Years, Months, Days, minAge, maxAge) {
        this.caseInstance = new Case(crime, Years, Months, Days, minAge, maxAge);
    }
}

class Case {
    constructor(crime, Years, Months, Days, minAge, maxAge) {
        this.crime = crime;
        this.period = {
            years: Years,
            months: Months,
            days: Days
        };
        this.ageLimit = { min: minAge, max: maxAge };
    }
}

class TrialCourt {
    static initiateTrial(defendant, prosecutor) {
        if (!defendant.caseInstance) {
            console.log(`${defendant.name} has no assigned case.`);
            return;
        }

        if (defendant.age >= defendant.caseInstance.ageLimit.min && defendant.age <= defendant.caseInstance.ageLimit.max) {
            console.log(`Name: ${defendant.name}
Age: ${defendant.age} years old
Case Title: ${defendant.caseInstance.crime}
Filed by: ${prosecutor.name}
Verdict: GUILTY
Release date: ${TrialCourt.calculateReleaseDate(defendant.caseInstance)}
          `);
        } else {
            console.log(`Name: ${defendant.name}
Age: ${defendant.age} years old
Case Title: ${defendant.caseInstance.crime}
Filed by: ${prosecutor.name}
Verdict: NOT GUILTY`);
        }
    }

    static calculateReleaseDate(caseInstance) {
        const today = new Date();
        today.setFullYear(today.getFullYear() + caseInstance.period.years);
        today.setMonth(today.getMonth() + caseInstance.period.months);
        today.setDate(today.getDate() + caseInstance.period.days);

        return today.toDateString();
    }
}

let prosecutor = new Prosecutor("John", 30);

let prosecutor1 = new Prosecutor("Stiles", 28); 

let defendant1 = new Defendant("Girlie", 5);
defendant1.assignCase("Malicious Mischief", 3, 3, 3, 18, 75);
TrialCourt.initiateTrial(defendant1, prosecutor);

let defendant2 = new Defendant("Onel", 25);
defendant2.assignCase("Malicious Mischief", 3, 3, 3, 18, 75);
TrialCourt.initiateTrial(defendant2, prosecutor);

let defendant3 = new Defendant("Ryu", 32);
defendant3.assignCase("Theif", 3, 5, 3, 20, 60);
TrialCourt.initiateTrial(defendant3, prosecutor1);

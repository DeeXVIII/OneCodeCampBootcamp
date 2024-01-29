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

    assignCase(crime, imprisonmentYears, imprisonmentMonths, imprisonmentDays, minAge, maxAge) {
        this.caseInstance = new Case(crime, imprisonmentYears, imprisonmentMonths, imprisonmentDays, minAge, maxAge);
    }
}

class Case {
    constructor(crime, imprisonmentYears, imprisonmentMonths, imprisonmentDays, minAge, maxAge) {
        this.crime = crime;
        this.imprisonmentPeriod = {
            years: imprisonmentYears,
            months: imprisonmentMonths,
            days: imprisonmentDays
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
        today.setFullYear(today.getFullYear() + caseInstance.imprisonmentPeriod.years);
        today.setMonth(today.getMonth() + caseInstance.imprisonmentPeriod.months);
        today.setDate(today.getDate() + caseInstance.imprisonmentPeriod.days);

        return today.toDateString();
    }
}

let prosecutor = new Prosecutor("John", 30);

let defendant1 = new Defendant("Girlie", 5);
defendant1.assignCase("Malicious Mischief", 3, 3, 3, 18, 75);
TrialCourt.initiateTrial(defendant1, prosecutor);

let defendant2 = new Defendant("Onel", 25);
defendant2.assignCase("Malicious Mischief", 3, 3, 3, 18, 75);
TrialCourt.initiateTrial(defendant2, prosecutor);

// //Asynchronous JS
// console.log("First");

// setTimeout(() => 
// {
//     console.log("Third");
// }, 2000);

// //callbacks for asynchronous operations
// const step1 = (callback) => 
// {
//     setTimeout(() =>
//     {
//         console.log("Step 1 complete.");
//         callback();
//     }, 1000)
// };

// const step2 = (callback) => {
//     setTimeout(() =>
//     {
//         console.log("Step 2 complete.");
//         callback();
//     })
// };

// const step3 = (callback) =>
// {
//     setTimeout(() =>
//     {
//         console.log("Step 3 complete.");
//         callback(); 
//     }, 1000)
// };

// //nested callback
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps complete.");
//         });
//     });
// });

// //promises
// const step1 = () =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("Step 1 complete.");
//             resolve();
//         }, 1000);
//     });
// };

// const step2 = () =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("Step 2 complete.");
//             resolve();
//         }, 1000);
//     });
// };

// const step3 = () =>
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("Step 3 complete.");
//             resolve();
//         }, 1000);
//     });
// };

// //chaining promises - a new way to chain nestep callback
// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => 
//         {
//             console.log(`All steps completed.`);
//         })
//     .catch((error) => 
//     {
//         console.log(error);
//     })

//async await
const step1 = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Step 1 complete.");
            resolve();
        }, 1000);
    });
};

const step2 = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Step 2 complete.");
            resolve();
        }, 1000);
    });
};

const step3 = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("Step 3 complete.");
            resolve();
        }, 1000);
    });
};

//using async
const performSteps = async () =>
{
   try {
    await step1();
    await step2();
    await step3();
    console.log("All steps completed.");
   } 
   catch (error) 
   {
    console.log(`An error occured, ${error}`);
   };
};

performSteps();
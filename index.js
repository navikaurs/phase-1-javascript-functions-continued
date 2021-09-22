function saturdayFun(activity="roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun(`bathe my dog!`);

function mondayWork(activity='go to the office'){
    return(`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork(`I will work from home.`);

function wrapAdjective(star = `*`){
    return function(adjective = "a hard worker"){
        return `You are ${star}${adjective}${star}!`;
    };
    }


wrapAdjective('You are')(`a dedicated programer`) 


// wrapAdjective("%")("a dedicated programmer");

//     it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective()
//       let emphatic = result("a hard worker")
//       expect(emphatic).to.equal("You are *a hard worker*!")
//     });

//     it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective("||")
//       let emphatic = result("a dedicated programmer")
//       expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//     });
//   })
// })

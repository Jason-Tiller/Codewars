// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param){
    let newParam = param.toLowerCase()
      if (newParam === 'jabroni'){
        return 'Patron Tequila'
      } else if (newParam === 'school counselor'){
        return 'Anything with Alcohol'
      } else if (newParam === 'programmer'){
        return 'Hipster Craft Beer'
      } else if (newParam === 'bike gang member'){
        return 'Moonshine'
      } else if (newParam === 'politician'){
        return 'Your tax dollars'
      } else if (newParam === 'rapper'){
        return 'Cristal'
      } else {
        return 'Beer'
      }
    }
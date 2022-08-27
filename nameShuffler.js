// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
    }


// function nameShuffler(str){
  
//     let array = str.split(' ') 
//     let first = array[0]
//     let last = array[1]
//     array[0] = last
//     array[1] = first
    
//     return finalString = array.join(' ')
//   }
/*Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:*/
function greet (name, owner) {
    // Add code here
    if(owner === name){
        return 'Hello boss'
    } else{
        return 'Hello guest'
    }
  }

  console.log(greet('Daniel', 'Daniel'));
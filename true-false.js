// falsy values -> 0,"",null,NaN,undefined,false ;

// truthy values -> '0' inside a string,[],object without property {}," ",


const age = 4;
const name = "Solaiman";

if(name.length > 0){                             //(name || name = 0)
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}



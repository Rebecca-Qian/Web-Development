var user = prompt("What do you want to eat?").toLowerCase();

switch(user){
    case "burger":
        var cheese = prompt("Would you like cheese with your burger?").toLowerCase();
        if (cheese === "yes") {
            console.log("You get a cheeseburger!");
        } else {
            console.log("You get a turkey avocado burger!");
        } 
        break;
    case "icecream":
        var Jeni = prompt("Would you like to try the best icecream in the world?").toLowerCase();
        var allergy = prompt("Do you have any allergies?").toLowerCase();
        if (Jeni === "yes" && allergy === "no") {
            console.log("You get Jeni's brambleberry crisp!");
        } else if (Jeni === "no" || allergy === "yes") {
            console.log("You get a sorbet!")
        } else {
            console.log("You don't get icecream.");
        }
        
        break;
        
    case "fries":
        console.log("Stop eating fries!");
        break;
        
    default:
    console.log("Aren't you hungry?");
}

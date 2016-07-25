var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Myers",
    number: "1234567890",
     address: ["1519 E 54th St", "Chicago", "Illinois", "60624"]
}
    
friends.steve = {
    firstName: "Steve",
    lastName: "Lee",
    number: "0987654321",
    address: ["6031 S Ellis Ave", "Chicago", "Illinois", "60637"]
}

var list = function (friends) {
    for (var firstName in friends) {
        console.log(firstName);
    }
}

var search = function (name) {
    for (var firstName in friends) {
        if (name === friends[firstName].firstName) {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }
}
//list(friends);
// Ex: 15 Changing Guest List: You just heard that one of your guests can’t make the 
//dinner, so you need to send out a new set of invitations. You’ll have to 
// //think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program 
//stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let GuestList : string[] = ["Sara", "Kisa", "Khadija", "Mahak"];
let CanNotAttend : string = "Mahak"
console.log("Mahak Can not attend the dinner.");

let newGuest : string = "Alishba"
GuestList [GuestList.indexOf(CanNotAttend)] = newGuest;
console.log(GuestList)

// GuestList.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinning table so I have invited more people.`)); 

// part 2
let guestBeg : string = ("Ali")
GuestList.unshift(guestBeg);
console.log(GuestList.unshift(guestBeg));



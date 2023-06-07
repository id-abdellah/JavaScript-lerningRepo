/*
    Switch Assignments
*/

let day = "  monday  ";
// let day = "  tuesday  ";
// let day = "  wednesday  ";
// let day = "  thursday  ";
// let day = "  friday  ";
// let day = "  saturday  ";
// let day = "  sunday  ";


// uppercase باش تحيد المسافات و تخلي الحرف اللول variable لل update كتعاود دير
day = day.trim().charAt(0).toUpperCase() + day.trim().slice(1);

switch (day) {
  case (day = "Monday"):
  case (day = "Thursday"):
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case (day = "Tuesday"):
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case (day = "Wednesday"):
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case (day = "Friday"):
  case (day = "Saturday"):
  case (day = "Sunday"):
    console.log("Not appointments Available");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
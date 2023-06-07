/* =================================================================
    Output to screen
================================================================= */
window.alert("This message from window.alert"); // it sucks, you can made it with css using js better than window.alert

document.write("<h2>This h2 is written using Js</h2>"); //it is not the best practice
// The best practice is by using "document.createElement()"




/* =================================================================
    Console methodes and styling
================================================================= */

// To print an array as a table on console
console.table(["Obito", "Madara", "Naruto", "AbouHmyd"]);

// To print an error on console
console.error("Dont do this");


/*
    To print a message on console with styling
*/

console.log("Hello from %c my world, %c Obito", "color: blue; font-size: 25px", "color: lime; font-style: italic;");
// The "%c" called "Directive" => above, it used to set the first style to the first directive and so on ...


/*
    console group()
*/

console.group("Goupe-one")
console.log("first item")
console.log("second item")
console.log("third item")
console.groupEnd("Goupe-one")

console.group("Groupe-two")
console.log("first item")
console.log("second item")
console.log("third item")
console.groupEnd("Group-two")

console.group("Other-Groupe")
console.log("a")
console.log("b")
console.log("c")
console.log("d")
console.log("e")
console.groupEnd("Other-Groupe")

// To start a group type "console.group("Name")" and to end it type "console.groupEnd("the same name")"
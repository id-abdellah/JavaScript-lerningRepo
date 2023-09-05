/* ============================================================
    Json 

        - JSON.parse => Convert JSON object to Js objec
        - JSON.stringify => Convert Js Object to JSON
=============================================================== */

let jsObject = {
    theName: "Obito",
    theAge: 20,
    dateOfBirthday: "2003-01-01",
    shooleLevel: "Est-agroBiologie"
};

/* ----------- */

let jsonObjFromServer = `{"name": "mohamed", "age": 20}`;



// Convert jsObject into jsonObj

let js_to_json = JSON.stringify(jsObject);

console.log(js_to_json);


// Convert jsonObj into jsObject

let json_to_js = JSON.parse(jsonObjFromServer);

console.log(json_to_js)

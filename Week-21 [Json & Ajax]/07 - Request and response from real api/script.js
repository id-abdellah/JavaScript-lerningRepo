/* ============================================================
    AJAX
    Reques and response from real api


        Ready State => Status of the request
            [0] Request not initialized
            [1] Server connection established
            [2] Request Received
            [3] Processing request
            [4] Request is finished and response is ready
        
        Status
            [200] Response is successful
            [404] Not found
=============================================================== */


let myRequest = new XMLHttpRequest();

myRequest.open("GET", "./testingApi.json");
myRequest.send()

console.log(myRequest)

// قبل متعرض البيانات باش متمشيش فشي سيناريو مخربق من لول status و ready state على ال check خاص دير

myRequest.onreadystatechange = function () {
    /*
    console.log(myRequest.readyState)
    console.log(myRequest.status)
        2
        200
        3
        200
        4
        200
    
    على ان ال الاستجابة كملات وبلا اخطاء عاد تعرض البيانات check يعني نتا محتاج دير
    */

    if (this.readyState === 4 && this.status === 200) {
        // خاصهم يحققو بجوج

        console.log(this.responseText);
        /*
        {
            "name": "Mohamed",
            "surename": "id-abdellah",
            "age": 20,
            "schoolLevel": "agroBiologie",
            "birthday": "2003-01-01",
            "placeOfBirthday": "elHaouze",
            "country": "morocco"
        } 
        */
    }
}
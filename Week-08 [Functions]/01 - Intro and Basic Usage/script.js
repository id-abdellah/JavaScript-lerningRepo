/* ===============================================================
    Function
        - What is Functions ?
        - User defined vs Built in
        - Syntaxt + basic usage
        - Example from real life
        - parameter + Argument
        - Practical Example
================================================================== */


// ? What is Functions ?
/*
    هي بلوك ديال الكود كينفذ مهمة معينة
    DRY (Don't Repeat Yourself) خدامة بمبدأ
*/



// ? Built in Functions  VS  User Defined function
/*
    - Built in Functions
    هي وظائف جاهزة فاللغة يقدر تستعملها. كما ان اغلب الوظائف لي خدمنا بيهم بحال ديال المصفوفات هما فالاصل دوال

    - User defined functions
    هوما وظائف لي تقدر نتا ديرهم وتسميهم باللي بغيتي    
*/


// ? Syntax
/*
    function identifier( parameter ) {
        Block of Code
    }

    
    * indentifier
    هو السمية لي بغيتي تسمي للدالة

    * parameter
    هو المتغير لي غدخلو فالدالة باش تطبق عليه المهمة لي بغيتي
*/



// ? Example



function sayHi(userName) {
    console.log(`Hi ${userName}`)
}

sayHi("Someone"); // * parameter اي القيمة ديال المتغير لي فال argument. القيمة لي لداخل هي
sayHi("Siimo");
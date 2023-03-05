/* ==========================================
    Switch Statement
============================================= */

/*
Syntax: 

    switch(expression) {
        case 1:
            code block
            break;
        case 1:
            code block
            break;
        case 1:
            code block
            break;
        Default:
            code block
    }

يعني تاهي كدير كونرول للفلو ولكن كل وحدة و فين كتخدم if بحالها بحال ال

و بناء عليهم كدير حاجة معينة false اولا true يعني نتا كتسنا boolean value اقرب لل if & else ال

كتستعمل فالحوايج لي فيهم حالات بزاف مثلا الشهر فيه 30 يوم كل يوم كيتعتبر حالة switch statement اما ال

*/


// مثلا غنطبقوها على ايام الاسبوع

let day = 0;  // القيمة خاصها تكون نفس القيمة و النوع مع الحالة باش تقاد

switch (day) {
    case 0:
        console.log("Monday")
        break;
    // case مطلوبة ديرها بعد ال break ال
    // يعني ملي سويتش يلقا الحالة الصحية كيوقفو البريك ومكيخليهش يكمل check حيت هي كتوقف ال
    case 1:
        console.log("Tuesday")
        break;
    case 2:
        console.log("Wednesday")
        break;
    case 3:
        console.log("Thursday")
        break;
    case 4:
        console.log("Friday")
        break;
    case 5:
        console.log("Saturday")
        break;
    case 6:
        console.log("Saturday")
        break;

    // يطلعو نفس النتيجة multiple cases يمكن ليك دير
    case 7:
    case 8:
        console.log("These two cases will show the same result")
        break;

    // default الوظيفة ديال ال
    // انو الا دارت شي قيمة مكيناش فال الحالات ديال السويتش لفوق كتحدد ليه شمن اجراء غيدير
    // الولا شمن رسالة غيطلع
    default:
        console.log("Unknown Day");
}
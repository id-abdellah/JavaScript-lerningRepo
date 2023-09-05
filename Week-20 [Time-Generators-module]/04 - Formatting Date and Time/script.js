/* ============================================================
    Date And Time

        Formatting Date and Time

            - new Date(timeStamp) =>  تعطيه ملي ثانية ورد ليك التاريخ
            - new Date(Date String)
            - new Date(numeric values)

            - Format
                "Jan 01 2003"
                "01/01/2003"
                "2003-01-01" => ISO International Standard
                "2003 01"
                "2003"
                "03"
                "2003, 1, 01, 5, 10, 0"
                "2003, 1, 01"
                "2003-01-01T06:10:00Z"

            - Date.parse("String") => كتعطيها تاريخ وكترجع لك ال ميلي ثواني
=============================================================== */

// هادو باينين غار الصيغ لي تقد تكتب بيهم التاريخ

console.log(Date.parse("Jan 01 2003")); // 1041379200000
console.log(new Date(1041379200000)); // Wed Jan 01 2003 00:00:00 GMT +0000(غرينتش)


console.log("")


console.log(new Date(2003, 1, 1, 8, 30, 0)); // Sat Feb 01 2003 08: 30:00 GMT +0000


console.log("")


console.log(new Date("2010-02-01T09:45:00Z")); // Mon Feb 01 2010 09:45:00 GMT+0000

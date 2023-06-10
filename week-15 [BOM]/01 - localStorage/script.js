/* =============================================================
    BOM [ Browser Object Model ]

        Local Storage

            - setItem( key: value )
            - getItem( key )
            - removeItem( key )
            - key( index )
            - clear

================================================================ */

// مثلا دبا نتا عند سيت في اعدادات كتخلي بيهم المستخدم يدير اللون لي عجبوا وكدا لمهم شوية خواص
// كتمكنك ان المستخدم الا ختار اعداد وخرج من السيت, فاش يدخل تاني يلقاهم كيما هوما local Storage ال


// جديد obj كتعامل معاه بحال المعاملة ديال ملي كدير storage obj ال
// الخ .. اولا تمحيه key وكدا اولا تدخل لشي واحد من values مع ال keys يعني كضيف فيه




/* ======================= setItem() ================== */

window.localStorage.setItem("color", "red")

// جداد key & value باش ضيف obj اولا تقد دير الطريقة ديال ال

window.localStorage.fontSize = "20px";

window.localStorage["backgroundColor"] = "lime";


console.log(window.localStorage)

// طبعا ماشي مع تحل الويندو تلقا هاد الخواص دارو فاللوكال. خاص مثلا انفو تورك على زر يطبق داكشي و يحطو فاللوكال





/* ======================= getItem() ================== */

console.log(window.localStorage.getItem("fontSize")); // 20px

console.log(window.localStorage.color); // red

console.log(window.localStorage["backgroundColor"]); // lime





/* ======================= removeItem() ================== */

// local storage لي غتعطيه مع القيمة ديالو يعني غيحيدو من ال key كيحذف ال




/* ======================= clear() ================== */

// keys يعني كتحذف غاع ال storage obj كتمحي اي حاجة عندك فال clear() ال
// local storage ملي كتخرج منها كتمسح غاع ال private tab نفس قضية ال



/* ======================= key() ================== */

// وكيرجعو لك key كتعطيه الاندكس ديال ال
console.log(window.localStorage.key(0))
console.log(window.localStorage.key(2))



// غادي يتفهم مزيان فالتطبيق العملي
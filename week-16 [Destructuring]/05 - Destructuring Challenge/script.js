/* =============================================================
    Destructuring

        Destructuring Challenge
================================================================ */

let chosen = 3;

let myFriends = [
    { title: 'osama', age: 29, available: true, skills: ['HTML', 'CSS'] },
    { title: 'ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
    { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
];

if (chosen === 1) {
    let {
        title: t,
        age: a,
        available: av,
        skills: [, cs],
    } = myFriends[0];
    console.log(`
    your name is: ${t}
    your age is: ${a}
    ${av ? 'available' : 'not available'}
    your last skill is: ${cs}
  `);
} else if (chosen === 2) {
    let {
        title: t,
        age: a,
        available: av,
        skills: [, cs],
    } = myFriends[1];
    console.log(`
    your name is: ${t}
    your age is: ${a}
    ${av ? 'available' : 'not available'}
    your last skill is: ${cs}
  `);
} else if (chosen === 3) {
    let {
        title: t,
        age: a,
        available: av,
        skills: [, cs],
    } = myFriends[2];
    console.log(`
    your name is: ${t}
    your age is: ${a}
    ${av ? 'available' : 'not available'}
    your last skill is: ${cs}
  `);
}

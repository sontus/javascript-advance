const students = [
    {id: 21, name : "Atik"},
    {id: 30, name : "Tarak"},
    {id: 11, name : "Emon"},
    {id: 20, name : "Rana"},
    {id: 31, name : "Sani"},
    {id: 20, name : "Rofiq"}
]

// for (let i = 0; i < students.length; i++) {
//     var newStd = [];
//     const element = students[i]['name'];
//     // console.log(element);
//     newStd.push(element);
//     console.log(newStd);

// }

const name = students.map(s => s.name);
const ids   = students.map(t => t.id);
const bigger  = students.filter(s => s.id > 20);
const find = students.find(s => s.id > 20);
console.log(name);
console.log(ids);
console.log(bigger);
console.log(find);

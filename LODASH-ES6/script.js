var div = document.createElement("div");
div.setAttribute("class", "container");
var f = document.createElement("h1");
f.innerText = "LODASH FUNCTIONS IMPLEMENTATION";
div.appendChild(f);
console.log("----------CHUNK-------------");
var f1 = document.createElement("h3");
f1.innerText = "CHUNK function()";
div.appendChild(f1);
var chunkfunc = function () {
    var chunkarray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var chunksize = 3;
    var chunkdiv = document.createElement("div");
    var chunkinput = document.createElement("p");
    chunkinput.innerText = "INPUT: " + JSON.stringify(chunkarray);
    //chunkinput.innerText=JSON.stringify(chunkarray);
    console.log(chunkarray);
    var out = [];
    while (chunkarray.length > 0) {
        var temp = [];
        for (var i = 0; i < chunksize; i++) {
            temp.push(chunkarray.shift());
        }
        out.push(temp);
    }
    var chunkoutput = document.createElement("p");
    console.log(out);
    //chunkoutput.innerText=JSON.stringify(out);
    chunkoutput.innerText = "OUTPUT: " + JSON.stringify(out);
    chunkdiv.appendChild(chunkinput);
    chunkdiv.appendChild(chunkoutput);
    div.appendChild(chunkdiv);
};
chunkfunc();
console.log("----------REDUCE-------------");
var redarray = [1, 2, 1, 2, 1];
var f2 = document.createElement("h3");
f2.innerText = "REDUCE function()";
div.appendChild(f2);
var reducefunc = function (result, array) {
    var reducediv = document.createElement("div");
    var reduceinput = document.createElement("p");
    var reduceoutput = document.createElement("p");
    console.log(redarray);
    reduceinput.innerText = "INPUT: " + JSON.stringify(redarray);
    array.forEach(function (element) {
        result = result + element;
    });
    console.log(result);
    reduceoutput.innerText = "OUTPUT: " + JSON.stringify(result);
    reducediv.appendChild(reduceinput);
    reducediv.appendChild(reduceoutput);
    div.appendChild(reducediv);
};
reducefunc(0, redarray);
console.log("----------FILTER-------------");
var f3 = document.createElement("h3");
f3.innerText = "FILTER function()";
div.appendChild(f3);
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'noddy', 'age': 42, 'active': true }
];
var filterfunc = function (user, key) {
    var i, out = [];
    var filterdiv = document.createElement("div");
    var filterinput = document.createElement("p");
    var filteroutput = document.createElement("p");
    filterinput.innerText = "INPUT: " + JSON.stringify(user);
    console.log(user);
    for (i = 0; i < user.length; i++) {
        if (user[i][key] === true)
            out.push(user[i]);
    }
    console.log(out);
    filteroutput.innerText = "OUTPUT: " + JSON.stringify(out);
    filterdiv.appendChild(filterinput);
    filterdiv.appendChild(filteroutput);
    div.appendChild(filterdiv);
};
filterfunc(users, 'active');
console.log("----------FIND-------------");
var f4 = document.createElement("h3");
f4.innerText = "FIND function()";
div.appendChild(f4);
var findfunc = function (user, entry) {
    var i, out;
    var finddiv = document.createElement("div");
    var findinput = document.createElement("p");
    var findoutput = document.createElement("p");
    findinput.innerText = "INPUT: " + JSON.stringify(user);
    console.log(user);
    for (i = 0; i < user.length; i++) {
        if (user[i][entry[0]] === entry[1]) {
            out = user[i];
            break;
        }
    }
    console.log(out);
    findoutput.innerText = "OUTPUT: " + JSON.stringify(out);
    finddiv.appendChild(findinput);
    finddiv.appendChild(findoutput);
    div.appendChild(finddiv);
};
findfunc(users, ['active', true]);
console.log("----------SUM-------------");
var f5 = document.createElement("h3");
f5.innerText = "SUM function()";
div.appendChild(f5);
var sumarray = [4, 2, 8, 6, 10, 6, 1, 9];
var sumfunc = function (array) {
    var i, sum = 0;
    var sumdiv = document.createElement("div");
    var suminput = document.createElement("p");
    var sumoutput = document.createElement("p");
    suminput.innerText = "INPUT: " + JSON.stringify(array);
    console.log(array);
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    console.log("SUM: " + sum);
    sumoutput.innerText = "OUTPUT: SUM= " + sum;
    sumdiv.appendChild(suminput);
    sumdiv.appendChild(sumoutput);
    div.appendChild(sumdiv);
};
sumfunc(sumarray);
//chunkfunc();
//reducefunc();
//filterfunc();
//findfunc();
//sumfunc();
document.body.appendChild(div);

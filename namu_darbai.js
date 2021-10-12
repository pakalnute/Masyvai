// 1.	Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let pinigine = [];

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
let pinigai = Math.trunc(Math.random() * 11);
pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);*/

// 2.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

/*let suma = 0;

const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
let pinigai = Math.trunc(Math.random() * 11);
pinigine.push(pinigai);
suma += pinigai;
}
console.log("masyvas: ", pinigine);
console.log("pinigu suma: ", suma);*/

// 3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

/*let popieriniaiPinigai = 0;

const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
    if(pinigai > 2) {
    popieriniaiPinigai += pinigai;
    }
}
console.log("masyvas: ", pinigine);
console.log("popieriniu pinigu suma: ", popieriniaiPinigai);*/

// 4.	Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
    pinigine[i] = 0;
    }
}
console.log("reiksmes: ", pinigine);*/

// 5.	Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

let didziausia = 0;
let kartai = 0;

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] > didziausia) {
        didziausia = pinigine[i];
        kartai = 0;
    }
    if (pinigine[i] === didziausia) {
        kartai++;
    }
}

console.log("didziausia masyvo reiksme: ", didziausia);
console.log("didziausiu reiksmiu masyve yra: ", kartai);*/

// 6.	Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

for(let i = 0; i < ilgis; i++) {
    if(pinigine[i] === 0) {
    pinigine[i] = i;
    }
}
console.log("elementu indeksu reiksmes: ", pinigine);*/

// 7.	Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

for (let i = ilgis; i < 30; i++) {
    pinigine[i] = Math.trunc(Math.random() * (30 - 10) + 10);

}
console.log("masyvo ilgis butu 30:", pinigine);*/

// 8.	Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

/*const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

let monetos = [];
let popieriniaiPinigai = [];

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    }
    if(pinigine[i] > 2) {
        popieriniaiPinigai.push(pinigine[i]);
    }
}
console.log("mazesne arba lygi 2: ", monetos);
console.log("didesne nei 2: ", popieriniaiPinigai);*/

// 9.	Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

const ilgis = Math.trunc(Math.random() * (30 - 10) + 10);
console.log("masyvo ilgis: ", ilgis);
    for (let i = 0; i < ilgis; i++) {
    let pinigai = Math.trunc(Math.random() * 11);
    pinigine.push(pinigai);
}
console.log("masyvas: ", pinigine);

let monetos = [];
let popieriniaiPinigai = [];

for (let i = 0; i < ilgis; i++) {
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    }
    if(pinigine[i] > 2) {
    popieriniaiPinigai.push(pinigine[i]);
    }
}
console.log("naujas monetu masyvas su reiksmemis mazesnemis arba lygioms 2: ", monetos);
console.log("naujas popieriniu pinigu masyvas su reiksmemis didesnemis uz 2: ", popieriniaiPinigai);
let naujaPinigine = [];
naujaPinigine.push(monetos);
naujaPinigine.push(popieriniaiPinigai);
console.log("pinigine su skyreliais: monetoms ir popieriniams pinigams: ", naujaPinigine);


// 10.	Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

// 11.	Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

// 12.	Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;

// 13.	Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

// 14.	Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

// 15.	Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

// 16.	Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

// 17.	Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

// 18.	 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

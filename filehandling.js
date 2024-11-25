import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// const __dirname = path.dirname(fileURLToPath(import.meta.url)) 
// const filePath = path.join(__dirname, 'data.json')

// let data = [
//     {name: 'Abel'},
//     {name: 'Bob'},
//     {name: 'Cedric'},
//     {name: 'Andrew'},
//     {planet: 'Earth'},
//     {planet: '4546B'},
//     {star: 'Sun'}
// ]
//fájlba írás
function writeToFile(data, filePath){
    try{
        fs.writeFileSync(filePath, JSON.stringify(data))
    } catch (err){
        console.log(err);
    }
}

//fájlból olvasás
function readFromFile(filePath){
    let content = ''
    let rdata
    try{
        content = fs.readFileSync(filePath, 'utf8');
        rdata = JSON.parse(content);
    }catch(err){
        console.log(err);
    }
    return content, rdata;
}

// writeToFile(data,filePath);
// console.log(readFromFile(filePath));

//gyarkorlás 1.feladat
const __dirname = path.dirname(fileURLToPath(import.meta.url)) 
const filePath = path.join(__dirname, 'osztály.json')

let people = [
    {surName: 'Barna', lastName: 'Tibor'},
    {surName: 'Kecskési', lastName: 'Ákos'},
    {surName: 'Motorizált', lastName: 'Antal'},
    {surName: 'Karácsony', lastName: 'Ajándék'}
]

writeToFile(people,filePath);
console.log(readFromFile(filePath));
//2.feladat
const __dirname2 = path.dirname(fileURLToPath(import.meta.url)) 
const filePath2 = path.join(__dirname2, 'órarend.json')

let timeTable = [
    {Monday: ['natek','tesi','töri','angol']},
    {Tuesday: ['digkul','tesi','ofő','matek']},
    {Wednesday: ['aszalfejl','IKT','webprog','progal']},
    {Thursday: ['áll pol','töri','föci','matek']},
    {Friday: ['föci','töri','töri','magyar']},
]

writeToFile(people,filePath2);
console.log(readFromFile(filePath2));
//
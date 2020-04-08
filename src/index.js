//import * as $ from 'jquery'; // переводится как имортируем всё в переменную $ или можно import $ from "jquery";
import myMessage from './myscript';
import json from "./myJson.json"; // можно импортировать json файлы
import image from "./webpack.png"; // можно импортировать картинки
import xmlFile from "./xmlFile.xml"; // возможность работать с xml
import "@pathToStyleDir/style.css"; // или "../css/style.css"
import "../css/less.less";
import "../css/scss.scss";


const message = new myMessage("hello frate");

// alert(message);
// alert(json[0].name + " " + json[1].surname);
// document.body.innerHTML += `<span>${image}</span>`;
// console.log(xmlFile);
// $("h1").text("zzzzz");
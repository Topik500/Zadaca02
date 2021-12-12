import React from 'react';
import ReactDOM from 'react-dom';

const zad1 = "zadaća 01";
const zad2 = "zadaća 02";

const element1 = <h1>Rješenje zadaće 02</h1>;
const element2 = <h1>Pretposljednja zadaća bila je {zad1}</h1>;
const element3 = <h1>Posljednja dvije zadaće su: {zad1} {' '} {zad2}</h1>;

const element = <div>{element1} {element2} {element3}</div>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
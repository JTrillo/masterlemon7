import React from 'react';
import ReactDOM from 'react-dom';
import { LechComponent } from './lechComponent';
const logoImg = require('./content/lech.png');

ReactDOM.render(
    <div>
        <h1>Hola mundo desde React DOM</h1>
        <LechComponent />
    </div>,
    document.getElementById('root')
);

const img = document.createElement("img");
img.src = logoImg;
img.alt = "Lech Poznan badge"

document.getElementById("lechDiv").appendChild(img);
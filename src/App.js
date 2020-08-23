import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Color from "./Color";
import {Button} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Glass from "./Glass";
import {SketchPicker} from "react-color";

function App() {
    const [spin, setSpin] = useState(false);
    const [color1, setColor1] = useState('#ff0000');
    const [color2, setColor2] = useState('#00ff00');
    const [color3, setColor3] = useState('#0000ff');

    let timer;

    const [suma, setSuma] = useState('');

    const [color1Loader, setColor1Loader] = useState(0);
    const [color2Loader, setColor2Loader] = useState(0);
    const [color3Loader, setColor3Loader] = useState(0);
    const [colorSumaLoader, setColorSumaLoader] = useState(0);

    function reload(color, setter, loaderSetter){
        setter(color);
        loaderSetter(-30);
        setColorSumaLoader(-30);
    }

    function load(){
        if (color1Loader <= 79)
            setColor1Loader(color1Loader+5);

        if (color2Loader <= 79)
            setColor2Loader(color2Loader+5);

        if (color3Loader <= 79)
            setColor3Loader(color3Loader+5);

        if (colorSumaLoader <= 79)
            setColorSumaLoader(colorSumaLoader+5);
    }

    useEffect(() => {
        timer = setTimeout(() => load(), 100)

        return () => {
            clearTimeout(timer)
        }
    })

    useEffect(() => {
        const rojo1 = parseInt('0x' + color1.substr(1, 2));
        const rojo2 = parseInt('0x' + color2.substr(1, 2));
        const rojo3 = parseInt('0x' + color3.substr(1, 2));

        const azul1 = parseInt('0x' + color1.substr(5, 2));
        const azul2 = parseInt('0x' + color2.substr(5, 2));
        const azul3 = parseInt('0x' + color3.substr(5, 2));

        const verde1 = parseInt('0x' + color1.substr(3, 2));
        const verde2 = parseInt('0x' + color2.substr(3, 2));
        const verde3 = parseInt('0x' + color3.substr(3, 2));

        const rojo = (rojo1 + rojo2 + rojo3)/3
        const azul = (azul1 + azul2 + azul3)/3
        const verde = (verde1 + verde2 + verde3)/3

        setSuma(`rgb(${rojo}, ${verde}, ${azul})`);
    });


    return (
        <div className="App">
            {/*<Color spin={spin} style={{background: 'red', left: '50%', top: '0%', transform: 'translateX(-50%)'}}/>*/}
            {/*<Color spin={spin} style={{background: 'green', right: '0%', bottom: '0%'}}/>*/}
            {/*<Color spin={spin} style={{background: 'blue', left: '0%', bottom: '0%'}}/>*/}

            <Glass percentage={color1Loader} setColor={(color1) => {reload(color1, setColor1, setColor1Loader)}} style={{ position: 'absolute', top: 0, left: 0 }} color={color1}/>
            <Glass percentage={color2Loader} setColor={(color2) => {reload(color2, setColor2, setColor2Loader)}}  style={{ position: 'absolute', top: 0, left: '20%'}} color={color2}/>
            <Glass percentage={color3Loader} setColor={(color3) => {reload(color3, setColor3, setColor3Loader)}}  style={{ position: 'absolute', top: 0, left: '40%'}} color={color3}/>

            <Glass percentage={colorSumaLoader} style={{ position: 'absolute', top: 0, left: '60%'}} color={suma}/>

            {/*<Button onClick={() => {*/}
            {/*    setSpin(!spin)*/}
            {/*}}>Spin</Button>*/}


            {/*<TextField value={color1} onChange={(e) => {setColor1(e.target.value)}}  id="standard-basic" label="Standard" />*/}
            {/*<TextField value={color2} onChange={(e) => {setColor2(e.target.value)}}  id="standard-basic" label="Standard" />*/}
            {/*<TextField value={color3} onChange={(e) => {setColor3(e.target.value)}}  id="standard-basic" label="Standard" />*/}

            {/*<div style={{ width:50, height: 50, background: '#' + color1}}></div>*/}
            {/*<div style={{ width:50, height: 50, background: '#' + color2}}></div>*/}
            {/*<div style={{ width:50, height: 50, background: '#' + color3}}></div>*/}
            {/*<div style={{ width:50, height: 50, background: suma}}></div>*/}

        </div>
    );
}

export default App;

import { useState } from "react";
import type { garrafaProps } from "./types";
import type { cores } from "./types";

const COLOR_MAP = new Map<cores, string>([
    ["vermelho", 'red'],
    ["azul", 'blue'],
    ['verde', 'green'],
    ['roxo', 'purple']
])


export default function Garrafa (props: garrafaProps){
    const [cores, setCores] = useState<cores[]>(props.cores)
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'column', width: '100px', height: '200px', border: '1px solid black'}}>
                {cores.map((cor, index) => (
                    <div key={index} style={{backgroundColor: COLOR_MAP.get(cor), flex: 1}}></div>
                ))} 
            </div>
            <div>
                <button onClick={props.onSelecionar}>Selecionar</button>
            </div>
        </>
    )
}
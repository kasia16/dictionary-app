import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
    return (
        <div className="Phonetics">
            <a href={props.phonetics.audio} rel="noreferrer noopener" target="_blank" >Listen</a>
           {" "}{props.phonetics.text}
        </div>
    )
}
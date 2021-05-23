import React, { useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] =useState(null);

    function handleResponse(response){
    console.log(response.data[0])
    setResults(response.data[0])
    }

    function search(event){
        event.preventDefault()
        
   //documentation here: https://dictionaryapi.dev/e
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/fr/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }
return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" 
            autoFocus={true}
            onChange={updateKeyword} />
        </form>
        <Results results={results}/>
        </div>
);
}



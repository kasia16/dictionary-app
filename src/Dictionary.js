import React, { useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
    setResults(response.data[0]);
    }

    function search(){
  //documentation here: https://dictionaryapi.dev/e
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
  axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
return (
    <div className="Dictionary">
        <section>
        <form onSubmit={handleSubmit}>
            <input type="search" 
            autoFocus={true}
            onChange={updateKeyword} />
        </form>
        <div className="hint">
            suggested words: coding, girl, superhero...
            </div>
            </section>
        <Results results={results}/>
        </div>
);
    } else {
        load();
        return "Loading";
    }
}
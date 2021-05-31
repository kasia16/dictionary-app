import React, { useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
    setResults(response.data[0]);
    }

function handlePexelsResponse(response){
    console.log(response);
    setPhotos(response.data.photos);
}

    function search() {
  //documentation here: https://dictionaryapi.dev/e
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelsApiKey = `563492ad6f9170000100000156010b8f1e67438c9ba92f04fc8e3113`;
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            <input
              type="search"
              onChange={updateKeyword}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: code, coding, girl, superhero...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

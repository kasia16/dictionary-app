import React, { useState} from "react";
import axios from "axios";
import "./Dictionary";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
    console.log(response.data[0])
    }

    function search(event){
        event.preventDefault()
        
   
  const apiKey = "029a3deb-2f71-4c80-b2d4-b64e7c6a3573";
  let apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${keyword}?key=${apiKey}`;
  console.log(apiUrl);
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
        </div>
);
}



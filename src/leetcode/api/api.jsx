import React from "react";
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://leetcode-api1.p.rapidapi.com/aaryak4554',
  headers: {
    'X-RapidAPI-Key': '74373e89f3mshbc25405788510c9p17388fjsnb7f911aebe95',
    'X-RapidAPI-Host': 'leetcode-api1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
function GetData(){

    return(
        <div>s</div>
    );
}
export default GetData;

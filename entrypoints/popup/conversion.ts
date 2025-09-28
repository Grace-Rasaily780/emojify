import axios from "axios";

export async function get_lib() {

}

export async function convert(text) {
  const { data } = await axios.get('/keyword-to-emoji.json');
  
  console.log(data);
   return text
    .split(/\b/) 
    .map(word => {
      const key = word.toLowerCase();
      return data[key] || word; 
    })
   .join("");
}

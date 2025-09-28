import axios from "axios";

export async function convert(text: string) {
  const { data } = await axios.get('/keyword-to-emoji.json');

  console.log(data);
  return text
    .split(/\b/)
    .map((word: string) => {
      const key = word.toLowerCase();
      return data[key] || word;
    })
    .join("");
}

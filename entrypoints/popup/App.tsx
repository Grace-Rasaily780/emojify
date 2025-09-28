import { useState } from "react";
import { convert } from "./conversion";
import './App.css';

function App() {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getId = async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      setTitle(tab.title);
    }
    getId();

    const convertToEmoji = async () => {
      const data = await convert("Nepal,[a] officially the Federal Democratic Republic of Nepal,[b] is a landlocked country in South Asia. It is mainly situated in the Himalayas, but also includes parts of the Indo-Gangetic Plain. It borders the Tibet Autonomous Region of China to the north, and India to the south, east, and west, while it is narrowly separated from Bangladesh by the Siliguri Corridor, and from Bhutan by the Indian state of Sikkim. Nepal has a diverse geography, including fertile plains, subalpine forested hills, and eight of the world's ten highest mountains, including Mount Everest, the highest point above mean sea level on Earth.[16] Kathmandu is the nation's capital and its largest city. Nepal is a multi-ethnic, multi-lingual, multi-religious, and multi-cultural state, with Nepali as the official language.");
      console.log(data);
    }

    convertToEmoji();
  }, [])

  return (
    <div className="container">
      <div className="field">
        <label>Webpage</label>
        <span>{title}</span>
      </div>

      <button>
        Convert 🔄
      </button>
    </div>
  );
}

export default App;

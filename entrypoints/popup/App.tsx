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
      const data = await convert("Good morning! I hope you are feeling happy today. The sun is shining bright, and it’s a perfect day to enjoy some pizza or ice cream with friends. Don’t forget to smile and take a break if you feel tired. Remember, every little joy counts in life!");
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

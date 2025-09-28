import { useState } from "react";
import './App.css';

function App() {
  const [mode, setMode] = useState<"noob" | "smiley" | "nerd" | "beast">("noob");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getId = async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      setTitle(tab.title);
    }
    getId();
  }, [])

  return (
    <div className="container">
      <div className="field">
        <label>Mode</label>
        <select name="mode" id="mode" onChange={(e) => {setMode(e.target.value);}}
        >
          <option value="noob">Noob</option>
          <option value="smiley">Smiley</option>
          <option value="nerd">Nerd</option>
          <option value="beast">Beast</option>
        </select>
      </div>

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

import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { DiaryEntry } from "./types";
import axios from "axios";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    axios
      .get<DiaryEntry[]>("http://localhost:3000/api/diaries")
      .then((response) => {
        setEntries(response.data);
      });
  }, []);

  return (
    <div>
      <Header text="Diary entries" />
      <Content entries={entries} />
    </div>
  );
};

export default App;

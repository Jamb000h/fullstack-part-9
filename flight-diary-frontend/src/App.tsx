import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { DiaryEntry } from "./types";
import { NewDiaryEntryForm } from "./components/NewDiaryEntryForm";
import { getAllEntries } from "./services/diaryService";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => {
      setEntries(data);
    });
  }, []);

  const addEntry = (entry: DiaryEntry) => {
    setEntries(entries.concat(entry))
  }

  return (
    <div>
      <NewDiaryEntryForm addEntry={addEntry}/>
      <Header text="Diary entries" />
      <Content entries={entries} />
    </div>
  );
};

export default App;

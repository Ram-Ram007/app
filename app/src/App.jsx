import React, { useEffect, useState } from "react";
import Input from "./Components/input";
import Button from "./Components/button";
import Card from "./Components/card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedTitles = JSON.parse(localStorage.getItem("titles"));
    if (storedTitles && Array.isArray(storedTitles)) {
      setTitles(storedTitles);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id: uuidv4(), title: title };
    const newTitles = [...titles, data];
    setTitles(newTitles);
    localStorage.setItem("titles", JSON.stringify(newTitles));
    setTitle("");
  };

  function UpdateCard() {
    // Add update functionality here
  }

  function deleteCard(id) {
    const filterArray = titles.filter((check) => check.id !== id);
    setTitles(filterArray);
    localStorage.setItem("titles", JSON.stringify(filterArray));
  }

  useEffect(() => {
    console.log(titles);
  }, [titles]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title"
            type="text"
            id="1"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button type="submit" name="Add" />
        </div>
      </form>

      {titles.map((item) => {
        return (
          <div key={item.id}>
            <Card
              values={item}
              deleteCard={() => deleteCard(item.id)}
              UpdateCard={() => UpdateCard(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

//final code
import React, { useEffect, useState } from "react";
import Input from "./Components/input";
import Button from "./Components/button";
import Card from "./Components/card";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  //initialization of state variable
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
    const data = { id: uuidv4(), title: title }; //created object
    const newTitles = [...titles, data]; //storing data to newtitle
    setTitles(newTitles); // stored in top
    localStorage.setItem("titles", JSON.stringify(newTitles));
    setTitle("");
  };

  //returns the updated if
  function UpdateCard(id, updatedTitle) {
    const updatedTitles = titles.map((item) => {
      if (item.id === id) {
        //check the last title and the updated value id.
        return { ...item, title: updatedTitle };
      }
      return item;
    });

    setTitles(updatedTitles);
    localStorage.setItem("titles", JSON.stringify(updatedTitles));
    return updatedTitle;
  }

  // store the value that does not match.
  function deleteCard(id) {
    //it stored the iteam which does not match to your click..and display
    //reamaing one.
    const filterArray = titles.filter((iteam) => iteam.id !== id);
    setTitles(filterArray);
    localStorage.setItem("titles", JSON.stringify(filterArray));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title" // props passing
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
            //mapping and passing value to the card for displaying the value
              values={item} //values contain id and title
              deleteCard={() => deleteCard(item.id)}
              //getting value from card..
              UpdateCard={(updatedTitle) => UpdateCard(item.id, updatedTitle)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;

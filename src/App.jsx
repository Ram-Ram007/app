import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showFormData = () => {
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          name="First Name"
          type="text"
          placeholder="Enter your First name"
          onChange={handleInputChange}
        />
        <Input
          name="Second Name"
          type="text"
          placeholder="Enter your Second name"
          onChange={handleInputChange}
        />
        <Input
          name="Your Age"
          type="number"
          placeholder="Enter your age"
          onChange={handleInputChange}
        />
        <Button onClick={showFormData} name="Submit" />
      </header>
    </div>
  );
}

export default App;

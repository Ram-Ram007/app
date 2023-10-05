import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";
import DisplayFormData from "./Components/DisplayFormData"; // Import the DisplayFormData component

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: "",
    imageUrl: "",
  });

  const [formValues, setFormValues] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setFormValues(formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <Input
          name="title"
          type="text"
          placeholder="Enter the movie title"
          onChange={handleInputChange}
        />
        <Input
          name="description"
          type="text"
          placeholder="Enter the movie description"
          onChange={handleInputChange}
        />
        <Input
          name="rating"
          type="number"
          placeholder="Enter the movie rating"
          onChange={handleInputChange}
        />
        <Input
          name="imageUrl"
          type="url"
          placeholder="Enter the image URL"
          onChange={handleInputChange}
        />
        <Button
          onClick={handleSubmit}
          name="Submit"
        />
      </div>

      {formValues && (
        <>
          <DisplayFormData formData={formValues} />
          {formValues.imageUrl && (
            <div className="image-container">
              <img src={formValues.imageUrl} alt="Movie Poster" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;

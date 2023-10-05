import React from "react";

function DisplayFormData({ formData }) {
  return (
    <div>
      <h2>Form Data:</h2>
      <p>Title: {formData.title}</p>
      <p>Description: {formData.description}</p>
      <p>Rating: {formData.rating}</p>
      <p>Image URL: {formData.imageUrl}</p>
    </div>
  );
}

export default DisplayFormData;

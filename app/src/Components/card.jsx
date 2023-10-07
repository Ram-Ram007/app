import React from "react";

const Card = ({ values, deleteCard, UpdateCard }) => {
  return (
    <div className="card">
      <h2 id={values.id}> {values.title}</h2>
      <button onClick={deleteCard}>delete</button>
      <button onClick={UpdateCard}>Update</button>
    </div>
  );
};

export default Card;
  
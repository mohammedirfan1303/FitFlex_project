import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import exercisesData from "../data/exercises.json";
import "../styles/Categories.css";

function BodyPartsCategory() {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const filtered = exercisesData.filter(
      (ex) => ex.bodyPart.toLowerCase() === id.toLowerCase()
    );
    setExercises(filtered);
  }, [id]);

  return (
    <div>
      <h2>Exercises for: {id}</h2>
      {exercises.length === 0 ? (
        <p>No exercises found for this category.</p>
      ) : (
        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <div className="exercise-card" key={exercise.id}>
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="exercise-img"
              />
              <h3>{exercise.name}</h3>
              <div className="tags">
                <span>{exercise.target } </span>
                <span>{exercise.bodyPart } </span>
                <span>{exercise.equipment } </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BodyPartsCategory;

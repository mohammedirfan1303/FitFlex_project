import React, { useState } from 'react'
import { FaFireAlt } from "react-icons/fa";
import '../styles/HomeSearch.css'
import { useNavigate } from 'react-router-dom';

const HomeSearch = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('bodyPart');
const bodyParts = [
  "back",
  "chest",
  "neck",
  "cardio",
  "shoulders",
  "upper legs",
];

const equipments = [
  "cable",
  "dumbbell",
  "hammer",
  "kettlebell",
  "band",
  "roller"
];


  const handleSearch = () => {
    if (search !== '' && searchType === 'bodyPart') {
      navigate(`/bodyPart/${search}`);
    } else if (search !== '' && searchType === 'equipment') {
      navigate(`/equipment/${search}`);
    }
  };

  return (
    <div className="home-search">
      <h2><FaFireAlt /> Choose Workout</h2>

      {/* Radio buttons to switch between Body and Equipments */}
      <div className="search-type">
  <label>
    <input
      type="radio"
      value="bodyPart"
      checked={searchType === 'bodyPart'}
      onChange={(e) => setSearchType(e.target.value)}
    />
    <span>Body Parts</span>
  </label>
  <label>
    <input
      type="radio"
      value="equipment"
      checked={searchType === 'equipment'}
      onChange={(e) => setSearchType(e.target.value)}
    />
    <span>Equipment</span>
  </label>
</div>


      {/* Styled dropdown instead of plain input */}
      <div className="search-box">
        <select
  className="search-input"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
>
  <option value="">
    {searchType === "bodyPart" ? "Choose your body parts" : "Choose your equipments"}
  </option>
  {(searchType === "bodyPart" ? bodyParts : equipments).map((item, index) => (
    <option key={index} value={item.toLowerCase()}>
      {item}
    </option>
  ))}
</select>


        <button className="search-btn" onClick={handleSearch}>
          Go
        </button>
      </div>
    </div>
  );
}

export default HomeSearch;

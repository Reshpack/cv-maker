import React, { useState } from 'react';
import PropTypes from 'prop-types';
import workImg from '../assets/work.png';

export default function WorkExperience({ addExperience, toggleWork, workVisible }) {
  const [experience, setExperience] = useState({
    companyName: '',
    position: '',
    description: '',
    startYear: '',
    endYear: '',
    location: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setExperience({ ...experience, [id]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addExperience(experience);
    setExperience({
      companyName: '',
      position: '',
      description: '',
      startYear: '',
      endYear: '',
      location: '',
    });
  };

  return (
    <form className="work-experience form-section">
      <div className={`form-header clickable`} onClick={toggleWork}>
        <img src={workImg} alt="Work Experience" />
        <h2>Work Experience</h2>
      </div>
      <div className={`form-group ${workVisible ? 'visible' : 'animate'}`}>
        <div className="input-group">
          <label htmlFor="companyName">
            <span className="label-text">Company</span>
          </label>
          <input type="text" id="companyName" placeholder="Company name" value={experience.companyName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="position">
            <span className="label-text">Position</span>
          </label>
          <input type="text" id="position" placeholder="Position" value={experience.position} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea id="description" placeholder="Description of responsibilities" value={experience.description} onChange={handleChange}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="startYear">
            <span className="label-text">Start Year</span>
          </label>
          <input type="text" id="startYear" placeholder="MM / YYYY" value={experience.startYear} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="endYear">
            <span className="label-text">End Year</span>
          </label>
          <input type="text" id="endYear" placeholder="MM / YYYY or Present" value={experience.endYear} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="location">
            <span className="label-text">Location</span>
          </label>
          <input type="text" id="location" placeholder="City, Country" value={experience.location} onChange={handleChange} />
        </div>
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>
    </form>
  );
}

WorkExperience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string,
      position: PropTypes.string,
      description: PropTypes.string,
      startYear: PropTypes.string,
      endYear: PropTypes.string,
      location: PropTypes.string,
    })
  ).isRequired,
  addExperience: PropTypes.func.isRequired,
  toggleWork: PropTypes.func.isRequired,
  workVisible: PropTypes.bool.isRequired,
};
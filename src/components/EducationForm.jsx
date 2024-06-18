import React, { useState } from 'react';
import PropTypes from 'prop-types';
import educationImg from '../assets/education.png';

export default function EducationForm({addEducation, toggleEducation, educationVisible }) {
  const [education, setEducation] = useState({
    schoolName: '',
    qualification: '',
    startYear: '',
    endYear: '',
    location: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEducation({ ...education, [id]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addEducation(education);
    setEducation({
      schoolName: '',
      qualification: '',
      startYear: '',
      endYear: '',
      location: '',
    });
  };

  return (
    <form className="education-details form-section">
      <div className={`form-header clickable`} onClick={toggleEducation}>
        <img src={educationImg} alt="Education" />
        <h2>Education</h2>
      </div>
      <div className={`form-group ${educationVisible ? 'visible' : 'animate'}`}>
        <div className="input-group">
          <label htmlFor="schoolName">
            <span className="label-text">School</span>
          </label>
          <input type="text" id="schoolName" placeholder="School name" value={education.schoolName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="qualification">
            <span className="label-text">Qualification</span>
          </label>
          <input type="text" id="qualification" placeholder="Degree or field of study" value={education.qualification} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="startYear">
            <span className="label-text">Start Year</span>
          </label>
          <input type="text" id="startYear" placeholder="MM / YYYY" value={education.startYear} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="endYear">
            <span className="label-text">End Year</span>
          </label>
          <input type="text" id="endYear" placeholder="MM / YYYY or Present" value={education.endYear} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="location">
            <span className="label-text">Location</span>
          </label>
          <input type="text" id="location" placeholder="City, Country" value={education.location} onChange={handleChange} />
        </div>
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>
    </form>
  );
}

EducationForm.propTypes = {
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string,
      qualification: PropTypes.string,
      startYear: PropTypes.string,
      endYear: PropTypes.string,
      location: PropTypes.string,
    })
  ).isRequired,
  addEducation: PropTypes.func.isRequired,
  toggleEducation: PropTypes.func.isRequired,
  educationVisible: PropTypes.bool.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';

const ResumePage = ({ personalDetails, educations, experiences }) => {
  return (
    <div className="page" id='resume-page'>
      <h1 className="full-name">
        {personalDetails.fullName || <span className='temp-placeholder'>Full Name</span>}
      </h1>
      <div className="personal-info">
        <p>
          {personalDetails.email || <span className='temp-placeholder'>Email</span>}
        </p>
        <span>|</span>
        <p>
          {personalDetails.phone || <span className='temp-placeholder'>Mobile Number</span>}
        </p>
        <span>|</span>
        <p>
          {personalDetails.address || <span className='temp-placeholder'>Address</span>}
        </p>
      </div>
      <div className="description-page">
        <span className="description-text">
          {personalDetails.profile || <span className='temp-placeholder'>Self Description</span>}
        </span>
      </div>
      <h3>Education</h3>
      <hr />
      {educations.length > 0 ? (
        educations.map((education, index) => (
          <div key={index} className="education-text">
            <div className="education-header">
              <div className="left">
                <p className="school-name">
                  {education.schoolName || <span className='temp-placeholder'>School Name</span>}
                </p>
                <p className="degree-title">
                  {education.qualification || <span className='temp-placeholder'>Qualification</span>}
                </p>
              </div>
              <div className="right">
                <p className="location">
                  {education.location || <span className='temp-placeholder'>Location</span>}
                </p>
                <p className="dates">
                  {education.startYear && education.endYear ? `${education.startYear} - ${education.endYear}` : <span className='temp-placeholder'>Start Year - End Year</span>}
                </p>
              </div>
            </div>
            <p className="description">
              {education.description || <span className='temp-placeholder'>Description of the role and responsibilities goes here. It can be multiple lines long.</span>}
            </p>
          </div>
        ))
      ) : (
        <div className="education-text">
          <p className="temp-placeholder">Add your education details here.</p>
        </div>
      )}
      <h3>Experience</h3>
      <hr />
      {experiences.length > 0 ? (
        experiences.map((experience, index) => (
          <div key={index} className="experience-text">
            <div className="experience-header">
              <div className="left">
                <p className="company-name">
                  {experience.companyName || <span className='temp-placeholder'>Company Name</span>}
                </p>
                <p className="position-title">
                  {experience.position || <span className='temp-placeholder'>Position Title</span>}
                </p>
              </div>
              <div className="right">
                <p className="location">
                  {experience.location || <span className='temp-placeholder'>Location</span>}
                </p>
                <p className="dates">
                  {experience.startYear && experience.endYear ? `${experience.startYear} - ${experience.endYear}` : <span className='temp-placeholder'>Start Year - End Year</span>}
                </p>
              </div>
            </div>
            <p className="description">
              {experience.description || <span className='temp-placeholder'>Description of the role and responsibilities goes here. It can be multiple lines long.</span>}
            </p>
          </div>
        ))
      ) : (
        <div className="experience-text">
          <p className="temp-placeholder">Add your work experience details here.</p>
        </div>
      )}
    </div>
  );
};

ResumePage.propTypes = {
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    profile: PropTypes.string,
  }).isRequired,
  educations: PropTypes.arrayOf(
    PropTypes.shape({
      schoolName: PropTypes.string,
      qualification: PropTypes.string,
      startYear: PropTypes.string,
      endYear: PropTypes.string,
      location: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
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
};

export default ResumePage;
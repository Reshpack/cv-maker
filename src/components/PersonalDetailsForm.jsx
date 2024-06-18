import React from 'react';
import PropTypes from 'prop-types';
import personalImg from '../assets/person.png';

export default function PersonalDetailsForm({ personalDetails, setPersonalDetails }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonalDetails({ ...personalDetails, [id]: value });
  };

  return (
    <form className="personal-details form-section">
      <div className="form-header">
        <img src={personalImg} alt="Personal" />
        <h2>Personal Details</h2>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="fullName">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" id="fullName" placeholder="First and last name" value={personalDetails.fullName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input type="email" id="email" placeholder="Email address" value={personalDetails.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="tel" id="phone" placeholder="Phone number" value={personalDetails.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="address">
            <span className="label-text">Address</span>
          </label>
          <textarea id="address" placeholder="City, Country" value={personalDetails.address} onChange={handleChange}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="profile">
            <span className="label-text">Self Description</span>
          </label>
          <textarea id="profile" placeholder="Short summary about yourself" value={personalDetails.profile} onChange={handleChange}></textarea>
        </div>
      </div>
    </form>
  );
}

PersonalDetailsForm.propTypes = {
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    profile: PropTypes.string,
  }).isRequired,
  setPersonalDetails: PropTypes.func.isRequired,
};
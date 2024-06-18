import { useEffect, useState } from 'react'
import './styles/main.css'
import personalImg from './assets/person.png';
import educationImg from './assets/education.png'
import workImg from './assets/work.png'
import downloadIcon from './assets/download.svg'
import headerIcon from './assets/headerIcon.svg'


export default function App() {

  // form buttons hidden
  const [educationVisible, setEducationVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);

  const toggleEducation = () => {
    setEducationVisible(!educationVisible);
  };

  const toggleWork = () => {
    setWorkVisible(!workVisible);
  };

  return (
    <>
    <header className='header'>
    <h1 className="header-title"><img className='header-icon' src={headerIcon} alt="" />SP CV Maker</h1>
    </header>

    <div className='content'>
    <div className='forms'>
      <form className='personal-details form-section'>
        <div className='form-header'>
        <img src={personalImg} alt="Personal" />
        <h2>Personal Details</h2>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <label htmlFor="full-name">
              <span className='label-text'>Full Name</span>
            </label>
            <input type="text" id='full-name' placeholder='First and last name' />
          </div>
          <div className='input-group'>
            <label htmlFor="email">
              <span className='label-text'>Email</span>
            </label>
            <input type="email" id='email' placeholder='Email address' />
          </div>
          <div className='input-group'>
            <label htmlFor="phone">
              <span className='label-text'>Phone Number</span>
            </label>
            <input type="tel" id='phone' placeholder='Phone number' />
          </div>
          <div className='input-group'>
            <label htmlFor="address">
              <span className='label-text'>Address</span>
            </label>
            <textarea id="address" placeholder='City, Country'></textarea>
          </div>
          <div className='input-group'>
            <label htmlFor="profile">
              <span className='label-text'>Self Description</span>
            </label>
            <textarea id="profile" placeholder='Short summary about yourself'></textarea>
          </div>
        </div>
      </form>
      <form className='education-details form-section'>
        <div className={`form-header clickable`} onClick={toggleEducation}>
        <img src={educationImg} alt="Education" />
        <h2>Education</h2>
        </div>
        <div className={`form-group ${educationVisible ? 'visible' : 'animate'}`}>
          <div className='input-group'>
            <label htmlFor="school-name">
              <span className='label-text'>School</span>
            </label>
            <input type="text" id='school-name' placeholder='School name' />
          </div>
          <div className='input-group'>
            <label htmlFor="qualification">
              <span className='label-text'>Qualification</span>
            </label>
            <input type="text" id='qualification' placeholder='Degree or field of study' />
          </div>
          <div className='input-group'>
            <label htmlFor="start-year">
              <span className='label-text'>Start Year</span>
            </label>
            <input type="text" id='start-year' placeholder='MM / YYYY' />
          </div>
          <div className='input-group'>
            <label htmlFor="end-year">
              <span className='label-text'>End Year</span>
            </label>
            <input type="text" id='end-year' placeholder='MM / YYYY or Present' />
          </div>
          <div className='input-group'>
            <label htmlFor="location">
              <span className='label-text'>Location</span>
            </label>
            <input type="text" id='location' placeholder='City, Country' />
          </div>
          <button className='btn'>Add</button>
        </div>
        </form>
      <form className='work-details form-section'>
      <div className={`form-header clickable`} onClick={toggleWork}>
        <img src={workImg} alt="Work" />
        <h2>Work Experience</h2>
        </div>
        <div className={`form-group ${workVisible ? 'visible' : 'animate'}`}>
          <div className='input-group'>
            <label htmlFor="company-name">
              <span className='label-text'>Company Name</span>
            </label>
            <input type="text" id='company-name' placeholder='Company name' />
          </div>
          <div className='input-group'>
            <label htmlFor="position">
              <span className='label-text'>Position Title</span>
            </label>
            <input type="text" id='position' placeholder='Position title' />
          </div>
          <div className='input-group'>
            <label htmlFor="description">
              <span className='label-text'>Description</span>
            </label>
            <textarea id="description" placeholder='Description'></textarea>
          </div>
          <div className='input-group'>
            <label htmlFor="start-year">
              <span className='label-text'>Start Year</span>
            </label>
            <input type="text" id='start-year' placeholder='MM / YYYY' />
          </div>
          <div className='input-group'>
            <label htmlFor="end-year">
              <span className='label-text'>End Year</span>
            </label>
            <input type="text" id='end-year' placeholder='MM / YYYY or Present' />
          </div>
          <div className='input-group'>
            <label htmlFor="location">
              <span className='label-text'>Location</span>
            </label>
            <input type="text" id='location' placeholder='City, Country' />
          </div>
          <button className='btn'>Add</button>
        </div>
        </form>
        <button className='dl-btn'><img src={downloadIcon} />Download</button>
    </div>
    <div className='page'>
      <h1 className='full-name'>Full Name</h1>
      <div className='personal-info'>
          <p>Email</p>
          <span>|</span>
          <p>Phone Number</p>
          <span>|</span>
          <p>Address</p>
      </div>
      <div className='description-page'>
        <span className='description-text'></span>
      </div>
      <h3>Education</h3>
      <hr />
      <div className='education-text'>
            <div className='education-header'>
                <div className='left'>
                    <p className='school-name'>School</p>
                    <p className='degree-title'>Qualification</p>
                </div>
                <div className='right'>
                    <p className='location'>Location</p>
                    <p className='dates'>Start Date - End Date</p>
                </div>
            </div>
            <p className='description'>
                Description of the role and responsibilities goes here. It can be multiple lines long.
            </p>
        </div>
      <h3>Experience</h3>
      <hr />
      <div className='experience-text'>
            <div className='experience-header'>
                <div className='left'>
                    <p className='company-name'>Company Name</p>
                    <p className='position-title'>Position Title</p>
                </div>
                <div className='right'>
                    <p className='location'>Location</p>
                    <p className='dates'>Start Date - End Date</p>
                </div>
            </div>
            <p className='description'>
                Description of the role and responsibilities goes here. It can be multiple lines long.
            </p>
        </div>
    </div>
    </div>
    <footer>Copyright &copy; 2024 Reshpack</footer>
    </>
  )
}


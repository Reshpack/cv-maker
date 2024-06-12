import { useEffect, useState } from 'react'
import './styles/main.css'
import personalImg from './assets/person.png';
import educationImg from './assets/education.png'
import workImg from './assets/work.png'


export default function App() {


  return (
    <>
    <header className='header'>
    <h1 className="header-title">SP CV Maker</h1>
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
        <div className='form-header clickable'>
        <img src={educationImg} alt="Education" />
        <h2>Education</h2>
        </div>
        <div className='form-group visible'>
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
        </div>
        </form>
      <form className='work-details form-section'>
      <div className='form-header clickable'>
        <img src={workImg} alt="Work" />
        <h2>Work Experience</h2>
        </div>
        <div className='form-group visible'>
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
        </div>
        </form>
    </div>
    <div className='page'></div>
    </div>
    <footer>Copyright &copy; 2024 Reshpack</footer>
    </>
  )
}


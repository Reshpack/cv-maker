import { useEffect, useState } from 'react'
import './styles/main.css'
import personalImg from './assets/person.png';


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
              <span className='label-text'>Phone number</span>
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
            <textarea id="profile" placeholder='Short summary about self'></textarea>
          </div>
        </div>
      </form>
      <form className='form-section'>
        <h2>Education</h2>
        </form>
      <form className='form-section'>
        <h2>Work Experience</h2>
        </form>
    </div>
    <div className='page'></div>
    </div>
    <footer>Copyright &copy; 2024 Reshpack</footer>
    </>
  )
}


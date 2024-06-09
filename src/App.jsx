import { useEffect, useState } from 'react'
import './styles/main.css'


export default function App() {
  return (
    <>
    <header className='header'>
    <h1 className="header">SP CV Maker</h1>
    </header>

    <div className='content'>
    <div className='forms'>
      <form>
        <h2>Personal Details</h2>
        <div>
          <div>
            <label for="full-name">
              <span className='label-text'>Full Name</span>
            </label>
          </div>
        </div>
      </form>
      <form>
        <h2>Education</h2>
        </form>
      <form>
        <h2>Work Experience</h2>
        </form>
    </div>
    <div className='page'></div>
    </div>
    <footer></footer>
    </>
  )
}


import { useState } from 'react';
import './styles/main.css';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationForm from './components/EducationForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import ResumePage from './components/ResumePage';
import DownloadButton from './components/DownloadButton';
import headerIcon from './assets/headerIcon.svg';

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    profile: '',
  });

  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educationVisible, setEducationVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);

  const toggleEducation = () => {
    setEducationVisible(!educationVisible);
  };

  const toggleWork = () => {
    setWorkVisible(!workVisible);
  };

  const addEducation = (education) => {
    setEducations([...educations, education]);
  };

  const addExperience = (experience) => {
    setExperiences([...experiences, experience]);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-title">
          <img className="header-icon" src={headerIcon} alt="" />
          SP CV Maker
        </h1>
      </header>

      <div className="content">
        <div className="forms">
          <PersonalDetailsForm
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <EducationForm
            educations={educations}
            addEducation={addEducation}
            toggleEducation={toggleEducation}
            educationVisible={educationVisible}
          />
          <WorkExperienceForm
            experiences={experiences}
            addExperience={addExperience}
            toggleWork={toggleWork}
            workVisible={workVisible}
          />
          <DownloadButton />
        </div>
        <ResumePage
          id="resume-content" // Ensure this ID is added to the content wrapper
          personalDetails={personalDetails}
          educations={educations}
          experiences={experiences}
        />
      </div>

      <footer>
        Copyright &copy; 2024 Reshpack
      </footer>
    </>
  );
};

export default App;
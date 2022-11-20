import './App.css';
import { useState } from 'react';

function App() {
  const API_URL = 'http://localhost:3001';
  const [prompt, setPrompt] = useState('');
  const [school, setSchool] = useState('');
  const [educationStatus, setEducationStatus] = useState('');
  const {softSkills, setSoftSkills } = useState('');
  const [data, setData] = useState('');
  const {fullName, setFullName } = useState('');
  const {email, setEmail } = useState('');
  const {phoneNumber, setPhoneNumber } = useState('');
  const { date, setDate } = useState('');
  const { jobTitle, setJobTitle } = useState('');
  const { company, setCompany } = useState('');
  const { recruiterName, setRecruiterName } = useState('');
  const { previousCompany1, setPreviousCompany1} = useState('');
  const { activity1, setActivity1} = useState('');
  const { aboutActivity1, setAboutActivity1} = useState('');
  const { points1, setPoints1} = useState('');
  const { previousCompany2, setpreviousCompany2} = useState('');
  const { activity2, setActivity2} = useState('');
  const { aboutActivity2, setAboutActivity2} = useState('');
  const { points2, setPoints2} = useState('');
  const { jobDescription, setJobDescription} = useState('');

  // Update prompt variable when handleChange is called
  const handleChange = (e, setChange) => {
    setChange(e.target.value);
  };

  // When handleSubmit is called, passes prompt to /api and then gets assigns response to data
  const handleSubmit = (e) => {
    setPrompt(`Job Description: ${jobDescription}
    School: ${school}
    Education Status: ${educationStatus}
    Soft Skills: ${softSkills}

    Your Name: ${fullName}
    Your Email: ${email}
    Your Phone Number: ${phoneNumber}
    Date: ${date}
    Job Title: ${jobTitle}
    Company: ${company}
    Their Name: ${recruiterName}
    Your Previous Group/Company: ${previousCompany1}
    Your Previous Activity: ${activity1}
    About Activity: ${aboutActivity1}
    Points to Highlight: ${points1}
    Your Previous Group/Company: ${previousCompany2}
    Your Previous Activity: ${activity2}
    About Activity: ${aboutActivity2}
    Points to Highlight: ${points2}
    
    `);
    e.preventDefault();
    setData(null);
    fetch(`${API_URL}/api?prompt=${prompt}`)
      .then((res) => res.json())
      .then((data) => setData(`${data.generations[0].text.slice(0, -1)}`));
  };

  return (
<div className="App">
  <header className="App-header">
    <h1>Cover Letter AI</h1>
    <form onSubmit={handleSubmit}>
    
     <h3>Contact Information</h3>
    <label>
        Full Name:
        <input name="full-name" rows="5" cols="5" value={fullName} onChange={(e) => handleChange(e, () => setFullName())} />
      </label>
      <label>
        Email:
        <input name="email" rows="5" cols="5" value={email} onChange={(e) => handleChange(e, () => setEmail())} />
        <br />
      </label>
      <label>
        Phone Number:
        <input name="phone-number" rows="5" cols="5" value={phoneNumber} onChange={(e) => handleChange(e, () => setPhoneNumber())} />
      </label>
      <label>
        Date:
        <input name="date" rows="5" cols="5" value={date} onChange={(e) => handleChange(e, () => setDate())} />
        <br />
      </label>
      <label>
        Job Title:
        <input name="job-title" rows="5" cols="5" value={jobTitle} onChange={(e) => handleChange(e, () => setJobTitle())} />
      </label>
      <label>
        Company:
        <input name="company" rows="5" cols="5" value={company} onChange={(e) => handleChange(e, () => setCompany())} />
        <br />
      </label>
      <label>
        Recruiter Name:
        <input name="recruiter-name" rows="5" cols="5" value={recruiterName} onChange={(e) => handleChange(e, () => setRecruiterName())} />
      </label>
      <h3>Education and Soft Skills</h3>
    <label>
        School:
        <input name="school" rows="5" cols="5" value={school} onChange={(e) => handleChange(e, () => setSchool())} />
      </label>
      <label>
        Education Status:
        <input name="email" rows="5" cols="5" value={educationStatus} onChange={(e) => handleChange(e, () => setEducationStatus())} />
        <br />
      </label>
      <label>
        Soft Skills:
        <input name="soft-skills" rows="5" cols="5" value={softSkills} onChange={(e) => handleChange(e, () => setSoftSkills())} />
      </label>
      <h3>Experience 1</h3>
      <label>
        Previous Company:
        <input name="previous-company1" rows="5" cols="5" value={previousCompany1} onChange={(e) => handleChange(e, () => setPreviousCompany1())} />
      </label>
      <label>
        Activity:
        <input name="activity1" rows="5" cols="5" value={activity1} onChange={(e) => handleChange(e, () => setActivity1())} />
        <br />
      </label>
      <label>
        About Activity:
        <input name="about-activity1" rows="5" cols="5" value={aboutActivity1} onChange={(e) => handleChange(e, () => setAboutActivity1())} />
      </label>
      <label>
        Points to Emphasize:
        <input name="points-to-emphasize1" rows="5" cols="5" value={points1} onChange={(e) => handleChange(e, () => setPoints1())} />
        <br />
      </label>
      <h3>Experience 2</h3>
      <label>
        Previous Company:
        <input name="previous-company2" rows="5" cols="5" value={previousCompany2} onChange={(e) => handleChange(e, () => setpreviousCompany2())} />
      </label>
      <label>
        Activity:
        <input name="activity2" rows="5" cols="5" value={activity2} onChange={(e) => handleChange(e, () => setActivity2())} />
        <br />
      </label>
      <label>
        About Activity:
        <input name="about-activity2" rows="5" cols="5" value={aboutActivity2} onChange={(e) => handleChange(e, () => setAboutActivity2())} />
      </label>
      <label>
        Points to Emphasize:
        <input name="points-to-emphasize2" rows="5" cols="5" value={points2} onChange={(e) => handleChange(e, () => setPoints2())} />
        <br />
      </label>
      <br />
      <label>
        Enter Job Description Here: 
        <br />
        <textarea name="input-box" rows="5" cols="100" value={jobDescription} onChange={(e) => handleChange(e, () => setJobDescription())} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
    <h1>Result:</h1>
    <h4>{!data ? 'Cover letter will appear here.' : data}</h4>
  </header>
</div>
)
}

export default App;

// server/index.js

const AIData = `This program will generate a cover letter based on the user data being given:

--
Job Description: 


Apple is a place where extraordinary people gather to do their best work. Together we create products and experiences people once couldn’t have envisioned — and now can’t imagine living without. If you’re excited by the idea of making an impact, joining a team where we pride ourselves in being one of the most diverse and expansive companies in the world, a career with Apple might be your dream job. 

Quite simply, our teams keep Apple’s world-class networks running. We are a global community of engineers who work together to operate a multi-vendor network that interconnects Apple’s large data centres, campuses and smaller regional or national offices, as well as providing connectivity via various VPN technologies to third-party suppliers and partners. This is all glued together across an Internet-scale backbone network. 

We are looking for an enthusiastic and passionate person to join a dynamic and exciting team within Apple’s Global Infrastructure Operations, supporting Apple’s varied networks. You will be skilled in cross-organisational collaboration, liaising with internal teams and external service providers to operate and maintain the network infrastructure. You will need to develop and maintain clear documentation and procedures associated with operations and known issues. This position provides the opportunity to operate a cutting-edge, worldwide, multi-vendor network.
Key Qualifications
Working experience with IPv4, IPv6, BGP, OSPF and layer 2 technologies.
Good understanding of large-scale LAN and WAN networking technologies.
Knowledge of VPN technologies such as IPSec and DMVPN.
Experience with Palo Alto, Juniper, Cisco or other vendors’ firewalls.
Ability to coordinate and troubleshoot with internal and external partner teams.
Proficiency with Linux or other versions of UNIX.
Knowledge of configuration management and automation technologies such as Ansible, Salt, Chef and Python, Go, etc.
Description

School: CalTech
Education Status:
Soft Skills: 

Your Name: Wilma Dean
Your Email: WilmaDean@hotmail.com
Your Phone Number: 6723291110
Date: December 12, 2018
Job Title: Network Engineer
Company: Apple
Their Name: Johan Mantell
Your Previous Group/Company: CalTech
Your Previous Activity: Internal work experience at Tokyo Tech Conferance
About Activity: Cisco certifications 
Points to highlight: Continuous improvement
Your Previous Group/Company: Sansong
Your Previous Activity: Network Optimization
About Activity: Reduced security issues
Points to highlight: Reduced by 35% over two years, encryption protocols received recognition.

Cover Letter Sample:

Dear Mr. Mantell,

Having worked as a network engineer at Sansong for the past five years, I understand the varied requirements of the role at Apple. My previous experience in infrastructure design will also assist in the considerable project-led aspects of the position.

My computer science degree from CalTech was followed up with a year of international work experience at the Tokyo Tech Conference. I embarked on my Cisco certifications soon after beginning my first role and I have been on a journey of continuous improvement since.

I have been a keen participant in security hackathons over the past five years and it was my team mate Sarah Jenwith who alerted me to the role at Apple. We came second in a recent State competition, and she told me much about the challenges that you are currently facing. My network optimization work at Sansong reduced security issues by 35% over a two-year period and my encryption protocols received company-wide recognition. In terms of my technical expertise, I have experience in the following:

LAN, VPN, SAN and VoIP infrastructure design
Network and security admin, design, analysis and improvement
Cloud computing systems with encrypted data storage facilities
 
My network support decreased downtime for my department by 7% and we improved malware detection by 45%. This resulted in an estimated business saving of $2.5m and is something that I know I can replicate at Apple.

I would welcome the opportunity of an interview to find out more about the challenges and specifics of the role.

Sincerely,
Wilma Dean

--
`;

const coverLetterSample = "Cover Letter Sample:/n";
const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const cohere = require('cohere-ai');
cohere.init('UdLGZiYuylCQRxdqP8OcPM8MtoFBn9wlnW1BfNC6');

app.get('/api', async (req, res) => {
  const response = await cohere.generate({
    model: 'large',
    prompt: req + coverLetterSample,
    max_tokens: 320,
    temperature: 2,
    stop_sequences: ['--'],
  });
  res.json(response.body);
});
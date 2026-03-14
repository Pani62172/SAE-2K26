
import React from 'react';
import './Speakers.css';

const speakers = [
  {
    name: 'Jaskaran Singh',
    role: 'ICPC World Finalist, Software Engineer at Google',
    imgSrc: 'https://i.ibb.co/KBWFygJ/1741464949602-e-2147483647-v-beta-t-XUSFbl-K3b-HHs0i4-FLBg-KEFK2u-FYr-IRPudv-USOdg-l-I.jpg'
  },
  {
    name: 'Preeti Sarkar',
    role: 'Actor, Content Creator, Designer and Founder @ Preetizen',
    imgSrc: 'https://i.ibb.co/9m51kw9b/202102181717-HRMFVbab-Wu-XPIXcb.jpg'
  },
  {
    name: 'Sourav Sarkar',
    role: 'Merchant Navy Officer,Naval Trainer,Marine Engineer and World Traveller',
    imgSrc: 'https://i.ibb.co/sdpmqx2z/hq720.jpg'
  },
  {
    name: 'Prachi Tehlan',
    role: 'Actress, Style icon and Ngo Founder',
    imgSrc: "https://i.ibb.co/m5MrnHLz/prachitelhan.jpg"
  },
  {
    name: 'Ashutosh Pratihast',
    role: ' Founder and CEO',
    imgSrc: 'https://i.scdn.co/image/ab6761610000e5eb69ba8288e3eced2ff14b1060'
  },
  {
    name: 'Sinjini Sengupta',
    role: 'Actuary, Author, Columnist and Professional Speaker',
    imgSrc: 'https://pbs.twimg.com/profile_images/1679449056601583616/YcJrRpwC_400x400.jpg'
  },
  {
    name: 'Dr. Yogendra Singh Rathore',
    role: 'NLP expert, Mental health coach',
    imgSrc: 'https://gunigurumedia.s3.ap-south-1.amazonaws.com/media-library/80/OjbI1moasKAEQHOF7zDKZ5oPvZNe5ejzWos85AoD.jpg'
  },
  {
    name: 'Aanchal Thakur',
    role: 'Alpine Skier',
    imgSrc: 'https://i.postimg.cc/VvrMRpWQ/Screenshot-2024-08-22-021218.png'
  },
  {
    name: 'Tapan Misra',
    role: 'Indian Scientist',
    imgSrc: 'https://i.postimg.cc/fWG8VQsh/Screenshot-2024-08-22-021637.png'
  },
  {
    name: 'Kanthi Dutt',
    role: 'Entrepreneur',
    imgSrc: 'https://i.postimg.cc/htPTj2XB/Screenshot-2024-08-22-021844.png'
  },
  {
    name: 'Pratik Gauri',
    role: 'Social Entrepreneur',
    imgSrc: 'https://i.postimg.cc/vHG6q0LV/Screenshot-2024-08-22-022121.png'
  },
  {
    name: 'Kenidra Woods',
    role: 'Mental Health and Social Justice Activist',
    imgSrc: 'https://i.postimg.cc/DwMJznVr/Screenshot-2024-08-22-022326.png'
  },
];

const Speakers = () => {
  return (
    <div className="speakers-container mt-5">
      <div className="organisers-container">
        {speakers.map((speaker, index) => (
          <div key={index} className="ted-card">
            <div className="ted-imgBx">
              <img src={speaker.imgSrc} alt={speaker.name} />
            </div>
            <div className="ted-details ">
              <h2 className='font-bold text-xl'>{speaker.name}<br /><span className='font-semibold text-lg'>{speaker.role}</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;

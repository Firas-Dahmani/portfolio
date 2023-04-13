import React from 'react'
import styled from 'styled-components';
import  IconGitHub  from '../icons/github.jsx';
import IconResume from '../icons/resume.jsx';
import  IconLinkedin from '../icons/linkedin.jsx';

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 90%;
  }
`;

const ContactIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

`;

const StyledIcon = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  svg {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 600px) {
    /* for tablets */
    svg { width: 65px; height: 65px; }
  }

  @media (min-width: 1024px) {
    /* for desktops */
    svg { width: 80px; height: 80px; }
  }

`;

function contact() {
  return (
    <StyledContactSection>
      <h2>Get in touch</h2>
      <p>Looking forward to hearing from you soon! Let's connect and discuss how my skills and experience can contribute to your team.</p>
      <ContactIcon>
        <StyledIcon >
        <IconGitHub />
          <p>Gtihub</p>
        </StyledIcon>
        <StyledIcon >
        <IconResume />
          <p>Resume</p>
        </StyledIcon>
        <StyledIcon >
        <IconLinkedin />
          <p>Linkedin</p>
        </StyledIcon>
      </ContactIcon>
    </StyledContactSection>
  )
}

export default contact
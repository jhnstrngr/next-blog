import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";
import ResumeItem from "components/ResumeItem";
import { rem } from "polished";

const Resume = () => {
  return (
    <Box variant="container" flexGrow="1">
      <div className="about-container">
        <h1>Resume</h1>
        <ResumeStyled>
          <div className="title">Education</div>
          <ResumeItem
            name="University of Plymouth"
            role="Internet Design"
            duration="September 2017- May 2020"
            description="A course centered around designing web based applications such as websites and mobile applications from design to programming.
"
          />
          <ResumeItem
            name="Ivybridge Community College"
            role="A Levels & GCSEs"
            duration="September 2011 - June 2016"
            description="I studied ICT, Computing and Spanish during my A Level studies."
          />
          <div className="title">Experience</div>
          <ResumeItem
            name="Formell Ltd."
            role="Junior Developer"
            duration="September 2016 - Jun 2017"
            description="During my A Levels I worked part time for a business software solutions company in Roborough."
          />
          <div className="title">Skills</div>
          <div className="text-content">
            HTML • CSS • JavaScript • Git • NPM/Yarn • Photshop • Illustrator •
            After Effects • React • Figma
          </div>
          <div className="title">Languages</div>
          <div className="text-content">
            I can speak fluent English and Spanish, coming from a bilingual
            English and Spanish household.
          </div>
        </ResumeStyled>
      </div>
    </Box>
  );
};

const ResumeStyled = styled.div`
  .title {
    font-size: ${rem(24)};
    font-weight: 600;
    padding-top: ${rem(20)};
  }
  .text-content {
    margin-top: ${rem(10)};
    opacity: 0.9;
    font-size: ${rem(18)};
    @media only screen and (max-width: 700px) {
      font-size: ${rem(16)};
    }
  }
`;

export default Resume;

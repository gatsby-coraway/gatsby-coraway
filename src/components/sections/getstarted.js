import React from "react"
import styled from "styled-components"
import { Container, Section } from "../global"

const GetStarted = () => (
  <Section id="Contact">
  <StyledSection>
    <GetStartedContainer>
      <Subtitle>Contact Us</Subtitle>
      <GetStartedTitle>Save time and grow your portfolio</GetStartedTitle>
      <FeatureText>
          Have any questions? Thats great! Contact us at <a href="mailto:info@thecoraway.com">info@thecoraway.com</a> 
          <br/>or click the button below and we will reach out to you.
      </FeatureText>
      <a href="https://coraway.typeform.com/to/Ttjs8g">
      <TryItButton>Get in touch</TryItButton>
      </a>
      {/* <Subtitle>No credit card required.</Subtitle> */}
    </GetStartedContainer>
  </StyledSection>
  </Section>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0% 14%,100% 0%,100% 100%,0% 100%);
`
const FeatureText = styled.p`
  text-align: center;
  margin-bottom: 45px;
  margin-top: 10px;
  a{
    color:#098c8c;
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
  

  a {
    text-decoration: none;
  }
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 0px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

import React from "react"
import styled from "styled-components"
import  Img from "gatsby-image"
import {useStaticQuery, graphql} from  "gatsby"
import { Section, Container } from "../global"

const Features = () => {
  const data = useStaticQuery(graphql`
  query {
  imageOne: file(relativePath: { eq: "vetted-pros.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "teams.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(relativePath: { eq: "recommend.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageFour: file(relativePath: { eq: "research.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`);
return(
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Long distance management</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <ImageWrapper>
            <StyledImage fluid={data.imageOne.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Pre-vetted pros</FeatureTitle>
          <FeatureText>
          Explore curated property management data from Google reviews, 
          Yelp BiggerPockets, and investor referrals.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <ImageWrapper>
            <StyledImage fluid={data.imageTwo.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Build a team</FeatureTitle>
          <FeatureText>
          Create a team of reliable real estate investors and property managers close by
          to your distant property.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <ImageWrapper>
            <StyledImage fluid={data.imageThree.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Get recommendations</FeatureTitle>
          <FeatureText>
          Coraway makes management simpler by recommending property 
          management pros that are perfect for you. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
         <ImageWrapper>
            <StyledImage fluid={data.imageFour.childImageSharp.fluid} />
          </ImageWrapper>
          <FeatureTitle>Market research</FeatureTitle>
          <FeatureText>
            Want to invest in affordable markets but don’t know where 
            to start? We partner with experts to give you advice.
          </FeatureText>
        </FeatureItem>
        {/* <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Send money to friends and family with ease.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Rewards</FeatureTitle>
          <FeatureText>
            High interest and rewards for hitting your goals.
          </FeatureText>
        </FeatureItem> */}
      </FeaturesGrid>
    </StyledContainer>
  </Section>)
}

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

const ImageWrapper = styled.div`
justify-self: end;
align-self: center;
@media (max-width: ${props => props.theme.screen.md}) {
  justify-self: center;
}
`

const StyledImage = styled(Img)`
width: 200px;
@media (max-width: ${props => props.theme.screen.md}) {
  width: 200px;
}
@media (max-width: ${props => props.theme.screen.sm}) {
  width: 100px;
  display: none;
}
`
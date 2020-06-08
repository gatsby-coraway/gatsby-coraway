import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Section } from "../global"

const Product = () => {
    const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "example-ui" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
return(
  <Section id="services">
  <StyledSection>
  <Container>
        <Flex>
          <HeaderTextGroup>
            <h2>
                Our Solution
            </h2>
            <h4> 
                {/* A great team is important for successful property management. */}
                Utilizing machine learning techniques, we've curated a database of long distance investor friendly property management companies, professionals and individuals ready to treat your property as their own.
                <br/><br/>Based on your current portfolio and unique needs, you are matched with any of the following:
            </h4>
            <ul>
           <li>Full service property management</li>
           <li>A la carte property management</li>
           <li>Individual, on-demand property management pros</li>
           <li>Local real estate investors</li>
           <li>Long distance investors with property nearby</li>
            </ul>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid}/>
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
  </StyledSection>
  </Section>)
}

export default Product

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 90%);
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h2 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h4 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }

  ul, li {
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 15px;
      color: #098c8c;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
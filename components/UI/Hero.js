import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

const Section = styled.section`
    padding: 6.4rem 0;
`

const HeroContainer = styled.div`
    
    max-width: 130rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8.4rem;
`
const HeroImageContainer = styled.div`
    pointer-events: none;
`

const HeroContentContainer = styled.div`
    text-align: center;
`

const HeroHeading = styled.h2`
    font-size: 6.2rem;
    margin-bottom: 4.2rem;
`

const HeroDescription = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
`

const Anchor = styled.a`
    font-size: 2rem;
`


const Hero = () =>{
    return (
        <Section>
            <HeroContainer>
                <HeroImageContainer>
                    <Image src='/egg.svg' alt="just a profile picture" width={200} height={200} />
                </HeroImageContainer>

               <HeroContentContainer>
                   <HeroHeading>Hello! my name is bryan :)</HeroHeading>
                   
                   <HeroDescription>Im a automation tester with experience on using Selenium and Cypress and Web Dev hobbyist with some experience on tech stack like NestJS, React & NextJS</HeroDescription>
               </HeroContentContainer>

               {/* <Link href='/about'>
                    <Anchor>View Projects</Anchor>
               </Link> */}
            </HeroContainer>
        </Section>
    )
}

export default Hero
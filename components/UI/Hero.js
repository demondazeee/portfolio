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
    gap: 2.4rem;
`
const HeroImageContainer = styled.div`
    pointer-events: none;
`

const HeroContentContainer = styled.div`
    text-align: center;
    margin-bottom: 4.2rem;
`

const HeroHeading = styled.h2`
    font-size: 6.2rem;
    margin-bottom: 4.2rem;
`

const HeroDescription = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
`

const HeroLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

const HeroLinks = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`

const HeroLinksContentContainer = styled.div`

`

const HeroList = styled.li`
    cursor: pointer;
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
                   
                   <HeroDescription>I&apos;m an automation tester with experience on using Python and Selenium and I&apos;m a Self-Taught FullStack dev with some experience on tech stack like NestJS, React & NextJS</HeroDescription>
               </HeroContentContainer>

                <HeroLinksContainer>
                    <HeroLinksContentContainer>
                        <HeroDescription>Let&apos;s collaborate</HeroDescription>
                    </HeroLinksContentContainer>
                    <HeroLinks>
                        <HeroList>
                            <Link href='https://www.linkedin.com/in/bryan-avila-b2a2a3137/'>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src='/linkedin.svg' alt="linkedin image" width={50} height={50} />
                                </a>
                            </Link>
                        </HeroList>
                        <HeroList>
                            <Link href='https://github.com/demondazeee'>
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src='/github.svg' alt="linkedin image" width={50} height={50} />
                                </a>
                            </Link>
                        </HeroList>
                        <HeroList>
                            <Link href='https://drive.google.com/file/d/12GkOvO9F6QJHyEjGdNVovac8tY28ZDuk/view?usp=sharing' >
                                <a target="_blank" rel="noopener noreferrer">
                                    <Image src='/pdf.png' alt="linkedin image" width={50} height={50} />
                                </a>
                            </Link>
                        </HeroList>
                    </HeroLinks>
                </HeroLinksContainer>
            </HeroContainer>
        </Section>
    )
}

export default Hero
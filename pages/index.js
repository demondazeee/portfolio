import Hero from "../components/UI/Hero"
import Head from 'next/head'


const Home = () =>{
  return (
    <>
    <Head>
      <title>Bryan Avila | Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <div className="doodle">
        <Hero />
      </div>
    </>
  )
}

export default Home
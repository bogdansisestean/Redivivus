import Head from 'next/head'
import { Fragment } from 'react'
import Avantaje from '../components/avantaje/Avantaje'
import CallToAction from '../components/calltoaction/CallToAction'
import FirstSection from '../components/firstsection/FirstSection'
import Footer from '../components/footer/footer'
import ImageCarousel from '../components/galleryCarousel/GalleryCarousel'
import Header from '../components/header/header'
import Istoric from '../components/istoric/Istoric'
import Partners from '../components/partners/partners'
import ServicesComponent from '../components/services/servicesComponent/servicesComponent'
import VideoPlayer from '../ui/videoPlayer/videoPlayer'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Redivivus AutoRutiere</title>
        <meta name="description" content="Unitate mobila specializata in reparatii lovituri de grindina" />
        <meta name="keywords" content="deformari masini, reparatii grindina, grindina, masina, deformari rezultate in urma accidentelor usoare, deformari masina"></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <div id="home">
        <FirstSection mainHeading={"Redivivus Auto Rutiere"}
          subHeading={"Reparatii PDR ( paintless dent repair )"}
          description={"Reparatii lovituri de grindina si deformari rezultate in urma accidentelor usoare"} />
      </div>
      <VideoPlayer />
      <div id="servicii">
        <ServicesComponent />
      </div>
      <ImageCarousel />
      <div id="istoric">
        <Istoric />
      </div>
      <div id="avantaje">
        <Avantaje />
      </div>
      <div id="parteneri">
        <Partners />
      </div>
      <div id="contact">
        <CallToAction />
      </div>
      <Footer />
    </Fragment>
  )
}

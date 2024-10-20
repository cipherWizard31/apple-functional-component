import './App.css'
import { Header } from './components/Header';
import { Alert } from './components/Alert';
import { FirstSection } from './components/firstSection';
import { SecondSection } from './components/secondSection';
import { ThirdSection } from './components/THirdSection';
import { FourthSection } from './components/FourthSection';
import { FifthSection } from './components/FifthSection';
import { SixthSection } from './components/SixthSection';
import { Footer } from './components/Footer';
import Youtube from './components/YoutubeVideos'

function App() {


  return (
    <>
      <Header/>
      <Alert/>
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Youtube/>
      <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import FormSection from './components/form/FormSection';
import CardsGridSection from './components/card/CardsGridSection';
import ContactMe from './components/form/ContactMe';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // <img src="https://dxw9jueyijhmn.cloudfront.net/ez_website/frontend_img/CommonImages/logo.webp" alt="" />

  return (
    <>
      <div className='parent__container'>
        <FormSection />
        <CardsGridSection />
        <div className='contact__me__mobile__view'>
          <ContactMe />
        </div>
      </div>
    </>
  )
}

export default App

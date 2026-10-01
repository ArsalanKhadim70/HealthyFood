import React from 'react'
import Home from "../src/Pages/Home.jsx"
import About from '../src/Pages/About.jsx'
import OurServices from '../src/Pages/OurServices.jsx'
import OurAdvantage from '../src/Pages/OurAdvantage.jsx'
import OrowthPlan from '../src/Pages/OrowthPlan.jsx'
import Advantage from '../src/Pages/Advantage.jsx'
import CustumerStore from '../src/Pages/CustumerStore.jsx'
import AskQuestion from '../src/Pages/AskQuestion.jsx'
import Transform from '../src/Pages/Transform.jsx'
import Footer from './Compountes/Footer.jsx'
import WhatsAppLogo from '../src/assets/images/WhatsApp_Logo.png'

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Home />
      {/*WhatsApp Logo  */}
      <a
        href="#https://wa.me/YOUR_PHONE_NUMBER" 
        className="fixed right-4 bottom-4 md:right-10 md:bottom-6 lg:right-20 lg:bottom-8 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 z-[9999] transition-transform duration-200 hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={WhatsAppLogo}
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </a>

      <About />
      <OurServices />
      <OurAdvantage />
      <OrowthPlan />
      <Advantage />
      <CustumerStore />
      <AskQuestion />
      <Transform />
      <Footer />

    </div>
  )
}

export default App
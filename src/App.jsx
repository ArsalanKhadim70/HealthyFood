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

const App = () => {
  return (
    // <div className="px-4 sm:px-6 md:px-8 lg:mx-[10%]">
    <div className="mx-4 sm:mx-[10%]">
      <Home />
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
/* eslint-disable no-unused-vars */

import './App.css'
import About from './components/About'
import Branding from './components/Branding'
import Header from './components/Header'
import Service from './components/Service'
import img1 from './assets/pen-to-square.png'
import img2 from './assets/cube.png'
import img3 from './assets/cog.png'
import img4 from './assets/ad.png'
import img5 from './assets/Rectangle 6.png'
import star from './assets/Star.png'
import rectangle from './assets/Rectangle 9.png'
import rectangle10 from './assets/Rectangle 10.png'
import Assessment from './assets/Assessment'
import Upscale from './components/Upscale'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const solutions =[
    {id:1, name:"Make a Quotation", desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit"},
    {id:2, name:"We Talk Back", desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit"},
    {id:3, name:"Brainstorming", desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit"},
    {id:4, name:"Get Up Your Brand", desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit"},
]
  const brandingServices = [
    { id: 1, img: img1, title: "Branding Strategy" },
    { id: 2, img: img2, title: "Brand Engagement" },
    { id: 3, img: img3, title: "Full Brand Awareness" },
    { id: 4, img: img4, title: "Digital Paid Advertising" }
];
const feedback = [
  { id: 1, img1: star, img2:rectangle, name: "Mr. John Doe", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", position:"CLIENTS" },
  { id: 2, img1: star, img2:rectangle, name: "Mr. John Doe", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", position:"CLIENTS" },
];
const quickLinks = [
  {id:1, name:"Home"},
  {id:2, name:"About Us"},
  {id:3, name:"Our Service"},
  {id:4, name:"Projects"},
];
const usefulLinks = [
  {id:1, name:"Privacy Policy"},
  {id:2, name:"Disclaimer"},
  {id:3, name:"Terms & Condition"},
  {id:4, name:"GDPR"},
];
  return (
    <>
     <Header/> 
     <About/> 
     <Service/> 
     <Branding items={solutions} services={brandingServices}/>
     <Assessment/>
     <Upscale/>
     <Feedback feedbacks={feedback}/>
     <Contact rectangle/>
     <Footer links={quickLinks} usefulLinks={usefulLinks}/>
    </>
  )
}

export default App

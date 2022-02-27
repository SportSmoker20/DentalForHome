import React from 'react'
import HomeNavbar from '../sample/HomeNavbar'
import ContactMain from './ContactMain'
import '../../css/Contact.css'
import HomeFAQ from '../sample/HomeFAQ'
import HomeFooter from '../sample/HomeFooter'

function ContactUs() {
  return (
    <div className='contact-us-container'>
        <HomeNavbar tabName={'contact'} />
        <ContactMain />
        <HomeFAQ />
        <HomeFooter />
    </div>
  )
}

export default ContactUs
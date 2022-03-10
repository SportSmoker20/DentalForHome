import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall, IoMdMail } from "react-icons/io";
import Faq from "react-faq-component";
import '../../css/Contact.css'
const data = {
  rows: [
    {
      title: "How do I contact Dental for Home for any queries?",
      content: `To contact us, you can either complete the form in the Contact Us section or you can call at our toll-free number. It’s a free service!`,
    },
    {
      title: "What is your office address and phone number?",
      content: "Currently our office is located in \n phone number: 0123456789",
    },
    {
      title: "In which location do Dental for Home serves?",
      content: `We are already serving 19 locations in Delhi NCR and soon be expanding our facilities to other places as well.`,
    },

    {
      title: "What are your hours of operation?",
      content: `Our website is open 24 hours a day, 7 days a week. Call Centre support is available from Monday to Saturday, 08:30 am to 09:00 pm IST and on Sunday's from 09:00 am - 05:00 pm IST.`,
    }
  ],
};
const styles = {
  titleTextColor: "grey",
  rowTitleColor: "rgb(81, 82, 82)",
  rowContentColor: "rgb(184, 177, 177)",
  arrowColor: "rgb(4,64,102)",
};
const config = {
  animate: true,
  arrowColor: "rgb(4,64,102)",
  tabFocus: true,
};

function ContactMain() {
  return (
    <div className="contact-main-container">
      <div className="contact-submain-container">
        <div className="contact-left">
          <div className="contact-left-left">
            <div className="contact-left-right-top-img">
              <img
                src="https://dentalforhome.s3.amazonaws.com/images/contact.png"
                alt="Couldn't Load!"
                style={{ height: `300px`, width: `375px` }}
              />
            </div>
            <div className="contact-left-title">
              <p>Contact Us</p>
            </div>
            <div className="contact-left-subtitle">
              <p>We are here for you! How can we help?</p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone Number" />
              <textarea
                type="textarea"
                placeholder="Go ahead, we are listening....."
                rows={9}
              />
            </div>
          </div>
          <div className="contact-left-right">
            <div className="contact-left-right-top">
              <img
                src="https://dentalforhome.s3.amazonaws.com/images/contact.png"
                alt="Couldn't Load!"
                style={{ height: `300px`, width: `375px` }}
              />
            </div>
            <div className="contact-left-right-bottom">
              <div className="contact-access">
                <HiLocationMarker
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>Delhi, India</p>
              </div>
              <div className="contact-access">
                <IoIosCall
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>+91 12345 12345</p>
              </div>
              <div className="contact-access">
                <IoMdMail
                  style={{
                    height: `30px`,
                    width: `30px`,
                    color: `rgb(4,64,102)`,
                  }}
                />
                <p>contact@dentalforhome.com</p>
              </div>
            </div>
            {/* <div className="contact">
              <Faq data={data} styles={styles} config={config} />
            </div> */}
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-icon">
            <BsFacebook
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <RiInstagramFill
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <BsLinkedin
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
          <div className="contact-right-icon">
            <BsTwitter
              style={{ height: `27px`, width: `27px`, color: `white` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;

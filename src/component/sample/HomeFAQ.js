import React from "react";
import Faq from "react-faq-component";

function HomeFAQ() {
  const data = {
    rows: [
      {
        title: "How do I contact Dental for Home for any queries?",
        content: `To contact us, you can either complete the form in the Contact Us section or you can call at our toll-free number. It’s a free service!`,
      },
      {
        title: "What is your office address and phone number?",
        content:
          "Currently our office is located in \n phone number: 0123456789",
      },
      {
        title: "In which location do Dental for Home serves?",
        content: `We are already serving 19 locations in Delhi NCR and soon be expanding our facilities to other places as well.`,
      },

      {
        title: "What are your hours of operation?",
        content: `Our website is open 24 hours a day, 7 days a week. Call Centre support is available from Monday to Saturday, 08:30 am to 09:00 pm IST and on Sunday's from 09:00 am - 05:00 pm IST.`,
      },
      {
        title: "Is the first consultation always free?",
        content:
          "Yes, at dental for home your first video consultation with us is free.",
      },
      {
        title: "Is digital/remote consultation as effective as when one physically visits a dentist?",
        content: `Yes, absolutely, if your case is special or requires a visit we will do that for you. Though treatments will be given at your home only.`,
      },
      {
        title: "Can I directly have dentist at my home without video consultation?",
        content: `No, video consultation will be the first step in the process. Depending on your problems our dental expert team will come and serve you.`,
    },
    {
        title: "Where can I express my opinions if I am not satisfied?",
        content:
            "You can reach out to our dental office directly, call us on +91 0123456789, or WhatsApp us on +91 0123456789. \n Every customer is equally important for us and we will offer a quick resolution to your concern.",
    },
    {
        title: "Are there any things that I will get other than my treatments?",
        content: `Yes definitely, at dental for home we provide gifts and vouchers in the form of free medicines and dental aids depending on the service you applied for. As we want every customer to have big smile on their face after the treatment.`,
    },
    {
        title: "How can I save more cost in terms of dental services?",
        content: `At dental for home, we provide a wide range of services at almost 50% off. We have special plan that will take care of your family needs and it has less cost. This is because we do not charge high referral commissions to get you the right specialist. Thus, Best quality treatment with cost optimization.`
    }
   
    ],
  };
  const styles = {
    // bgColor: 'white',
    titleTextColor: "grey",
    rowTitleColor: "rgb(81, 82, 82)",
    rowContentColor: "rgb(184, 177, 177)",
    arrowColor: "rgb(4,64,102)",
  };
  const config = {
    animate: true,
    // arrowIcon: "V",
    arrowColor: "rgb(4,64,102)",
    tabFocus: true,
  };

  return (
    <div id="home-faq" className="faq-container">
      <div className="faq-title">
        <p>FAQ</p>
      </div>
      <div className="faq-content">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default HomeFAQ;

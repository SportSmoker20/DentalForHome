import React from "react";
import AboutTeamCard from "../about/AboutTeamCard";


function ContactTeam() {
  const teamData = [
    {
      id: 0,
      office: 'USA Office',
      address: " 16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex, USA",
      mobile: " +1 518 660 1020",
      email: " info@holisticbiocon.com"
    },
    {
      id: 1,
      office: 'NEW YORK',
      address: "447 Broadway, 2nd FL #129 New York, NY 10013 USA",
      mobile: " +1 518 660 1020",
      email: " info@holisticbiocon.com"
    },
    {
      id: 2,
      office: 'LONDON Office',
      address: " 56 Fulham High Street, London SW6 3LQ, UNITED KINGDOM",
      mobile: "+44 7443 812753",
      email: " info@holisticbiocon.com"
    },
    {
      id: 3,
      office: 'SINGAPORE Office',
      address: "111 North Bridge Road, #27-01, Peninsula Plaza, Singapore 179098",
      mobile: "+44 7443 812753",
      email: " info@holisticbiocon.com"
    }
  ];

  return (
    <div className="about-team-container">
      <div className="about-team-title">
        <p>Our Team</p>
      </div>
      <div className="team-content">
        {teamData.map((data, key) => (
          <AboutTeamCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default ContactTeam;

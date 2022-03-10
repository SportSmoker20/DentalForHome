import React from "react";
import "../../css/Sidebar.css";
import "../../css/NewPlan.css";

function PlanCard(props) {
  // return (
  //   <div style={{backgroundImage:`url(props.imgSrc))`}} className="plan-card">
  //     <div className="plan-card-upper">
  //       <div className="plan-card-profile">
  //         {/* <img src={image} className='profile-image'/> */}
  //         <div className="plan-card-image">
  //           <div className="plan-card-image-inner" />
  //         </div>
  //         <div className="plan-card-name">
  //           <p className="plan-card-name-text"><label style={{fontWeight:`bold`}}>J</label>essjjjjon <label style={{fontWeight:`bold`}}>G</label>eorge</p>
  //           <p className="plan-card-name-id">Member ID - xxxxxxxxxx</p>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="plan-card-lower">
  //       <div className="plan-card-detail-up">
  //         <p><label style={{fontWeight:`bold`}}><label style={{fontSize:`20px`}}>P</label>lan type -</label> Individual</p>
  //         <p><label style={{fontWeight:`bold`}}><label style={{fontSize:`20px`}}>V</label>alid from -</label> Jan 21,2022</p>

  //       </div>
  //       <div className="plan-card-detail-down">
  //       <p className="plan-card-gender"><label style={{fontWeight:`bold`}}><label style={{fontSize:`20px`}}>G</label>ender -</label> Male</p>
  //       <p className="plan-card-valid"><label style={{fontWeight:`bold`}} ><label style={{fontSize:`20px`}}>V</label>alid upto -</label> Jan 21/02/2022</p>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="new-plan-card-container">
      <div className="new-plan-card-img-container">
        <div className="new-plan-card-img"></div>
      </div>
      <div className="
      ">
        <div className="new-plan-card-content-top">
          <div className="new-card-content-top-title">
            <p>{props.data.name}</p>
          </div>
          <div className="new-card-content-top-subtitle">
            <label>Member Id : </label>
            <p> {props.data.memberId}</p>
          </div>
        </div>
        <div className="new-plan-card-content-bottom">
        <div className="new-plan-card-content-bottom-label">
            <label>Gender :   </label>
            <p>{props.data.gender}</p>
          </div>
          <div className="new-plan-card-content-bottom-label">
            <label>Plan Type  :   </label>
            <p>{props.data.planType}</p>
          </div>
          
          <div className="new-plan-card-content-bottom-label">
            <label>Valid From:   </label>
            <p>{props.data.validFrom}</p>
          </div>
          <div className="new-plan-card-content-bottom-label">
            <label>Valid Upto:   </label>
            <p>{props.data.validTo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;

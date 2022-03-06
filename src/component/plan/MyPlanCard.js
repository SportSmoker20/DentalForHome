import React from 'react';
import PlanCard from './PlanCard';
// import '../../css/Plan.css'
import '../../css/NewPlan.css'
import Offer from './Offer';

function MyPlanCard() {

  const data = [
   {
    name: "Prakhar Kapoor",
    memberId: "JG022201",
    planType: "Individual",
    gender: "Male",
    validFrom: "Jan 21,2022",
    validTo: "Jan 21,2022"
   }

  ]
  const offerData = [
    {
      value: "30%"
    }
  ]

  return (
      // <div className='my-plan-card'>
      //   {/* <PlanCard /> */}
      //   <div className='plan-card-offer'/>
      // </div>
      <div className='new-plan-container'>
        <div className='new-plan-top'><p>Your Plan</p></div>
        <div className='new-plan-container-inner'>
        <div><PlanCard data={data[0]}/></div>
        <div><Offer data={offerData[0]}/></div>
        </div>
      </div>
  );
}

export default MyPlanCard;

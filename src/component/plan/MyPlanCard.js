import React from 'react';
import PlanCard from './PlanCard';
import '../../css/Plan.css'

function MyPlanCard() {
  return (
      <div className='my-plan-card'>
        <PlanCard />
        <div className='plan-card-offer'/>
      </div>
  );
}

export default MyPlanCard;

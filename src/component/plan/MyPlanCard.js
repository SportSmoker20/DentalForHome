import React from 'react';
import PlanCard from './PlanCard';
import '../../css/Plan.css'
import family1 from '../../images/floss.svg'

function MyPlanCard() {
  return (
      <div className='my-plan-card'>
        <PlanCard />
        <div className='plan-card-offer'/>
      </div>
  );
}

export default MyPlanCard;

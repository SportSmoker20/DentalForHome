import React from 'react';
import Banner from '../dashboard/Banner';
import Navbar from '../dashboard/Navbar';
import Sidebar from '../sidebar/Sidebar'
import MyPlanCard from './MyPlanCard';

function MyPlan() {
  return (
      <div>
          <Sidebar />
          <Navbar />
          <Banner />
          <MyPlanCard />
      </div>
  );
}

export default MyPlan;

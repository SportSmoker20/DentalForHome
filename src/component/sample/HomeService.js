import React from 'react'
import HomeServiceCard from './HomeServiceCard'

function HomeService() {

    const serviceData = [
        {
            id: 0,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 1,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 2,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 3,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 4,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        }, {
            id: 5,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 6,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        },
        {
            id: 7,
            img: 'abc',
            title: 'Regular dental checkups',
            content: 'During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.'
        }
    ]

  return (
    <div id='home-service' className='home-service-container'>
        <div className="service-title">
        <p>Our Services</p>
      </div>
      <div className="service-content">
        {serviceData.map((data, key) => (
            <HomeServiceCard data={data} />
        ))}
      </div>
    </div>
  )
}

export default HomeService
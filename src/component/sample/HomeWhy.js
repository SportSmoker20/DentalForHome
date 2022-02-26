import React from 'react'
import img1 from '../../images/bookingIcon.png'
import WhyCard from './WhyCard'

function HomeWhy() {

    const whyData = [
        {
            id: 0,
            img: img1,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum.'

        },
        {
            id: 1,
            img: img1,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum.'

        },
        {
            id: 2,
            img: img1,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum.'

        },
        {
            id: 3,
            img: img1,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum.'

        },
    ]

  return (
    <div className='home-why-container'>
        <div className='why-left'>
            <div className='why-title'>
                <p>Why Dental for Home?</p>
            </div>
            <div className='why-content'>
            <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.</p>
            </div>
        </div>
        <div className='why-right'>
            {whyData.map((data,key)=>(
                <WhyCard data={data}/>
            ))}
        </div>
    </div>
  )
}

export default HomeWhy
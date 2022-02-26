import React from 'react'
import img1 from '../../images/character1.svg'
import HappySmileCard from './HappySmileCard'

function HomeHappySmile() {

    const happySmileData = [
        {
            id: 0,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
            img: img1,
            name: 'Sanjeev Kumar',
            role:'Jobless at jobless'
        },
        {
            id: 1,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
            img: img1,
            name: 'Sanjeev Kumar',
            role:'Jobless at jobless'
        },
        {
            id: 2,
            content: 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quoerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.',
            img: img1,
            name: 'Sanjeev Kumar',
            role:'Jobless at jobless'
        }
    ]

  return (
      <div className='happy-smiles-main'>
      <div className='happy-smiles-title-main'>
          <p>Happy Smiles</p>
      </div>
    <div className='happy-smiles-container'>
        {happySmileData.map((data,key)=>(
            <HappySmileCard data={data}/>
        ))}
    </div>
    </div>
  )
}

export default HomeHappySmile
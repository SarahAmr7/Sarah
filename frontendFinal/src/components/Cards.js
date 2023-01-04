import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import crs1 from './HTML5.jpg' 
import crs2 from './microprocessors.jpg'
import crs3 from './UI.jpg'
//import img1 from 'C:\Users\omrhs\react-website-yt-1\src\img9.jpg'

function Cards() {
    return (
        <div className='cards'>

            <h1>CHECK OUT OUR TRENDING COURSES!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                        src= {crs1}
                        text="explore the hidden waterfalls fel amazon we keda 3ayez akabar el text size fa please dont mind me "
                        label='HTML 5'
                        path='/services'
                        />
                         <CardItem
                        src= {crs2}
                        text="explore the hidden waterfalls fel amazon we keda 3ayez akabar el text size fa please dont mind me "
                        label='MICROPROCESSORS'
                        path='/services'
                        />
                         <CardItem
                        src= {crs3}
                        text="explore the hidden waterfalls fel amazon we keda 3ayez akabar el text size fa please dont mind me "
                        label='UI/UX'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

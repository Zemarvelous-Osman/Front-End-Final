import React, {useState} from 'react'
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import './popup.css'

const Popup = () => {

const [image, setImage] = useState(thumbnail1)
const onClick = () => {


}


  return (

    <div id='pop-up'>
      <img className='popup-image' src={image} alt='shoe image' />

      <button onClick={() => setImage(thumbnail1)}></button>
      <button onClick={() => setImage(thumbnail2)}></button>
      <button onClick={() => setImage(thumbnail3)}></button> 
      <button onClick={() => setImage(thumbnail4)}></button>   
      </div>
  )
}

export default Popup
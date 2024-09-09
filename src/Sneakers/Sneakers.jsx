import React, {useState} from 'react'
import './Sneakers.css'
import image from '../assets/image-product-1.jpg'
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import profile from '../assets/image-avatar.png'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import cart from '../assets/icon-cart.svg'
import Popup from '../PopUp/popup'


const Sneakers = () => {

const [ count, setCount] = useState(0)

const handleCountInc = () =>{
  setCount(count + 1)
}
 
const handleCountDec = () => {
  setCount( count - 1)
}


  return (
    <div id='container'>
      
      <Popup/>
     
      <div id='header'>
          <div id='menu'>
          <img className='menuicon' src={menu} alt='menuicon'></img>
          </div>
        <div id='logo'>
        <img className='logo' src={logo} alt='sneakers logo'></img>
        </div>
        <nav id='nav-bar'>
          <div>Collections</div>
          <div>Men</div>
          <div>Women</div>
          <div>About</div>
          <div>Contact</div>

        </nav>
        
        <div>
          <img className='cart' src={cart} alt='shopping cart'></img>
        </div>
        <div>
          <img className='profileicon' src={profile}></img>
        </div>
        

      </div>

      <div id='linebreak'></div>

      <div id='center'>

        <div id='center-left'>
          <div id='large-shoe'>


            <img className='image1' src={image}></img>


          </div>
          <div id='small-shoe'>
            <div>
              <img className='small-shoe' src={thumbnail1} alt='shoe image' onClick='setImage'></img>
            </div>
            <div>
              <img className='small-shoe' src={thumbnail2} alt='shoe image'></img>
            </div>
            <div>
              <img className='small-shoe' src={thumbnail3} alt='shoe image'></img>
            </div>
            <div>
              <img className='small-shoe' src={thumbnail4} alt='shoe image'></img>
            </div>
          </div>

        </div>


        <div id='center-right'>
          <h3>Sneaker Company</h3>
          <h1>Fall Limited Edition <br></br>Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Faeturing a durable rubber outer sole, they'll withstand everything the weather  can offer.</p>

          <h2> $125.00  <span>50%</span> </h2>
          <p id='original-price'>$250.00</p>


          <div id='buttons'>
          <button id='counter-button' onClick={handleCountDec}>
          <img className='minus' src={minus}></img>
             </button>

          <p id='counter'> {count} </p>
          

          <button id='counter-button' onClick={handleCountInc}>
          <img className='plus' src={plus}></img>
          </button>

          
          <button id='add-to-cart' >Add To Cart</button>
          </div>
        </div>


      </div>

    </div>
  )

  {console.log()}
}

export default Sneakers
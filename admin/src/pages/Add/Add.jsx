import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {

  const [image, setImage] = useState(false)
  const[data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  return (
    
    <div className='add'>
        <form className='form-col'>
            <div className='add-img-upload form-col'>
                <p>Upload Image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required />
            </div>

            <div className='add-product-name flex-col'>
                  <p>Product Name</p>
                  <input type='text' name='name' placeholder='Type here' />
            </div>

            <div className='add-product-description flex-col'> 
                <p>Product description</p>
                <textarea name='description' rows='6' placeholder='Write content here'>   </textarea>
            </div>

            <div className='add-category-price'>
                <div className='add-category flex-col'>
                  <p>Product Category</p>
                  <select name='category'>
                    <option value="">Salad</option>
                    <option value="">Rolls</option>
                    <option value="">Deserts</option>
                    <option value="">Sandwich</option>
                    <option value="">Cake</option>
                    <option value="">Pure Veg</option>
                    <option value="">Pasta</option>
                    <option value="">Noodles</option>
                  </select>
                </div>

                <div className='add-price flex-col'>
                  <p>Product price</p>
                  <input type='Number' name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add

import React, { useState } from 'react'
import './Form.css'
import memesData from '../../memesData'

const Form = () => {

    // create state
    const [memeImage, setMemeImage] = useState("");

    // create a function that will randomly get a meme image
    // and render that meme image
    const getMemeImage = () => {
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url;
      setMemeImage(url);
    }


  return (
    <div>
      <div className='formWrapper'>
        <div className="formGroup">
            <label htmlFor="topText" className='top'>Top text</label>
            <input type="text" id='topText' name='topText'/>
        </div>
        <div className="formGroup2">
            <label htmlFor="bottomText" className='bottom'>Bottom text</label>
            <input type="text" id='bottomText' name='bottomText'/>
        </div>
        <button onClick={getMemeImage}>Get a new meme image  🖼</button>
        <img src={memeImage} className='meme-image'/>
      </div>
    </div>
  )
}

export default Form

import React, { useState } from 'react'
import './Form.css'
import memesData from '../../memesData'

const Form = () => {

    // create state to hold an object
    const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: ""
    })

    // create state to hold all the meme data
    const [allMemeImages, setAllMemeImage] = useState(memesData)

    // create a function that will randomly get a meme image
    // and render that meme image
    const getMemeImage = () => {
      const memesArray = allMemeImages.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url;
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          randomImage: url
        }
      })
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
        <img src={meme.randomImage} className='meme-image'/>
      </div>
    </div>
  )
}

export default Form

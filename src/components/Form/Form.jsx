import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
      <form action="" className='formWrapper'>
        <div className="formGroup">
            <label htmlFor="topText" className='top'>Top text</label>
            <input type="text" id='topText' name='topText'/>
        </div>
        <div className="formGroup2">
            <label htmlFor="bottomText" className='bottom'>Bottom text</label>
            <input type="text" id='bottomText' name='bottomText'/>
        </div>
        <button>Get a new meme image  🖼</button>
      </form>
      <div className='meme'></div>
    </div>
  )
}

export default Form

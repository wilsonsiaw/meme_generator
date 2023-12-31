import React from 'react'

const Form = () => {
  return (
    <div className='formWrapper'>
      <form action="">
        <label htmlFor="topText" >Top text</label>
        <input type="text" id='topText' name='topText'/>
        <label htmlFor="bottomText" >Bottom text</label>
        <input type="text" id='bottomText' name='bottomText'/>
        <button>Get a new meme image  🖼</button>
      </form>
      <div className='meme'></div>
    </div>
  )
}

export default Form

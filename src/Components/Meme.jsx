import { useState } from 'react'

import memesData from '../memesData.js'

function Meme() {

    // const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

  return (
    <main>
        <div className="form">
            <input type="text" className="form-input" placeholder="Top text"/>
            <input type="text" className="form-input" placeholder="Bottom text"/>
            <button type="button" onClick={getMemeImage} className="form-btn">Generate meme</button>
        </div>
        <div className="meme">
            <div className='meme-img-div'>
            <img src={meme.randomImage} className='meme-image' alt="" />
            </div>
            <h2 className="meme-text top">One does not simply</h2>
            <h2 className="meme-text bottom">Walk into Mordor</h2>

        </div>
    </main>
  )
}

export default Meme
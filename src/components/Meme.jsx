import memesData from "../memesData"
import { useState } from "react";

export default function Meme(){

   //const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg');
   const [meme, setMeme] = useState({
      topText: "Top",
      bottomText: "Bottom",
      randomImage: "http://i.imgflip.com/1bij.jpg"
   })



   const [allMemeImages, setAllMemeImages] = useState(memesData)

   function handleChange(e){
      const{name, value, type}=e.target
      setMeme(prevMeme => {
           return{
          ...prevMeme,
          [name]: value
      }
  })
  }

   function getmemeImage() {
      let list = memesData.data.memes
      let memeImage = list[Math.floor((Math.random()*list.length))]
      setMeme({
         ...meme,
         randomImage: memeImage.url
      })
   }

   return (
      <main>
         <div className="form">
         <input 
            className="form--input" 
            type='text' 
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            ></input>
         <input 
            className="form--input" 
            type='text' 
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            ></input>
         <button
            onClick={getmemeImage} 
            className="form--button" 
            >Get a new meme image 🖼</button>
         </div>
         <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </main>

   )
}
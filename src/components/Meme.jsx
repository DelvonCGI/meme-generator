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
         <input className="form--input" type='text' placeholder="Top text"></input>
         <input className="form--input" type='text' placeholder="Bottom text"></input>
         <button onClick={getmemeImage} className="form--button" value='Get a new meme image'>Get a new meme image 🖼</button>
         </div>
         <img src={meme.randomImage} className="meme--image" />
         <span className="toptext--text">{meme.topText}</span>
         <span className="bottomtext--text">{meme.bottomText}</span>
      </main>

   )
}
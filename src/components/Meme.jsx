import memesData from "../memsData"

export default function Meme(){
   function handleOnClick() {
      let list = memesData.data.memes
      let item = list[Math.floor((Math.random()*list.length))]
      console.log(item.url)
   }

   return (
      <main>
         <div className="form">
         <input className="form--input" type='text' placeholder="Top text"></input>
         <input className="form--input" type='text' placeholder="Bottom text"></input>
         <button onClick={handleOnClick} className="form--button" value='Get a new meme image'>Get a new meme image 🖼</button>
         </div>
      </main>

   )
}
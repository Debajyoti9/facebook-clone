import { Avatar } from '@material-ui/core'
import React,{ useState } from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'

import PhotoLibaryIcon from '@material-ui/icons/PhotoLibrary'

import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'


function MessageSender() {
    const [{user},dispatch] = useStateValue();
     const [input,setInput] = useState("")
     const [imageURL,setImageURl] = useState("")
     console.log('input value is',input)

  const handleSubmit = e =>{
       e.preventDefault();

       db.collection('posts').add({
           message:input,
           timestamp:firebase.firestore.FieldValue.serverTimestamp(),
           profilePic:user.photoURL,
           username:user.displayName,
           image:imageURL
       })

       setInput("");
       setImageURl("")
  }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
             <Avatar src={user.photoURL}/>
             <form>

               <input 
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                className="messageSender__input"
               type="text" placeholder={`What's on your mind ${user.displayName}?`}/>
               <input 
                value = {imageURL}
                onChange = {(e) => setImageURl(e.target.value)}
               type="text" placeholder="Image Url(optional)"/>

              <button onClick={handleSubmit} type="submit">Hidden Submit</button>

             </form>
               


            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style ={{color: "red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibaryIcon style ={{color: "green"}} />
                    <h3>photo/video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmotionIcon style ={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender

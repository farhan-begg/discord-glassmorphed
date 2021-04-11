import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import './Chat.css'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase'
function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    console.log(channelId, channelName)

    useEffect(() => {

        if (channelId){
            // GO into db channels and collection of messages 
            // order messages by time stamp 
            // get real time snapchot and 
            // map set messages and grab doc data
            db
            .collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data())) 
            
            );
        }
    }, [channelId])


    const sendMessage = e => {
        // to prevent refresh everytime message is sent in chat
        e.preventDefault();

        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        })
        // sets input black after submit
        setInput("")
    }


    



    return (
        
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    
                    
                    
                    />
                ))}

            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input 
                        disabled={!channelId} 
                        value={input} 
                        onChange={e => setInput(e.target.value)}  
                        placeholder={`Message #${channelName}`} />

                    <button 
                        className="chat__inputButton" 
                        type="submit" 
                        disabled={!channelId} 
                        onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large"/>

                </div>



            </div>
        </div>
    )
}

export default Chat

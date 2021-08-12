import { React, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    
    return (
        <ChatEngine
            height ="100vh"
            projectID = "d412f481-9537-4273-898b-9e01dfcdea1d"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}  
            renderChatFeed = { (chatAppProps)=><ChatFeed {...chatAppProps} /> }
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function ChatScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = false;
        if (!checkLogin) {
            navigate('/login');
        }
    })

    return (
        <div className='chat-view'>
            <h1>Chat view</h1>
        </div>
    );
}

export default ChatScreen;

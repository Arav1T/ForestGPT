import axios from 'axios';
import React, { useState } from 'react'
import 'openai'
import ForestNavbar from './ForestNavbar';

export default function ForestCustom() {
    const [userInput, setUserInput] = useState('');
    const [chatLog, setChatLog] = useState([]);
  
    const sendMessageToChatGPT = async (message) => {
      try {
        console.log('hello')
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          
              'Content-Type: application/json',
              'Authorization: Bearer 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',
          {
            'model': "text-davinci-003",
            'prompt': message,
            'max_tokens': 50,
            // "model": "gpt-3.5-turbo",
            // "messages": [{"role": "system", "content": "You are a helpful assistant."}, {"role": "user", "content": "Hello!"}],
            'temperature': 0.7,
          }
        );
        const reply = response.data.choices[0].text.trim();
        console.log(reply)
        setChatLog((prevChatLog) => [...prevChatLog, { role: 'system', content: message }, { role: 'user', content: reply }]);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleUserInput = (event) => {
      setUserInput(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const userMessage = userInput.trim();
      if (userMessage !== '') {
        setChatLog((prevChatLog) => [...prevChatLog, { role: 'user', content: userMessage }]);
        sendMessageToChatGPT(userMessage);
        setUserInput('');
      }
    };
  
    return (
      <div>
      <ForestNavbar/>
        
       <div className="bg-login bg-no-repeat  bg-login flex items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/128828.jpg')]    ">
       <div className='space-y-2'>
       <form onSubmit={handleFormSubmit} className='flex'>
          <input type="text" value={userInput} onChange={handleUserInput} className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          <button className="bg-gray-500 hover:shadow-lg hover:shadow-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
          Send
        </button>
        </form>
        <div className="chat-log bg-emerald-200 space-y-2">
          {chatLog.map((message, index) => (
            <div key={index} className={`message ${message.role} bg-emerald-300 border-b `}>
              {message.content}
            </div>
          ))}
        </div>
       </div>
       </div>
      </div>
    );
  };

  
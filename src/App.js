import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) return <LoginForm /> 

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="e56130ec-1ee1-4154-b36d-92b147b9078a"
        userName="john"
        userSecret="qwerty"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps }  />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;

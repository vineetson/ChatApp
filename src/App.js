import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="e56130ec-1ee1-4154-b36d-92b147b9078a"
        userName="john"
        userSecret="qwerty"
      />
    </div>
  );
}

export default App;

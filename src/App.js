import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="bf1976d2-8a0f-4cd0-af35-96db27a3d8ed"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;
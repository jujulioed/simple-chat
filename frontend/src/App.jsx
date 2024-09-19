import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatScreen from './components/ChatScreen/ChatScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import logo from './logo.svg';
import home from '../src/assets/Home.jpg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageChatOne from './pages/PageChatOne';
import PageChatTwo from './pages/PageChatTwo';
import PageChatThird from './pages/PageChatThird';
import PageChatFour from './pages/PageChatFour';
import PageChatFive from './pages/PageChatFive';
import PageChatSix from './pages/PageChatSix';
import PageChatSeven from './pages/PageChatSeven';
import PageChatEight from './pages/PageChatEight';
import PageChatNine from './pages/PageChatNine';
import PageChatTen from './pages/PageChatTen';
import PageChatEleven from './pages/PageChatEleven';
import PageChatTwelve from './pages/PageChatTwelve';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="PageChatOne"     element={<PageChatOne/>}/>
              <Route path="PageChatTwo"     element={<PageChatTwo/>}/>
              <Route path="PageChatThird"   element={<PageChatThird/>}/>
              <Route path="PageChatFour"    element={<PageChatFour/>}/>
              <Route path="PageChatFive"    element={<PageChatFive/>}/>
              <Route path="PageChatSix"     element={<PageChatSix/>}/>
              <Route path="PageChatSeven"   element={<PageChatSeven/>}/>
              <Route path="PageChatEight"   element={<PageChatEight/>}/>
              <Route path="PageChatNine"    element={<PageChatNine/>}/>
              <Route path="PageChatTen"     element={<PageChatTen/>}/>
              <Route path="PageChatEleven"  element={<PageChatEleven/>}/>
              <Route path="PageChatTwelve"  element={<PageChatTwelve/>}/>
          </Routes>
      </BrowserRouter>
  ); 
}
export default App;

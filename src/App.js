import React from 'react';
import Statics from './Components/Statistics/Statistics';
import FriendsJson from './Components/Friends/Friends.json';
import Friendlist from './Components/Friends/FriendList.jsx';
import './Components/Friends/FriendList.css';
import './Components/Statistics/Statistics.css'
import './App.css';
import data  from './Components/Statistics/data.json';
import styled from 'styled-components';

const ListStyle=styled.ul`
  display: flex;
  padding: 0;
`

const StaticsDivStyle=styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  margin: 0 auto;
`
const TitleStyle=styled.p`
  text-align: center;
`
function App() {
  return (
    <>
      <Friendlist friends={FriendsJson}/>
      <StaticsDivStyle>
        <TitleStyle>UPLOAD STATS</TitleStyle>
        <ListStyle>
          {data.map((item,index)=>(
            <Statics stats={item} key={index}/>
          ))}
        </ListStyle> 
      </StaticsDivStyle>
    </>
  );
}

export default App;

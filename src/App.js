import React, { useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import styled from "styled-components";
import {ethers} from 'ethers';
import UserContext from "./contexts/UserContext";


const Page = styled.div`
background: #b0d820;
background: -webkit-linear-gradient(160deg, #b0d723 0%, #5ba93b 100%);
background: linear-gradient(160deg, #b0d820 0%, #5ba93b 100%);
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
min-height:100vh;
`;

const Row = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
`;

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setisConnected] = useState(false);
  
  async function connectWallet(){
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setCurrentAccount(accounts[0]);
      setisConnected(true)
    } else {
      alert("Install MetaMask");
    }
  }

  async function disconnect(){
      // setCurrentAccount(null);
      setisConnected(false)
  }

  useEffect(() =>{

  },[isConnected])



  return (
  <UserContext.Provider value={{connectWallet, currentAccount, isConnected, disconnect}}>
    <Page>
      <Header/>
      <Row>
        <Form/>
      </Row>
    </Page>
  </UserContext.Provider> 
  );
}

export default App;

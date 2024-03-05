import styled from "styled-components";
import { device } from "../device";
import clogo from '../assets/clogo.png';
import hlogo from '../assets/heralogo.svg';
import React,{ useContext} from "react";
import UserContext from '../contexts/UserContext';

const StyledHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
top: 0;
position:fixed;
background-color: white;
width: 100vw;
@media ${device.mobileL} {
    padding: 10px 30px;
}
`;
const StyledLogo1 = styled.img`
height: 35px;
@media ${device.mobileL} {
    height: 45px;
}
@media ${device.laptop} {
 height:65px;
}`;
const StyledLogo2 = styled.img`
height: 25px;
@media ${device.mobileL} {
    height: 35px;
}
@media ${device.laptop} {
    height: 50px;
}
`;
const ConnectButton = styled.button`
width: 100px;
font-family: 'Yantramanav-Bold';
filter: drop-shadow(2px 1px 2px rgba(0,0,0,.3));
background-color: #60ba61;
color: white;
font-size: 12px;
padding: 10px 2px;
border-radius: 4px;
border: none;
letter-spacing: .6px;
cursor: pointer;
outline: none;
transition: 0.2s all;
@media ${device.mobileL} {
    width: 150px;
    font-size: 15px;
}`;


const Header = () => {
    const { connectWallet, isConnected, currentAccount, disconnect} = useContext(UserContext)


    return(
        <StyledHeader>
            <StyledLogo1 src={clogo} alt="logo" />
            <StyledLogo2 src={hlogo} alt="logo" />
            {isConnected ? <ConnectButton id="submit" onClick={disconnect}>Disconnect</ConnectButton> :
             <ConnectButton id="submit" onClick={connectWallet}>Connect Wallet</ConnectButton>
            }
        </StyledHeader>
    )

}
export default Header;
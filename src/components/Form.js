import React, {useContext, useState} from 'react';
import styled from "styled-components";
import { device } from "../device";
import UserContext from '../contexts/UserContext';
import Modal from './Modal.js';

const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center!important;
padding: 10px 13px;
background-color: white;
border-radius: 10px;
margin: 65px 20px;
box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);  
-webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3); 
-moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
width:auto;
@media ${device.mobileM} {
    margin-top: 70px;
    padding: 15px 18px;
}
@media ${device.mobileL} {
    margin-top: 80px;
}
@media ${device.tablet} {
    padding: 15px 60px!important;
    margin-top: 100px;
}
@media ${device.laptop} {
    margin-top: 120px;
}
`;
const TitleSection = styled.div`
`;
const BalanceSection = styled.div`
`;
const InputSection = styled.div`
display: flex;
flex-direction: column;
justify-content:center;`;
const Col = styled.div`
display: flex;
flex-direction: column;
@media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
}`;
const Col2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;`;
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
const Row2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center`;
const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
height: 100%;
align-items: center;
padding-top: 40px;
@media ${device.tablet} {
    justify-content: flex-end;
    padding-top: 20px;
}`;
const StyledButton = styled.button`
width: 120px;
font-family: 'Yantramanav-Bold';
filter: drop-shadow(2px 1px 2px rgba(0,0,0,.3));
background-color: #60ba61;
color: white;
font-size: 15px;
padding:6px 2px;
border-radius: 4px;
border: none;
text-align: center;
letter-spacing: .6px;
margin-bottom: 5px;
text-decoration: none;
cursor: pointer;
outline: none;
transition: 0.2s all;
`
const Title = styled.h1`
font-size: 27px;
font-family: 'Yantramanav-Bold';
margin-bottom: 5px;
`;
const Title2 = styled.h2`
font-size: 23px;
margin-bottom: 8px;
font-family: "Yantramanav-Bold";
@media ${device.laptop} {
    margin-top: 15px;
    margin-bottom: 5px!important;
}`;
const NumberStyle = styled.h2`
color:#60ba61;
font-family: 'Yantramanav-Bold';
font-size: 30px;
margin-bottom: 0px;
margin-top: 0px;
@media ${device.tablet} {
    font-size: 40px;
}`;
const WarningStyle = styled.h2`
color:#60ba61;
font-family: 'Yantramanav-Bold';
font-size: 17px;
margin-bottom: 0px;
margin-top: 0px;
@media ${device.tablet} {
    font-size: 25px;
    margin-bottom: 19px;
}`;
const Desc = styled.h3`
font-size:14px;
@media ${device.mobileL} {
    font-size: 15px;
}`;
const StyleModal = styled.div`
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4); /* Overlay effect: translucent background: black w/ partial opacity */
z-index: 1; /* Overlay effect: positioned over other containers */
width: 100%; /* Full width */
height: 100%; /* Full height */
position: fixed; /* Fix position on the top-left corner*/
top: 0;
left: 0;
right:0;
overflow: auto; /* Enable scroll if needed */
color:black;
display:flex;
justify-content:center;
align-items:center;
`;
const FieldInput = styled.input`
height: 30px;
width:100%;
border: double 1.5px transparent;
border-radius: 2px;
background-image: linear-gradient(white, white), linear-gradient(30deg,#8eca7d , #cde768);
background-origin: border-box;
background-clip: padding-box, border-box;
@media ${device.tablet} {
    width: 285px;
    
}
`;

const Form = () => {
    const { currentAccount, isConnected} = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState('')
    const [sender, setSender] = useState('')
    const [creator, setCreator] = useState('')
    const [amountETH, setAmountETH] = useState(0)
    const [socialURL, setSocialURL] = useState('')
    const [date, setDate] = useState('')
    const [numViews, setNumViews] = useState(0)
    const [numSubscribers, setNumSubscribers] = useState(0)
    const [numComments, setNumComments] = useState(0)
    const [radio, setRadio] = useState('')
    const [data, setData] = useState([])
    const fields = ['sender','creator','amountETH', 'socialURL','date','numViews','numSubscribers','numComments','radio']

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit clicked');
        setMsg('Successfully deployed at:')
        setOpen(true)
        let dataArray = []
        for(let i = 0; i<fields.length;i++){
            let obj = {}
            let name = eval(fields[i])
            obj[fields[i]] = name;
            dataArray.push(obj)
        }
        setData(dataArray)
    }
    const close = (open) => {
        console.log('Close clicked')
        setOpen(!open)
    }
    const reset = () => {
        console.log('Reset clicked')
        setSender('')
        setCreator('')
        setAmountETH(0)
        setSocialURL('')
        setDate('')
        setNumViews(0)
        setNumSubscribers(0)
        setNumComments(0)
        setRadio('')
        setOpen(!open)
    }

    return(
        <StyledCard>
            <TitleSection>
                <Title>Create Contractor</Title>
                <Desc style={{marginTop:'6px',color:'#090909'}}>The parties involved agree to the transfer of funds if the social performance metrics are reached.</Desc>
            </TitleSection>
            <BalanceSection>
                <Title2 style={{marginBottom: '0px'}}>Current Balance</Title2>
                {isConnected ? 
                    <NumberStyle>$5,000</NumberStyle> :
                    <WarningStyle>No wallet connected.</WarningStyle>
                }
            </BalanceSection>
            {open && 
            <StyleModal>
            <Modal msg={msg} close={close} setOpen={setOpen} reset={reset}/>
             </StyleModal> 
            }
            <form onSubmit={handleSubmit}>
            <Col>
                <InputSection>
                    <Title2>User Wallets</Title2>
                    <label>Sender</label>
                    <FieldInput className="field" type="text" name="sender" value={sender} onChange={(e)=> setSender(e.target.value)}/>
                    <label>Creator</label>
                    <FieldInput className="field" type="text" name="creator" value={creator} onChange={(e)=> setCreator(e.target.value)}/>
                </InputSection>
                <InputSection>
                    <Title2>Amount to Transfer</Title2>
                    <label># of ETH</label>
                    <FieldInput className="field" type="number" name="amountETH" value={amountETH} onChange={(e)=> setAmountETH(e.target.value)}/>
                    <label>Social Post URL</label>
                    <FieldInput className="field" type="text" name="socialURL" value={socialURL} onChange={(e)=> setSocialURL(e.target.value)}/>
                </InputSection>
            </Col>
            <Col>
                <InputSection>
                    <Title2>Date of Execution</Title2>
                    <label>(DD-MM-YYYY)</label>
                    <FieldInput className= "field" type="date" name="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
                    <Title2>Social Platform Oracle</Title2>
                    <Row>
                        <Col2>
                            <label>Tiktok</label>
                            <Row2>
                                <input type="radio" name="radio" value="tiktok" checked={radio === "tiktok"} onChange={(e)=> setRadio(e.target.value)}/>
                            </Row2>
                        </Col2>
                        <Col2>
                            <label>Youtube</label>
                            <Row2>
                            <input name="radio" type="radio" value="youtube" checked={radio === "youtube"} onChange={(e)=> setRadio(e.target.value)}/>
                            </Row2>
                        </Col2>
                        <Col2>
                            <label>Instagram</label>
                            <Row2>
                            <input name="radio" type="radio" value="instagram" checked={radio === "instagram"} onChange={(e)=> setRadio(e.target.value)}/>
                            </Row2>
                        </Col2>
                    </Row>
                </InputSection>
                <InputSection>
                    <Title2>Performance Metric</Title2>
                    <label># of Views</label>
                    <FieldInput className="field" type="number" name="numViews" value={numViews} onChange={(e)=> setNumViews(e.target.value)}/>
                    <label># of Subscribers</label>
                    <FieldInput className="field" type="number" name="numSubscribers" value={numSubscribers} onChange={(e)=> setNumSubscribers(e.target.value)}/>
                    <label># of Comments</label>
                    <FieldInput className="field" type="number" name="numComments" value={numComments} onChange={(e)=> setNumComments(e.target.value)}/>
                </InputSection>
            </Col>
            <Col>
                <InputSection>
                </InputSection>
                <ButtonContainer>
                    <StyledButton id="submit">Deploy</StyledButton>
                </ButtonContainer> 
            </Col>
            </form>
        </StyledCard>
         
    )

}
export default Form;
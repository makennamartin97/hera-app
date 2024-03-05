import React from "react";
import styled from "styled-components";
import { device } from "../device";

const StyledText = styled.div`
padding:10px;
margin-bottom:15px;
    @media ${device.tablet} {
        padding:10px;
        margin-bottom:10px;
    }
}`

const Modal = ({msg,reset, data}) => {

    return(
        <div id="modal-content">
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button onClick={(e) => reset(e)}>x</button>
            </div>
            <StyledText>
                <h3>{msg}</h3>
            </StyledText>
        </div>
    )

}
export default Modal;
import styled from "styled-components"
import planoIcon from '../assets/images/planoIcon.svg'
import userIcon from '../assets/images/userIcon.svg'
import React from "react"

export default function Header() {
    return(
        <>
            <Navibars>
                <img src={planoIcon} alt="plano"/>
                <img src={userIcon} alt="plano"/>
            </Navibars>
        </>
    )
}

const Navibars = styled.div`
    width: 100%;
    background-color: crimson;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    img:first-child {
        margin-top: 27px;
    }
    img {
        margin: 17px 37px;
    }

`
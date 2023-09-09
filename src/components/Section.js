import React from 'react'
import styled from 'styled-components'
// import Fade from 'react-reveal/Fade';

function Section(props) {

    let title = props.title

    return (
        <Wrap className='center' bgImages={props.backgroundImg}>


            <ItemText>
                <h1>{title}</h1>
                <p>{props.description} </p>
            </ItemText>


            <Buttons>

                <ButtonGroup>

                    <LeftButton>
                        {props.leftBtntext}

                    </LeftButton>

                    {props.rightBtntext &&

                        <RightButton>
                            {props.rightBtntext}

                        </RightButton>}





                </ButtonGroup>

                <DownArrow src='.\images\down-arrow.svg' />
            </Buttons>

        </Wrap>
    )
}




const Wrap = styled.div`
height: 100vh; 
width: 100vw;
background-image: ${(props) => `url("images/${props.bgImages}")`};
/* background-image: url('images/model-s.jpg') ; */
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`


const ButtonGroup = styled.div`
    display: flex;
margin-bottom: 30px;

@media (max-width:768px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`

background-color: rgba(23,26,32,0.8);
height: 40px;
width: 250px;
color: white;
border-radius:100px ;
display: flex;
justify-content: center;
align-items: center;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin:8px;
`


const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    display: flex;
    margin: auto;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s
`


const Buttons = styled.div`
    

`







export default Section


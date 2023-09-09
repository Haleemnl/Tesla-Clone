import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import Section from "./Section"

// import logo from "./images/logo.svg";


// content
export default function MainContent() {

    return (
        <Container >
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-s.webp'
                leftBtntext='Custom Order'
                rightBtntext='   Exsisting Inventory
                '
            />
            <Section
                title='Model y'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-y.webp'
                leftBtntext='Custom Order'
                rightBtntext='   Exsisting Inventory
             '
            />
            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-3.webp'
                leftBtntext='Custom Order'
                rightBtntext='   Exsisting Inventory
             '
            />
            <Section
                title='Model x'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-s.webp'
                leftBtntext='Custom Order'
                rightBtntext='   Exsisting Inventory
             '
            />
            <Section
                title='Lowest Cost Solar Panels In America'
                description='Money-back guarantee'
                backgroundImg='solar-panel.webp'
                leftBtntext='Order now'
                rightBtntext=' Learn more
             '
            />
            <Section
                title='Solar for new  Roofs'
                description='Solar Roof costd Less Than a Roof Plus Solar Panels'
                backgroundImg='solar-roof.webp'
                leftBtntext='Order now'
                rightBtntext='   Learn more
             '
            />

            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.webp'
                leftBtntext='Shop now'

            />
        </Container>
    )

}

const Container = styled.div`

overflow-x: hidden;
height: 100vh;
`


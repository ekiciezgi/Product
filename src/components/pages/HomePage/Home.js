import React from 'react'
import HeroSection from '../../HeroSection.js'
import Pricing from '../../Pricing.js'
import{homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data.js'
export default function Home() {
    return (
        <div>
            <HeroSection {...homeObjOne}></HeroSection>
            <HeroSection {...homeObjThree}></HeroSection>
            <HeroSection {...homeObjTwo}></HeroSection>
            <Pricing />
            <HeroSection {...homeObjFour}></HeroSection>

        </div>
    )
}

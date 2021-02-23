import React from 'react'
import '../../css/index.css'
import Footer from '../Backgrounds/Footer_background'
import LabelFooterMyInfo from '../Other_components/LabelFooterMyInfo'
import LabelFooterConstruction from '../Other_components/LabelFooterConstruction'
export default function FootContent() {
    return (
        <Footer>
            <LabelFooterMyInfo/>
            <LabelFooterConstruction/>
        </Footer>
    )
}
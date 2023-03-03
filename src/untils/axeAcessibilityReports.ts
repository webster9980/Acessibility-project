import React from "react"

export async function axeAcessiblityReporter(){
    if(process.env.NODE_ENV === 'development'){
        const axe = await require('@axe-core/react')
        const react = require('react')
        const reactDOM = require('react-dom')


        axe(React, reactDOM, 1000)
    }
}
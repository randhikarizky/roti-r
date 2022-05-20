import React, { Component } from 'react'

import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'

const RootContainer = styled((props) => <Container maxWidth={false} disableGutters={false} {...props} />)(({ theme }) => ({
    maxWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000240',
    background: '#F9F9FB'
})) 

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <RootContainer>
                    
                </RootContainer>
            </>
        )
    }
}

export default Dashboard

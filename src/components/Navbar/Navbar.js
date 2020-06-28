import React from 'react'
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core'

function Navbar() {
    return (
        <AppBar position='sticky' style={{ backgroundColor: 'rgb(134,201,163)' }}>
            <Container>
                <Toolbar>
                    <Typography style={{color: '#f5bb1d', backgroundColor: '#946637', borderRadius: '8px',
                        padding: '5px 5px' }}>Animal Crossing Collection App</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
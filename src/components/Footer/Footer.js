import React from 'react'

import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

function Footer() {
    return (
        <AppBar position='sticky' style={{ backgroundColor: 'rgb(134,201,163)', marginTop:'50px' }}>
            <Container>
                <Toolbar>
                    <Typography>Footer</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
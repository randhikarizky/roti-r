import React, { Component } from 'react'

import { Grid, Stack, Container, Box, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'

const RootContainer = styled((props) => <Container maxWidth={false} disableGutters={false} {...props} />)(({ theme }) => ({
    maxWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000240',
    background: '#F9F9FB'
})) 

const FormRect = styled((props) => <Grid {...props} />)(({ theme }) => ({
    background: 'white',
    borderRadius: '16px',
    minWidth: '75vw'
}))

const FormContainer = styled((props) => <Grid {...props} />)(({ theme }) => ({
    padding: theme.spacing(4),
}))

class Order extends Component {
    constructor(props) {
        super(props)  
        this.state = {
            order: {},
            loading: false
        }
    }

    capitalizeFirstCharacter = str => {
        let separated = str.toLowerCase().split(' ')
        for(var i = 0; i < separated.length; i++) {
            separated[i] = separated[i].charAt(0).toUpperCase() + separated[i].substring(1)
        }
        return separated.join(' ')
    }

    onHandleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleEnterKey = e => {
        if(e.key === 'Enter') {
            this.setState({ loading: true })
            this.orderProcess()
        }
    }

    handleSubmit = () => {
        this.setState({ loading: true })
        this.orderProcess()
    }

    orderProcess = () => {
        setTimeout(() => {
            const order = {
                name: this.capitalizeFirstCharacter(this.state.firstName + ' ' + this.state.lastName),
                email: this.state.email,
                phoneNumber: (this.state.areaCode + this.state.phoneNumber),
                amount: this.state.amount,
                notes: this.state.notes
            }

            this.setState({ order: order })
            this.setState({ loading: false })
        }, 3000)
    }

    render() {
        return (
            <>
                <RootContainer>
                    <Stack spacing={5}>
                        <Box>
                            <Stack spacing={1} sx={{ textAlign: 'center' }}>
                                <Typography variant='h2' sx={{ fontWeight: 700 }}>
                                    Order Now
                                </Typography>
                                <Typography variant='body2'>
                                    Wanna eat some fresh breads? Just order now!
                                </Typography>
                            </Stack>
                        </Box>
                        <FormRect container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                                alsdklajsd
                            </Grid>
                            <FormContainer item xs={12} sm={12} md={12} lg={7} xl={7}>
                                <Box component='form'>
                                    <Stack spacing={1}>  
                                        <Stack spacing={1}>
                                            <Typography variant='subtitle2'>
                                                Name
                                            </Typography>
                                            <Stack direction='row' spacing={1}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    variant='outlined'
                                                    label="First Name"
                                                    name='firstName'
                                                    onChange={e => this.onHandleChange(e)}
                                                />
                                                <TextField
                                                    required
                                                    fullWidth
                                                    variant='outlined'
                                                    label="Last Name"
                                                    name='lastName'
                                                    onChange={e => this.onHandleChange(e)}
                                                />
                                            </Stack>
                                        </Stack>
                                        <TextField
                                            required
                                            fullWidth
                                            variant='outlined'
                                            label="Email address"
                                            type='email'
                                            name='email'
                                            onChange={e => this.onHandleChange(e)}
                                        />
                                        <Stack spacing={1}>
                                            <Typography variant='subtitle2'>
                                                Phone Number
                                            </Typography>
                                            <Stack direction='row' spacing={1}>
                                                <TextField
                                                    required
                                                    margin='none'
                                                    variant='outlined'
                                                    label="Area Code"
                                                    name='areaCode'
                                                    onChange={e => this.onHandleChange(e)}
                                                />
                                                <TextField
                                                    required
                                                    fullWidth
                                                    margin='none'
                                                    variant='outlined'
                                                    type='number'
                                                    label="Phone Number"
                                                    name='phoneNumber'
                                                    onChange={e => this.onHandleChange(e)}
                                                />
                                            </Stack>
                                        </Stack>
                                        <TextField
                                            required
                                            fullWidth
                                            variant='outlined'
                                            type='number'
                                            label="Amount"
                                            placeholder='ex: 23 pcs'
                                            name='amount'
                                            onChange={e => this.onHandleChange(e)}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant='outlined'
                                            type='email'
                                            label="Notes"
                                            name='notes'
                                            onChange={e => this.onHandleChange(e)}
                                            onKeyPress={e => {
                                                if(e.key === 'Enter') {
                                                    this.handleLogin()
                                                }
                                            }}
                                        />
                                    </Stack>
                                </Box>
                                <LoadingButton
                                    fullWidth
                                    variant='contained'
                                    sx={{ marginTop: '1.5vh' }}
                                    loading={this.state.loading}
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </LoadingButton>
                            </FormContainer>
                        </FormRect>
                    </Stack>
                </RootContainer>
            </>
        )
    }
} 

export default Order 
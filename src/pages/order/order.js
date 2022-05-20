import React, { Component } from 'react'
import Swal from 'sweetalert2'

import { Grid, Stack, Container, Box, FormControl, Select, MenuItem, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { LoadingButton } from '@mui/lab'

import Breads from '../../assets/img/breads.jpg'

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
            order: [],
            loading: false,
            selected: 'whatsapp'
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    capitalizeFirstCharacter = str => {
        let separated = str.toLowerCase().split(' ')
        for(var i = 0; i < separated.length; i++) {
            separated[i] = separated[i].charAt(0).toUpperCase() + separated[i].substring(1)
        }
        return separated.join(' ')
    }

    onHandleSelected = e => {
        this.setState({ selected: e.target.value })
    }

    onHandleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        this.setState({ loading: true })
        this.orderProcess()
    }

    orderProcess = () => {
        setTimeout(() => {
            const order = {
                source: this.state.selected,
                name: this.capitalizeFirstCharacter(this.state.firstName + ' ' + this.state.lastName),
                email: this.state.email,
                phoneNumber: (this.state.areaCode + this.state.phoneNumber),
                amount: this.state.amount,
                notes: this.state.notes
            }

            this.setState({
                order: [
                    ...this.state.order,
                    order
                ]
            })

            this.setState({ loading: false })
            Swal.fire({
                title: 'Success!',
                text: 'Order placed!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                return this.setState({
                    source: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    areaCode: '',
                    phoneNumber: '',
                    amount: '',
                    notes: ''
                })
            })
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
                                    Roti R
                                </Typography>
                                <Typography variant='body2'>
                                    Wanna eat some fresh breads? Roti R is your answer!
                                </Typography>
                            </Stack>
                        </Box>
                        <FormRect container spacing={2}>
                            <Grid 
                                item 
                                xs={12} sm={12} md={12} lg={5} xl={5}
                                sx={{ 
                                    backgroundImage: `linear-gradient(90deg, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%), url(${Breads})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    padding: '2vw'
                                 }}
                                >
                            
                            </Grid>
                            <FormContainer item xs={12} sm={12} md={12} lg={7} xl={7}>
                                <Box 
                                    component='form'
                                    sx={{ paddingLeft: '2vw' }}
                                >
                                    <Stack spacing={1}>  
                                        <Stack spacing={1}>
                                            <Typography variant='subtitle2'>
                                                Order Source
                                            </Typography>
                                            <FormControl variant='outlined'>
                                                <Select
                                                    fullWidth
                                                    label='Order Source'
                                                    value={this.state.selected}
                                                    onChange={ e => this.onHandleSelected(e)}
                                                    name='source'
                                                >
                                                    <MenuItem key={0} value='whatsapp'>
                                                        WhatsApp
                                                    </MenuItem>
                                                    <MenuItem key={0} value='call'>
                                                        Call
                                                    </MenuItem>
                                                    <MenuItem key={0} value='email'>
                                                        Email
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Stack>
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
                                                    value={this.state.firstName}
                                                />
                                                <TextField
                                                    required
                                                    fullWidth
                                                    variant='outlined'
                                                    label="Last Name"
                                                    name='lastName'
                                                    onChange={e => this.onHandleChange(e)}
                                                    value={this.state.lastName}
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
                                            value={this.state.email}
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
                                                    value={this.state.areaCode}
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
                                                    value={this.state.phoneNumber}
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
                                            value={this.state.amount}
                                        />
                                        <TextField
                                            required
                                            fullWidth
                                            multiline
                                            rows={4}
                                            variant='outlined'
                                            label="Notes"
                                            name='notes'
                                            onChange={e => this.onHandleChange(e)}
                                            value={this.state.notes}
                                        />
                                    </Stack>
                                    <LoadingButton
                                        fullWidth
                                        variant='contained'
                                        sx={{ marginTop: '1.5vh' }}
                                        loading={this.state.loading}
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </LoadingButton>
                                </Box>
                            </FormContainer>
                        </FormRect>
                    </Stack>
                </RootContainer>
            </>
        )
    }
} 

export default Order 
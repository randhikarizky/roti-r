import React, { Component } from 'react'

import { styled } from '@mui/material/styles'
import { Container, Typography, Box, Stack, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'

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
            breadOrders: this.props?.history?.location?.state?.breadOrders
        }
    }

    handleBack = () => {
        const { history } = this.props
        history.push({
            pathname: '/order',
            state: {
                order: this.state.breadOrders
            }
        })
    }

    render() {

        const { breadOrders } = this.state

        const tableHead = [
            { id: 'name', label: 'Name', alignRight: false },
            { id: 'email', label: 'Email', alignRight: false },
            { id: 'phoneNumber', label: 'Phone Number', alignRight: false },
            { id: 'amount', label: 'Bread Amount', alignRight: false },
            { id: 'notes', label: 'Notes', alignRight: false },
        ]

        return (
            <>
                <RootContainer>
                    <Stack spacing={10} justifyContent='center'>
                        <Typography variant='h2' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Roti R Dashboard
                        </Typography>
                        <Box
                            sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: 0,
                                cursor: 'pointer'
                             }}
                        >
                            <Typography variant='subtitle2' onClick={() => this.handleBack()}>
                                Go to Order Page
                            </Typography>
                        </Box>
                        <Stack spacing={5}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {
                                                tableHead?.map((items) => {
                                                    return(
                                                        <TableCell>
                                                            { items?.label }
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            breadOrders?.map((items, idx) => {
                                                console.log(items)
                                                return(
                                                    <TableRow
                                                        hover
                                                        key={idx}
                                                    >
                                                        { <TableCell>{items.name}</TableCell>}
                                                        { <TableCell>{items.email}</TableCell>}
                                                        { <TableCell>{items.phoneNumber}</TableCell>}
                                                        { <TableCell>{items.amount}</TableCell>}
                                                        { <TableCell>{items.notes}</TableCell>}
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Stack>
                    </Stack>
                </RootContainer>
            </>
        )
    }
}

export default Dashboard

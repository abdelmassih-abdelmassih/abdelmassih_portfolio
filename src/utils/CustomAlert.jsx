import { Snackbar, Alert } from '@mui/material'
import React from 'react'

export default function CustomAlert({ position, text, open, setOpen }) {
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: position.vertical, horizontal:position.horizontal }}
                open={open}
                onClose={() => setOpen(false)}
                message="Copied"
                key={position}
            >
                <Alert severity="success">
                    {text}
                </Alert>
            </Snackbar>
        </div>
    )
}

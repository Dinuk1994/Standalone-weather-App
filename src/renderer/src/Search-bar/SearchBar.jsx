import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="standard-search"
                    label="Enter City/Country"
                    type="search"
                    variant="standard"
                    
                />
            </div>
        </Box>
    );
}
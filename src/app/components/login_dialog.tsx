import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Button, IconButton, InputAdornment, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';

export interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
}

function LoginDialog(props: LoginDialogProps) {
    const { onClose, open } = props;
    const [value, setValue] = React.useState<string>('1');
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                Chọn đăng nhập hoặc đăng ký
            </DialogTitle>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Đăng nhập" value="1" />
                        <Tab label="Đăng ký" value="2" />
                    </TabList>
                </Box>
                <TabPanel sx={{ minHeight: "400px" }} value="1">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h5" >Đăng nhập</Typography>
                        <TextField margin='normal' sx={{ width: 300 }} label="Email" required InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }} />
                        <TextField margin='normal' sx={{ width: 300 }} label="Password" required type={showPassword ? 'text' : 'password'} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            ),

                        }} />
                        <Button variant="contained" sx={{ width: 300, p: 1 }}>Đăng nhập</Button>
                    </Stack>
                </TabPanel>
                <TabPanel sx={{ minHeight: "400px" }} value="2">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant="h5" >Đăng ký</Typography>
                        <TextField margin='normal' sx={{ width: 300 }} label="Email" required InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }} />
                        <TextField margin='normal' sx={{ width: 300 }} label="Password" required type={showPassword ? 'text' : 'password'} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            ),

                        }} />
                        <TextField margin='normal' sx={{ width: 300 }} label="Confirm Password" required type={showPassword ? 'text' : 'password'} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            ),

                        }} />
                        <Button variant="contained" sx={{ width: 300, p: 1 }}>Đăng ký</Button>
                    </Stack>
                </TabPanel>
            </TabContext>
        </Dialog>
    );
}

export default LoginDialog;


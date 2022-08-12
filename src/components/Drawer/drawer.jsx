import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const drawerWidth = 250;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Drawer1(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawerToggle}>
                <List>

                    <ListItem button sx={{ display: 'flex' }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'absolute', 
                                left: 20, 
                            }}
                        >
                            <LightbulbOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Notes' sx={{position: 'absolute', left: 80}}/>
                    </ListItem>

                    <ListItem button sx={{ display: 'flex' }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'absolute', 
                                left: 20,
                                top:30
                            }}
                        >
                            <NotificationsNoneOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Reminders'  sx={{position: 'absolute', left: 80,
                                top:28}}/>
                    </ListItem>

                    <ListItem button sx={{ display: 'flex' }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'absolute', 
                                left: 20,
                                top:60
                            }}
                        >
                            <EditOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Edit labels' sx={{position: 'absolute', left: 80,
                                top:58}} />
                    </ListItem>

                    <ListItem button sx={{ display: 'flex' }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'absolute', 
                                left: 20,
                                top:90
                            }}
                        >
                            <ArchiveOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Archive' sx={{position: 'absolute', left: 80,
                                top:88}}/>
                    </ListItem>

                    <ListItem button sx={{ display: 'flex' }}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                                position: 'absolute', 
                                left: 20,
                                top:120
                            }}
                        >
                            <DeleteOutlinedIcon sx={{ width: 28, height: 28,}}/>
                        </ListItemIcon>
                        <ListItemText primary='Trash' sx={{position: 'absolute', left: 80,
                                top:117}}/>
                    </ListItem>

                </List>
            </Drawer>
        </Box>
    );
}

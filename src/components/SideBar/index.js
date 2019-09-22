import React from 'react';
import Stars from '../Stars';
//material UI components
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Arrow from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Emojify from 'react-emojione';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
const shortid = require('shortid');
// import clsx from 'clsx';

const drawerWidth = 290;

const translation = [
  {
    value: 'Na',
    label: 'NONE'
  },
  {
    value: 'US',
    label: 'United States'
  }
];

const country = [
  {
    value: 'US',
    label: 'United States',
    imoji: ':flag_us:'
  },
  {
    value: 'ES',
    label: 'United Kingdom',
    imoji: ':flag_gb:'
  },
  {
    value: 'CA',
    label: 'Canada',
    imoji: ':flag_ca:'
  },
  {
    value: 'DE',
    label: 'Germany',
    imoji: ':flag_de:'
  },
  {
    value: 'JP',
    label: 'Japan',
    imoji: ':flag_jp:'
  },
  {
    value: 'ES',
    label: 'Spain',
    imoji: ':flag_es:'
  },
  {
    value: 'BR',
    label: 'Brazil',
    imoji: ':flag_br:'
  },
  {
    value: 'FR',
    label: 'France',
    imoji: ':flag_fr:'
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    color: 'black',
    backgroundColor: 'white',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textFieldTool: {
    float: 'left'
  }
}));

function SideBar(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    currency: 'EUR'
  });

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
    console.log(e.target.value);
  };

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={!mobileOpen ? 'float-right  d-none' : 'float-right'}>
        <Arrow />
      </IconButton>
      <div className={classes.toolbar} />{' '}
      <List>
        <ListItem className="my-3">
          <TextField
            id="outlined-adornment-weight"
            // className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            className="m-auto w-100"
            label="Search Text"
            value={values.weight}
            onChange={handleChange('weight')}
            InputProps={{
              endAdornment: <SearchIcon className="m-2" />
            }}
          />
        </ListItem>
        <ListItem className="my-3" button key={shortid.generate()}>
          <TextField
            id="filled-select-currency"
            select
            label="Country"
            className="m-auto w-100 "
            value={values.currency}
            onChange={handleChange('currency')}
            variant="outlined">
            {country.map(option => (
              <MenuItem key={shortid.generate()} value={option.value}>
                <Emojify>
                  <span> {option.imoji}</span>
                </Emojify>{' '}
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
        <ListItem className="my-3" button key={shortid.generate()}>
          <TextField
            id="filled-select-currency"
            select
            label="Time"
            className="m-auto w-100 text-white"
            value={values.currency}
            onChange={handleChange('currency')}
            variant="outlined">
            <MenuItem>10</MenuItem>
          </TextField>
        </ListItem>

        <ListItem button key={shortid.generate()}>
          <Stars />
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <TextField
            className="m-md-auto m-1"
            id="filled-select-currency-native"
            select
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            label="Translation"
            margin="dense"
            variant="filled">
            {translation.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>{' '}
          <TextField
            className="m-md-auto m-1"
            id="filled-select-currency-native"
            select
            value={values.currency}
            onChange={handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            label="Sorting"
            margin="dense"
            variant="filled">
            {translation.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}

export default SideBar;

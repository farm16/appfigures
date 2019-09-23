import React, { useEffect, useState } from 'react';
import Emojify from 'react-emojione';
import { time, translation, country } from '../../data/filters';
import { getQueriedData } from '../../actions/actions';
import { connect } from 'react-redux';
import useDebounce from '../../tools/useDebounce';
//material UI components
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
//material UI icons
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import Arrow from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
//component id generator
const shortid = require('shortid');
const drawerWidth = 290;
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
//main func
function SideBar({ container, getQueriedData, reviews }) {
  console.log(reviews);
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [values, setValues] = useState({
    text: '',
    country: '',
    time: '',
    translation: '',
    stars: 0
  });
  const resetValues = () =>
    setValues({ text: '', country: '', time: '', stars: 0, translation: '' });
  const debouncedSearchValue = useDebounce(values, 500);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
    console.log(values);
  };
  function starIcons() {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      stars.push(
        <FormControlLabel
          key={shortid.generate()}
          style={{ width: '20%', margin: 0, padding: 0 }}
          control={
            <Checkbox
              className="m-auto"
              onChange={handleChange('stars')}
              checked={values.stars >= i ? true : false}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              value={i}
            />
          }
        />
      );
    }
    return stars;
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
        <ListItem>
          <h2
            style={{ color: '#1A1626' }}
            className="font-weight-bold text-center w-100">
            {reviews.length > 0 ? reviews[0].product_name : 'loading...'}{' '}
          </h2>
        </ListItem>
      </List>
      <List>
        <ListItem className="my-3">
          <TextField
            id="searchText"
            variant="outlined"
            className="m-auto w-100"
            label="Search Text"
            type="text"
            value={values.text}
            onChange={handleChange('text')}
            InputProps={{
              endAdornment: <SearchIcon className="m-2" />
            }}
          />
        </ListItem>
        <ListItem className="my-3" button key={shortid.generate()}>
          <TextField
            id="filled-select-country"
            variant="outlined"
            className="m-auto w-100 "
            select
            label="Select Country"
            value={values.country}
            onChange={handleChange('country')}>
            {country.map(option => (
              <MenuItem key={shortid.generate()} value={option.value}>
                <Emojify>
                  <span> {option.emoji}</span>
                </Emojify>{' '}
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
        <ListItem className="my-3" button key={shortid.generate()}>
          <TextField
            id="filled-select-time"
            select
            label="Time"
            className="m-auto w-100 text-white"
            value={values.time}
            onChange={handleChange('time')}
            variant="outlined">
            {time.map(option => (
              <MenuItem key={shortid.generate()} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
        <ListItem button key={shortid.generate()}>
          <div className="constainer p-0 m-0 w-100">
            <div className="row m-auto my-0 py-0">
              <p className="p-0 m-0 text-muted">Filter by Rating</p>
            </div>
            <div className="row"> {starIcons()}</div>
          </div>
        </ListItem>
        <ListItem button key={shortid.generate()}>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={resetValues}>
            Reset
          </button>
        </ListItem>
      </List>
    </div>
  );
  useEffect(() => {
    getQueriedData(debouncedSearchValue);
  }, [debouncedSearchValue, getQueriedData]);
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
            id="filled-select-Translation"
            className="m-auto w-25 text-white"
            select
            label="Translation"
            value={values.translation}
            onChange={handleChange('translation')}
            margin="dense"
            variant="outlined">
            {translation.map(option => (
              <MenuItem key={shortid.generate()} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>{' '}
          {/* <TextField
            className="m-md-auto m-1"
            id="filled-select-currency-native"
            select
            // value={values.currency}
            // onChange={handleChange('currency')}
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
          </TextField> */}
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

const mapStateToProps = state => ({
  reviews: state.reviews,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getQueriedData }
)(SideBar);

import React from 'react';
import SideBar from './components/SideBar';
import SingleReview from './components/SingleReview';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#A0C9D9',
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <SingleReview />
      </main>
    </div>
  );
}

export default App;

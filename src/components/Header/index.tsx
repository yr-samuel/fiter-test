import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  header: {
    textAlign: 'center',
    padding: "16px 0",
    fontSize: 24,
    backgroundColor: '#012d78',
    color: "#FFFAFA"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid 
      container 
      alignItems="center" 
      justifyContent="center"
    >
      <Grid 
        xs 
        item 
        className={classes.header}
      >
        Fiter Colegas
      </Grid>
    </Grid>
  );
}

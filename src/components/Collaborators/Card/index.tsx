import Grid from '@mui/material/Grid';
import React from 'react';
import { Box, Card as MuiCard} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import profileImg from '../../../assets/images/profile-pic.png';
import { ICollaborator } from '../../../interfaces/collaborator';

interface IProps extends ICollaborator {}

const useStyles = makeStyles(() => ({
  boxImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingTop: '2rem',
    paddingBottom: '1rem',
    background: 'radial-gradient(#e66465, #9198e5);',
    "& img": {
      background: '#FFFAFA'
    }
  },
  boxName: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0.5rem 0",
    "& > h5": {
      textAlign: 'center'
    }
  },
  boxOccupation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0.5rem 0",
    "& > span": {
      borderRadius: "5%",
      padding: "0.2rem 1rem",
      flexWrap: "wrap",
      textAlign: "center",
      background: "#DAA520",
      boxShadow: "5px 5px 15px 5px #ccc",
    }
  },
  boxPhone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0.5rem 0",
  }
}))

const Card = ({ nome, cargo, telefone, foto }: IProps) => {
  const classes = useStyles();

  const maskNumber = (telefone: string) => {
    const ddd = telefone.slice(0,2);
    const leftSide = telefone.slice(2,7);
    const rightSide = telefone.slice(7,11);

    return `(${ddd}) ${leftSide}-${rightSide}`
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MuiCard >
        <Box className={classes.boxImage}>
          <Avatar src={foto || profileImg} sx={{ width: 70, height: 70}}/>
        </Box>
        <Box className={classes.boxName}>
          <Typography variant="h5">{ nome }</Typography>
        </Box>
        <Box className={classes.boxOccupation}>
          <span>{ cargo }</span>
        </Box>
        <Box className={classes.boxPhone}>
          <Typography>{ maskNumber(telefone) }</Typography>
        </Box>
      </MuiCard>
    </Grid>
  );
}

export default Card;

import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { ICollaborator } from '../../interfaces/collaborator';
import Card from './Card';

const ENDPOINT_URL = 'https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json';

const useStyles = makeStyles(() => ({
  collaboratorsSection: {
    padding: '1rem'
  }
}));

export default function Collaborators() {
  const classes = useStyles();
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  useEffect(() => {
    (async () => { 
      const response = await fetch(ENDPOINT_URL);
      const collaboratorsData = await response.json();

      setCollaborators(collaboratorsData);
    })()
  }, [])

  return (
    <Grid container spacing={2} className={classes.collaboratorsSection}>
      {
        collaborators.map((collaborator: ICollaborator, index) => (<Card key={index} { ...collaborator }/>))
      }
    </Grid>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Cards extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
    }
  }
  
  render() {
    
    return (
      <Grid item xs={3}>
      <Card style={{ backgroundColor: '#cddc39' }} className={useStyles.card}>
        <CardContent>
          <Typography className={useStyles.title} color="textSecondary" gutterBottom>
            {this.props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Note</Button>
        </CardActions>
      </Card>
      </Grid>
    );
  }
}

export default Cards;

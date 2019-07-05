import React from 'react';
import Cards from './Cards';
import Grid from '@material-ui/core/Grid';
import { reactLocalStorage } from 'reactjs-localstorage';

class CardList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let allCards = reactLocalStorage.getObject('notes');
    return (
      <div>
        <Grid container spacing={3}>
          {
            allCards.map(function (card, i) {
              return <Cards title={card.title} />
            })
          }
        </Grid>
      </div>
    );
  }
}

export default CardList;

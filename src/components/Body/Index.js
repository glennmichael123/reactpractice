import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardList from './CardLists';
import AddNotes from './AddNotes';

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed style={{ marginTop: '50px' }}>
          <CardList />
          <AddNotes/>
        </Container>
      </React.Fragment>
    );
  }
}

export default Index;
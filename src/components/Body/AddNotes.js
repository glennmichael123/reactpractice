import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {reactLocalStorage} from 'reactjs-localstorage';


const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      open: false,
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.saveNote = this.saveNote.bind(this)
  }

  handleClose() {
    this.setState({ open: false })
  }

  handleOpen() {
    this.setState({ open: true })
  }

  saveNote() {
    let notes = []
    let currentNotes = reactLocalStorage.getObject('notes');
    if (!currentNotes.length) {
      reactLocalStorage.setObject('notes', [{ 'title': this.state.title, 'body': this.state.body }]);
    } else {
      notes = currentNotes
      notes.push({ 'title': this.state.title, 'body': this.state.body })
      reactLocalStorage.setObject('notes', notes);
    }

    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab onClick={this.handleOpen} color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" maxWidth={'xs'}>
        <DialogTitle id="form-dialog-title">Add note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please input note title and note body.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Body"
            type="text"
            fullWidth
            value={this.state.body}
            onChange={e => this.setState({ body: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.saveNote} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }

}

AddNotes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNotes);
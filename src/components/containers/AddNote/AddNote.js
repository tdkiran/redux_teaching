import React from 'react';
import './AddNote.css'
import store from '../../../redux/store';

export class AddNote extends React.Component {
    constructor() {
        super();
        this.state = {
            inputText: '',
        }
        this.updateInputText = this.updateInputText.bind(this);
    }

    updateInputText(e) {
        this.setState({ ...this.state, inputText: e.target.value });
    }
    addNotes() {
        store.dispatch({ type: 'ADD', payload: { data: this.state.inputText } });
        this.setState({ inputText: '' });
    }

    render() {
        return (
            <div className="add-notes-container">
                <input
                    className="notes"
                    type="text"
                    placeholder="enter your notes here"
                    value={this.state.inputText}
                    onChange={this.updateInputText}
                    name=""
                />
                <input
                    type="button"
                    value="add this note"
                    className="add-button"
                    onClick={this.addNotes.bind(this)}
                />
            </div>
        );
    }
}


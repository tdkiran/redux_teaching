import React from 'react';
import Tasks from '../../atoms/Tasks/Tasks';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
    return {
        notesList: state.notesList,
    };
}

class NotesList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.notesList &&
                        this.props.notesList.map((note, i) => {
                            return <Tasks data={note} key={i} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps)(NotesList);





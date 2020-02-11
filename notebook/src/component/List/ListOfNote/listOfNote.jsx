import React from 'react';
import Note from './Note/note.jsx'
import './listOfNote.css';

export default class ListOfNote extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = Object.assign({}, this.props);
    // };

    // componentDidUpdate(prevProps, prevState) {
    //     const { notes } = this.props;
    //     if (notes !== prevProps.notes) {
    //         this.setState({
    //             stateNotes: notes,
    //         });
    //     }
    // }

    render() {
        return (
            <div className="listOfNotesBlock">
                {this.props.notes && this.props.notes.map(itemNote => (
                    <Note noteData={itemNote} notes={this.props.notes} />
                ))}
            </div>
        );
    }
}

// <Note key={itemNote.id_note} noteData={itemNote} />  // ошибка
import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxTitleChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onInputBodyEventHandler = this.onInputBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.maxTitleChar >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          maxTitleChar: 50 - event.target.value.length,
        };
      });
    }
  }

  onInputBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <form className="note-input__form" onSubmit={this.onSubmitEventHandler}>
          <label className="note-input__char-limit">
            {this.props.locale === 'en' ? 'Title Char Left : ' : 'Sisa Karakter Judul : '}
            {this.state.maxTitleChar}
            <input
              type="text"
              className="note-input__title"
              placeholder={this.props.locale === 'en' ? 'title here ...' : 'judul disini ...'}
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
          </label>
          <div
            contentEditable
            className="note-input__body"
            data-placeholder={
              this.props.locale === 'en' ? 'note content here ...' : 'isi catatan disini ...'
            }
            value={this.state.body}
            onInput={this.onInputBodyEventHandler}
          />
          <button type="submit">{this.props.locale === 'en' ? 'Create Note' : 'Buat Note'}</button>
        </form>
      </div>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default NoteInput;

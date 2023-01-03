import { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  handleCheckKey = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
      window.removeEventListener('keydown', this.handleCheckKey);
    }
  };
  handleCheckClick = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCheckKey);
  }

  render() {
    return (
      <div onClick={this.handleCheckClick} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.photoUrl.url} alt={this.props.photoUrl.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

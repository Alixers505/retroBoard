import React from 'react';

class Button extends React.Component {
  static defaultProps = {
    text: 'New Button',
    onClick: () => {
      return;
    },
    className: ''
  };
  constructor(props) {
    super(props);

    this.state = { isActive: false };
  }
  handleOnClick = () => {
    this.setState(state => {
      return {
        isActive: !state.isActive
      };
    });
    this.props.onClick();
  };

  render() {
    const { text, children, className } = this.props;
    return (
      <button
        onClick={this.handleOnClick}
        className={`rb-btn ${className} ${this.state.isActive ? 'active' : ''}`}
      >
        {text}
      </button>
    );
  }
}

export default Button;

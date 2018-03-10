import React from 'react';
import PropTypes from 'prop-types';

const defaultColor = '#ffffff';

class SocialLinkIcon extends React.Component {
  propTypes = {
    site: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
      hoverColor: PropTypes.string,
    }).isRequired,
  }

  state = {
    color: defaultColor,
  }

  handleMouseOver = () => {
    this.setState({
      color: this.props.site.hoverColor || defaultColor,
    });
  }

  handleMouseOut = () => {
    this.setState({
      color: defaultColor,
    });
  }

  render() {
    const { site } = this.props;
    const anchorStyle = {
      color: this.state.color,
    };

    return (
      <a
        style={anchorStyle}
        href={site.link}
        onMouseOver={this.handleMouseOver}
        onFocus={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onBlur={this.handleMouseOut}
      >
        <i
          className={`${site.iconClass} fa-2x`}
          alt={site.name}
        />
      </a>
    );
  }
}

export default SocialLinkIcon;

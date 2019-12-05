import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkButton extends Component {
    changeURL() {
        const { url, history, onLeaveHook } = this.props;
        if (typeof onLeaveHook == 'function' && onLeaveHook(history)){
            history.push(url)
        }
        if (typeof onLeaveHook != 'function'){
            history.push(url)
        }
    }
    render() {
        return <button className="link-button" type='button' onClick={this.changeURL.bind(this)}>
                {this.props.children}
            </button>
    }
};

LinkButton.propTypes = {
    url: PropTypes.string,
    onLeaveHook: PropTypes.func
};

export default withRouter(LinkButton);
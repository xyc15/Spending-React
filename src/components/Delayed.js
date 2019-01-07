//a component used to render children components with different props at different times

import React from 'react';
import PropTypes from 'prop-types';

class Delayed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hiden: true};
    }
    componentDidMoun() {
        setTimeout(() => {this.setState({hidden:false})}, this.props.waitBeforeShow);
    }
    render() {
        return this.state.hiddem ? '' : this.props.children;
    }
}

Delayed.prototypes = {
    waitBeforeShow: PropTypes.number.isRequired
}

export default Delayed;
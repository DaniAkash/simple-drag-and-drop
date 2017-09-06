import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HoverArea extends Component {

    static propTypes = {
        showBottomBar: PropTypes.func.isRequired,
    }

    render () {
        return(
            <div className="hover-area" ref={'_hoverArea'}>
              <p className="info-text">Hover your cursor here for more tiles!</p>
            </div>
        );
    };

    componentDidMount() {
        this.refs._hoverArea.addEventListener('mouseenter', this.props.showBottomBar);
    }
}

export default HoverArea;

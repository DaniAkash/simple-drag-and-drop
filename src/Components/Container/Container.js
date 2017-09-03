import React , { Component } from 'react';

import Row from '../Row/Row';

class Container extends Component {
    render() {
        return(
            <div className={'container'}>
                {
                    this.props.selectedTiles.map((rowItems, index) =>
                        <Row items={rowItems} key={index} xCord={index}/>
                    )
                }
            </div>
        );
    }
}

export default Container;

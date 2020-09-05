import React, {Component} from 'react';
class Picture extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
       return nextProps.src != this.props.src;
    }

    render() {
        return (
            <div>
               <img src={this.props.src} onTouchStart={this.props.onTouchStart} onTouchMove={this.props.onTouchMove} onTouchEnd={this.props.onTouchEnd} width="550px" height="550px" />
            </div>
        )
    }
}

export default Picture;
import React, {Component} from 'react';
import {Theme} from './ContextProvider';
class Picture extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        /*
        {(context) => (
                       <React.Fragment>
                           <button onClick={context.handle}>New photos</button>
                           <button onClick={context.next}>next</button>
                           <img src={context.src} />
                       </React.Fragment>
                   )}
        */
        return (
            <div>
                <Theme.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <button onClick={context.handle}>New photos</button>
                            <button onClick={context.next}>next</button>
                            <img src={context.src} />
                        </React.Fragment>
                    )}
                </Theme.Consumer>
            </div>
            //<div>
               //<img src={this.props.src} onMouseDown={this.props.drag} onTouchStart={this.props.onTouchStart} onTouchMove={this.props.onTouchMove} onTouchEnd={this.props.onTouchEnd} width="550px" height="550px" />
            //</div>
        )
    }
}

export default Picture;
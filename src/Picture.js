import React, {Component} from 'react';
import {Theme} from './ContextProvider';
class Picture extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      
        return (
            <div>
                <Theme.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <img src={context.state.arr[context.state.counter]} />
                            <button onClick={context.handle}>New photos</button>
                            <button onClick={context.next}>next</button>
                            <button onClick={context.back}>back</button>
                        </React.Fragment>
                    )}
                </Theme.Consumer>
            </div>
        )
    }
}

export default Picture;
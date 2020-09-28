import React, { Component } from 'react';

export const Theme = React.createContext();

class ContextProvider extends Component{

    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            arr:null,
            swipe:false,
            loading:true,
            src:""
        }
    }

    render() {
        return (
            <Theme.Provider value={
                {
                    state:this.state,
                    
                    handle: (e) => {
                        console.log("handle");
                        const result = fetch("https://picsum.photos/550/550"
                        )
                        .then(res => {
                        this.setState({
                            counter:0,
                            arr:res,
                            loading:true
                        });
                    });
                    this.setState(
                        {
                            loading:false,
                            src:this.state.arr.url
                        }
                    );
                    console.log(this.state.arr);
                },

                next:() => {
                    const next = this.state.counter+1;
                    this.setState (
                        {
                            counter:next,
                            src:this.state.arr.url
                        }
                    )
                    console.log("ok");
                }
            }
            }>
                {this.props.children}
            </Theme.Provider>
        )
    }
}

export default ContextProvider;
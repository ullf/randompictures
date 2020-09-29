import React, { Component } from 'react';

export const Theme = React.createContext();

class ContextProvider extends Component{

    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            arr:[],
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
                        for(var i=0;i<5;i++) {
                            fetch("https://picsum.photos/550/550")
                            .then(res =>  {
                                this.state.arr.push(res.url);
                                const tmp = this.state.arr;
                                this.setState({
                                    counter:0,
                                    arr:tmp,
                                    loading:true
                                })
                            });
                        }
                },

                next:() => {
                    const next = this.state.counter+1;
                    this.setState (
                        {
                            counter:next,
                            src:this.state.arr.url
                        }
                    )
                },

                back:() => {
                    const next = this.state.counter-1;
                    this.setState (
                        {
                            counter:next,
                            src:this.state.arr.url
                        }
                    )
                }
            }
            }>
                {this.props.children}
            </Theme.Provider>
        )
    }
}

export default ContextProvider;
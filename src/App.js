import React, {Component} from 'react';
import '../styles/style.css';
import Picture from './Picture';
import ContextProvider from './ContextProvider';


class App extends Component {

   /* constructor(props) {
        this.state = {
            counter:0,
            arr:null,
            swipe:false,
            loading:true
        };
        this.X = 0;
        this.pictures = "Press new to load images";
        this.handle = this.handle.bind(this);
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onMove = this.onMove.bind(this);
        this.drag = this.drag.bind(this);
    }

     handle (e) {
         console.log("handle");
       /* const result = fetch("https://picsum.photos/550/550"
        )
       // .then(res => res.json())
        .then(res => {
            this.setState({
                counter:0,
                arr:res,
                loading:true
            });
        });
        this.setState(
            {
                loading:false
            }
        )
        
    }

   /* onStart(evt) {
        const touch = evt.touches[0].clientX;
        this.X = touch;
    }

    onEnd(evt) {
        const touch = evt.changedTouches[0];
        if(this.state.swipe && touch.clientX > this.X) {
            this.next();
        } 

        if(this.state.swipe && touch.clientX < this.X) {
            this.back();
        } 
        this.X = 0;
    }

    onMove(e) {
        if (e.changedTouches) {
            this.setState(
                {
                    swipe:true
                }
            )
        }
    }

    next() {
        const next = this.state.counter+1;
        this.setState (
            {counter:next}
        )
    }

    back() {
        this.setState (
            {counter:this.state.counter-1}
        )
    }

    drag() {
        console.log("drag");

    }*/

    render() {
       /* const {counter,arr,swipe,pictures} = this.state;
        while( counter < 0 || counter>19 && this.state.loading == true) {
            this.pictures="Press new to get new pictures";
        }*/
        /*if(arr.length == 20 && counter <= 19 && counter >= 0) {
            this.pictures=<Picture onTouchStart={this.onStart} onTouchMove={this.onMove} onTouchEnd={this.onEnd} src={arr[counter].userImageURL}/> 
        }*/
        /*if(this.state.arr != null && this.state.loading == false) {
            this.pictures=<Picture/> 
        }*/
        return (
            <div>
               
                <ContextProvider>
                    Hey
                    <Picture />
                </ContextProvider>
                
            </div>
            
            /*<div>
                <button onClick={this.handle}>New photos</button>
                <button onClick={this.handle}>Next</button>
                <button onClick={this.back}>Back</button>
                <div className="pictures">
                <ThemeContext.Provider value="dark">
                    {this.pictures}
                </ThemeContext.Provider>
                </div>
            </div>*/
        )
    }

}

export default App;
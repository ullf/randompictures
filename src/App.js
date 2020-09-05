import React, {Component} from 'react';
import '../styles/style.css';
import Picture from './Picture';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            counter:0,
            swipe:false
        };
       this.X = 0;
       this.pictures = "Press new to load images";
       this.handle = this.handle.bind(this);
       this.next = this.next.bind(this);
       this.back = this.back.bind(this);
       this.onStart = this.onStart.bind(this);
       this.onEnd = this.onEnd.bind(this);
       this.onMove = this.onMove.bind(this);

    }

    handle (e) {
        fetch("https://api.unsplash.com/photos/random?count=10&client_id=nH6_kl96CBpqUBfJFp6w8-k-mv5lwnuydJdZK3oaN9Y",
        {headers:{ SameSite:"Secure"}})
        .then(res => res.json())
        .then(res => {
            this.setState({
                arr:res,
                loading:false,
                counter:0
            });
        });
        console.log(this.state.arr);
    }

    onStart(evt) {
       const touch = evt.touches[0].clientX;
        this.X = touch;
    }

    onEnd(evt) {
        const touch = evt.changedTouches[0];
        if(this.state.swipe && touch.clientX > this.X) {
            this.next();
            this.X = 0;
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

    shouldComponentUpdate(nextProps, nextState) {
       return nextState.counter != this.state.counter || nextState.arr != this.state.arr;
    }

    next() {
        this.setState (
            {counter:this.state.counter+1}
        )
    }

    back() {
        this.setState (
            {counter:this.state.counter-1}
        )
    }

    render() {
        if(this.state.counter > 9 || this.state.counter < 0) {
            this.pictures="Press new to get new pictures";
        }
        if(this.state.arr.length == 10 && this.state.counter >= 0 && this.state.counter <= 9) {
            this.pictures = <Picture onTouchStart={this.onStart} onTouchMove={this.onMove} onTouchEnd={this.onEnd} src={this.state.arr[this.state.counter].urls["full"]}/>
        }
        return (
            <div>
                <button onClick={this.handle}>New photos</button>
                <button onClick={this.next}>Next</button>
                <button onClick={this.back}>Back</button>
                <div className="pictures">
                    {this.pictures}
                </div>
            </div>
        )
    }

}

export default App;
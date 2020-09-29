import React, {Component} from 'react';
import '../styles/style.css';
import Picture from './Picture';
import ContextProvider from './ContextProvider';


class App extends Component {

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
    }*/

    render() {
      
        return (
            <div>
               
                <ContextProvider>
                    Hey
                    <Picture />
                </ContextProvider>
                
            </div>
        )
    }

}

export default App;
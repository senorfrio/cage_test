import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DayPicker from './DayPicker.jsx';

class Cages extends React.Component {
    
    render() {
        const cages = this.props.cages.map((cage) => {
            return (<button key={cage} id={cage} onClick={this.props.selectCage}>{cage}</button>);
        })
        
        return (<div>{cages}</div>);
    }
}

class Main extends React.Component {
    constructor() {
        super();
        this.cages = [
            'bees',
            'stressed',
            'content',
            'happy'
        ]

        this.state = {
            selectedDay: 'W',
            Su: null,
            Mo: null,
            Tu: null,
            W: null,
            Th: null,
            F: null,
            Sa: null
        }
    }

    selectCage = (cage) => {
        let feeling = cage.target.id;
        this.setState(state => {
            state[state.selectedDay] = feeling;
            return state;
        });
    }

    selectDay = (day) => {
        this.setState({
            selectedDay: day
        })
    }

    render() {
        return(
            <div className='main'>
                <h1>Cage Test</h1>
                <div>
                    <p>How are you feeling?</p>
                    <DayPicker selectDay={this.selectDay} selectedDay={this.state.selectedDay} />
                    <Cages selectedDay={this.selectedDay} cages={this.cages} selectCage={this.selectCage} />
                    <div className='cage_face'>
                        <div className={this.state[this.state.selectedDay]}></div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

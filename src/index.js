import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const days = {
    Su: 'Sunday',
    M: 'Monday',
    Tu: 'Tuesday',
    W: 'Wedensday',
    Th: 'Thursday',
    F: 'Friday',
    Sa: 'Saturday',
    allDays: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
}

class Cages extends React.Component {
    
    render() {
        const cages = this.props.cages.map((cage) => {
            return (<button key={cage}>{cage}</button>);
        })
        
        return (<div>{cages}</div>);
    }
}

class DayPicker extends React.Component {
    selectDay = (e) => {
        this.props.selectDay(e.target.id);
    }

    render() {
        console.log(this.props);
        const d = days.allDays.map((val) => {
            return (
            <li key={val+'_item'} className={this.props.selectedDay === val ? 'selected': null}
                onClick={this.selectDay} id={val} 
            >
                {val}
            </li>);
        });

        return(
            <ul className='daypicker'>
                {d}
            </ul>
        );
    }
}

class Main extends React.Component {
    constructor() {
        super();
        this.cages = [
            'bees',
            'content',
            'manic'
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
        this.setState({
            
        })
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
                    <DayPicker selectDay={this.selectDay} selectedDay={this.state.selectedDay} />
                    <Cages selectedDay={this.selectedDay} cages={this.cages} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

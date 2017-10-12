import React from 'react';

const days = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

export default class DayPicker extends React.Component {
    selectDay = (e) => {
        this.props.selectDay(e.target.id);
    }

    render() {
        const d = days.map((val) => {
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
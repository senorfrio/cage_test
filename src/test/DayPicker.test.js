import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DayPicker from '../DayPicker.jsx';

describe('<DayPicker />', () => {
  it('renders a DayPicker', () => {
    const selectedDay = 'Su';
    const selectDay = jest.fn();

    const component = shallow(
      <DayPicker selectedDay={selectedDay} selectDay={selectedDay}/>
    );
    console.log(component);
  });
});
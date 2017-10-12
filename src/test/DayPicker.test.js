import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DayPicker from '../DayPicker.jsx';

describe('<DayPicker />', () => {
  it('renders a DayPicker', () => {
    const selectedDay = 'Su';
    const selectDayMock = jest.fn();

    const component = shallow(
      <DayPicker selectedDay={selectedDay} selectDay={selectDayMock}/>
    );
    component.find('.selected').simulate('click', {
      target: ''
    });

    expect(selectDayMock.mock.calls.length).toBe(1);
    expect(component.find('.selected').contains(selectedDay));
  });
});
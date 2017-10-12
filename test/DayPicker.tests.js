import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
// import sinon from 'sinon';
import DayPicker from './src/DayPicker.jsx';

// sinon.spy(Foo.prototype, 'componentDidMount');

describe('<DayPicker />', () => {
  it('renders a DayPicker', () => {
    const wrapper = mount(<DayPicker />);
    console.log(wrapper.debug());
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
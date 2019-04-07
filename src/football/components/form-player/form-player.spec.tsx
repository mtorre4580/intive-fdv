import React from 'react';
import FormPlayer from './form-player';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe('<FormPlayer />', () => {
   it('should render snapshot', () => {
    const onSearchHandler = jest.fn();
    const component = renderer.create(<FormPlayer onSearch={onSearchHandler} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should calls onSearch prop function when form is submitted', () => {
    const onSearchHandler = jest.fn();
    const wrapper = mount(<FormPlayer onSearch={onSearchHandler}/>);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSearchHandler).toHaveBeenCalledTimes(1);
  });  
});
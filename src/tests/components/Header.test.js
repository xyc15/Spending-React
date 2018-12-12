//react-test-renderer -- allows us to render our components inside of just regular javascript code, then we can assert something about what we got rendered.
//import ReactShallowRenderer from 'react-test-renderer/shallow';//only renders given component
import React from 'react';
import {shallow} from 'enzyme';
//important!!!! 
//We added this in jest.config.json file to automatically use snapshot serializer
//import toJSON from 'enzyme-to-json';  //The purpose of this package is to make enzyme work with these snapshot testing functionality
import {Header} from '../../components/Header';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
   //expect(toJSON(wrapper).toMatchSnapshot(); 
   //important!!!! toJSON() method is going to extract just the meaningful stuff the rendered output, i.e., just the Header component
});

test("should call startLogout on button click", () => {
    let startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
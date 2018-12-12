//This file allows us to configure the environment we're running in 
//https://airbnb.io/enzyme/
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';
Enzyme.configure({
    adapter: new Adapter()
});

DotEnv.config({path: '.env.test'});
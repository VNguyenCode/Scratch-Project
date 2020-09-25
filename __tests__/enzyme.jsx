/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import components for testing
import { Signup } from '../client/components/Signup';
import { Login } from '../client/components/Login';
import MainContainer from '../client/containers/MainContainer';
import InputBox from '../client/components/InputBox';
import OutputBox from '../client/components/outputBox';

// Configure Enzyme to work with newer versions of React
configure({ adapter: new Adapter() });

describe('Enzyme unit tests', () => {
  describe('<Signup />', () => {
    let wrapper;
    const props = {
      username: 'Rico',
      password: 'stinko123',
      phoneNumber: '911',
      handleFormInput: jest.fn(),
      handleFormSubmit: jest.fn(),
    };
    const mockEvent = { target: {} };

    beforeAll(() => {
      wrapper = shallow(<Signup {...props} />);
    });

    it('Should render a div with 3 input fields', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('input').length).toEqual(3);
    });

    it('Should invoke handleFormInput onChange', () => {
      wrapper.find('input[name="username"]').simulate('change', mockEvent);
      expect(props.handleFormInput).toHaveBeenCalled();
      wrapper.find('input[name="password"]').simulate('change', mockEvent);
      expect(props.handleFormInput).toHaveBeenCalled();
      wrapper.find('input[name="phoneNumber"]').simulate('change', mockEvent);
      expect(props.handleFormInput).toHaveBeenCalled();
    });

    it('Should invoke handleFormSubmit onSubmit', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });
      expect(props.handleFormSubmit).toHaveBeenCalled();
    });
  });

  describe('<Login />', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Login />);
    });

    it('Should render a div with 2 input fields and 1 button', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('input').length).toEqual(2);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('<InputBox />', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<InputBox />);
    });

    it('Should render a div with 1 input field and 1 button', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('input').length).toEqual(1);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('<Output />', () => {
    let wrapper;
    const props = {
      url: 'test.com',
      url_id: '',
      status: 200,
      checkNow: jest.fn(),
    };

    beforeAll(() => {
      wrapper = shallow(<OutputBox {...props} />);
    });

    it('Should render a div', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it('Should display url and status from its props', () => {
      expect(wrapper.text()).toBe(
        `url: ${props.url}status: ${props.status}check nowuptime`
      );
    });
  });
});

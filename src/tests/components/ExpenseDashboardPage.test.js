import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/ExpenseDashboardPage';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashBoard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
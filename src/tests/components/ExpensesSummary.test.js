import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../component/ExpensesSummary';

test('should render ExpensesSummary with 1', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={3451234} />);
    expect(wrapper).toMatchSnapshot();
});
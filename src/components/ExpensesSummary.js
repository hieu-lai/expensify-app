import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    <h3>
      Viewing {props.expenses.length} {
        props.expenses.length === 1 ? 'expense' : 'expenses'  
      } totalling {
        numeral(selectExpenseTotal(props.expenses) / 100).format('$0,0.00')
      }
    </h3>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)  
});

export default connect(mapStateToProps)(ExpensesSummary);
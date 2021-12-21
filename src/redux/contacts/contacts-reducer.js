import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import contactsOperations from './contacts-operations';

const loading = createReducer(false, {
  [contactsOperations.fetchContacts.pending]: () => true,
  [contactsOperations.fetchContacts.fulfilled]: () => false,
  [contactsOperations.fetchContacts.rejected]: () => false,
  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,
  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
});

const items = createReducer([], {
  [contactsOperations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [contactsOperations.fetchContacts.rejected]: error => console.log(error),
  [contactsOperations.fetchContacts.pending]: () => null,
  [contactsOperations.addContact.rejected]: error => console.log(error),
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: error => console.log(error),
  [contactsOperations.deleteContact.pending]: () => null,
});

export default combineReducers({
  loading,
  items,
  filter,
  error,
});

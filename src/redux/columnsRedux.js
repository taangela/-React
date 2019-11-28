import shortid from 'shortid';

// selectors
//funkcja wybiera kolumny z danej listy, w ListContainer przefiltrowuje kolmny zawierające odpowiedni parametr listId
//w pierwszym argumenvue przyjmuje state, stan całej aplikacji
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';//zapisujemy nazwę właściwości stanu na której wykonamy akcję
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createAction_addColumn = payload => ({ payload, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}
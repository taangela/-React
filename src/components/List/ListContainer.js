import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList,createAction_addColumn} from '../../redux/columnsRedux.js';
import {createAction_moveCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

//funkcje wysyłającą akcje do magazynu nazywamy dispatcher
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.match.params.id,
    title, //skrócony zapis title: title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(
    payload)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(List);
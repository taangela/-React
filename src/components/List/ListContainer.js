import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList,createAction_addColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

//funkcje wysyłającą akcje do magazynu nazywamy dispatcher
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createAction_addColumn({
    listId: props.id,
    title, //skrócony zapis title: title,
  })),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(List);
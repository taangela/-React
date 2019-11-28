import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),//zawiera aktualną frazę wyszukania
  countVisible: countVisibleCards(state),//zwraca liczbe kart widocznych po przefiltrowaniu
  countAll: countAllCards(state),//liczba wszystkich kart
});
//dispaczer wysyła akcję, która zmienia serchString w stanie aplikacji
const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

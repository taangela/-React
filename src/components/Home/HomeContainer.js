import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});
const mapDispatchToProps = (dispatch) => ({
  addList: title,
  title,
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
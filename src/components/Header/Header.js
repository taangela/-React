import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { settings } from '../../data/dataStore';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultHeaderIcon,
  }

  render() {
    const {icon} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name = {icon}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
  
export default Header;
import React from 'react';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
import {searchResultsData} from '../../data/dataStore';



class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    lists: PropTypes.array,
    columns: PropTypes.array,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultResultsIcon,

  }

  render() {
  
    const {cards,icon} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{searchResultsData.title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3> 
          <div className={styles.cards}>
            {cards.map(cardData => {
              const column = this.props.columns.find(column =>column.id==cardData.columnId);
              const list = this.props.lists.find(list => list.id==column.listId );
              return <Link key={cardData.id} to={`/list/${list.id}/`}>{cardData.title}</Link>;
            })}
          </div>
        </section>
      </Container>
    );
  }

}

export default SearchResults;

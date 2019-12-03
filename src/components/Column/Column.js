import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';
import {Droppable} from 'react-beautiful-dnd';

class Column extends React.Component { 
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard, id} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3> 
        <div>
          <Droppable droppableId={id}>
            {provided => (
              <div 
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}


export default Column;
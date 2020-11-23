import React from 'react';
import { useState } from 'react';
import StyleSelectorItem from './StyleSelectorItem.jsx';
import '../../../dist/stylesheets/OverviewStyles.css';

const StyleSelector = (props) => {
  // console.log('StyleSelector', props);

  const [group, setGroup] = useState(0);

  var styles = props.currentStyles.map((style) => {
    return (
      <StyleSelectorItem
        style={style}
        currentStyleID={props.currentStyle.style_id}
        handleStyleChange={props.handleStyleChange}
        key={style.style_id}
      />
    );
  });

  var displayStyles = styles.slice(group * 4, group * 4 + 8);

  return (
    <div>
      <p className="style">
        STYLE > <span className="style-name">{props.currentStyle.name}</span>
      </p>
      <img
        className="style-arow-up"
        src={'./attributes/keyboard-up-arrow.png'}
        onClick={() => {
          if (group > 0) {
            setGroup(group - 1);
          }
        }}
        style={
          group > 0
            ? { visibility: 'visible', transform: 'translateX(515%)' }
            : { visibility: 'hidden', transform: 'translateX(515%)' }
        }
        alt="up arrow"
      />
      <div className="style-grid">{displayStyles}</div>
      <img
        className="style-arow-down"
        src={'./attributes/keyboard-down-arrow.png'}
        onClick={() => {
          if (group * 4 + 8 < styles.length) {
            setGroup(group + 1);
          }
        }}
        style={
          group * 4 + 8 < styles.length
            ? { visibility: 'visible', transform: 'translateX(515%)' }
            : { visibility: 'hidden', transform: 'translateX(515%)' }
        }
        alt="down arrow"
      />
    </div>
  );
};

export default StyleSelector;

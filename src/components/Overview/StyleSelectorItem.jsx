import React from 'react';
import '../../../dist/stylesheets/OverviewStyles.css';

const StyleSelectorItem = ({ style, handleStyleChange, currentStyleID }) => {
  var styleObj = style;
  return (
    <div
      className="style-grid-item"
      onClick={() => {
        handleStyleChange(styleObj);
      }}
    >
      <span
        className="style-grid-item-checkmark material-icons"
        style={
          style.style_id === currentStyleID
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      >
        check_circle
      </span>
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} alt='style image'/>
    </div>
  );
};

export default StyleSelectorItem;

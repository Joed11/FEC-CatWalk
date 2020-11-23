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
      <img
        className="style-grid-item-checkmark"
        src={'./attributes/checkmark.png'}
        style={
          style.style_id === currentStyleID
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
        alt='style checkmark'
      />
      <img className="style-grid-image" src={style.photos[0].thumbnail_url} alt='style image'/>
    </div>
  );
};

export default StyleSelectorItem;

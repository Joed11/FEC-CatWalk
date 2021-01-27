import React, { useState } from 'react';
import '../../../dist/stylesheets/RatingsAndReviews.css';

const Characteristics = (props) => {
  let { Size, Width, Comfort, Quality, Length, Fit } = props.characteristics;
  var returner = [];

  if (Size) {
    returner.push(
      <div>
        <b>Size</b>
        <IndividualCharacteristics key='size' value={Size.value} item='Size' />
      </div>
    );
  }

  if (Width) {
    returner.push(
      <div>
        <b>Width</b>
        <IndividualCharacteristics
          key='width'
          value={Width.value}
          item='Width'
        />
      </div>
    );
  }

  if (Comfort) {
    returner.push(
      <div>
        <b>Comfort</b>
        <IndividualCharacteristics
          key='comfort'
          value={Comfort.value}
          item='Comfort'
        />
      </div>
    );
  }

  if (Quality) {
    returner.push(
      <div>
        <b>Quality</b>
        <IndividualCharacteristics
          key='quality'
          value={Quality.value}
          item='Quality'
        />
      </div>
    );
  }

  if (Length) {
    returner.push(
      <div>
        <b>Length</b>
        <IndividualCharacteristics
          key='length'
          value={Length.value}
          item='Length'
        />
      </div>
    );
  }

  if (Fit) {
    returner.push(
      <div>
        <b>Fit</b>
        <IndividualCharacteristics key='fit' value={Fit.value} item='Fit'/>
      </div>
    );
  }

  return <div>{returner}</div>;
};

const IndividualCharacteristics = (props) => {
  const { value, item } = props;
  let firstDescription, lastDescription, middleDescription;
  let valuePercentage = Math.floor((value / 5) * 100) - 1;
  if (valuePercentage === 33) {
    valuePercentage = 34
  }

  if (valuePercentage === 66) {
    valuePercentage = 67
  }

  if (valuePercentage === 99) {
    valuePercentage = 98
  }

  if (item === 'Size') {
    firstDescription = 'Too Small';
    middleDescription = 'Perfect';
    lastDescription = 'Too Large';
  }

  if (item === 'Width') {
    firstDescription = 'Too Small';
    middleDescription = 'Perfect';
    lastDescription = 'Too Large';
  }

  if (item === 'Comfort') {
    firstDescription = 'Poor';
    middleDescription = 'Okay';
    lastDescription = 'Perfect';
  }

  if (item === 'Quality') {
    firstDescription = 'Poor';
    middleDescription = 'Okay';
    lastDescription = 'Perfect';
  }

  if (item === 'Length') {
    firstDescription = 'Short';
    middleDescription = 'Perfect';
    lastDescription = 'Long';
  }

  if (item === 'Fit') {
    firstDescription = 'Tight';
    middleDescription = 'Perfect';
    lastDescription = 'Loose';
  }

  const parent = {
    display: 'grid',
    gridTemplateColumns: 'repeat(99, 1fr)',
    width: '16vw',
  };

  const colLeft = {
    gridColumnStart: 1,
    gridColumnEnd: 33,
    height: '1vw',
    backgroundSize: 'auto',
    marginTop: '.5vw',
    backgroundImage: 'url(https://i.ibb.co/kc61Vkh/img.png)'
  };

  const colCenter = {
    gridColumnStart: 34,
    gridColumnEnd: 66,
    height: '1vw',
    backgroundSize: 'auto',
    marginTop: '.5vw',
    backgroundImage: 'url(https://i.ibb.co/kc61Vkh/img.png)'
  };
  const colRight = {
    gridColumnStart: 67,
    gridColumnEnd: 99,
    height: '1vw',
    backgroundSize: 'auto',
    marginTop: '.5vw',
    backgroundImage: 'url(https://i.ibb.co/kc61Vkh/img.png)'
  };

  const textCenter = {
    textAlign: 'center',
  };
  const textRight = {
    textAlign: 'right',
  };

  const triangleDown = {
    gridColumnStart: valuePercentage,
    zIndex: 2,
    grid: 'overlay',
    width: 0,
    height: 0,
    borderLeft: '0.5vw solid transparent',
    borderRight: '0.5vw solid transparent',
    borderTop: '0.7vw solid #696969',
    transform: 'translateY(1.3vw)'
  };

  return (
    <div className="single-char-stat" style={parent}>
        <div style={triangleDown}></div>
      <div style={colLeft}>
        <div className="char-label" >{firstDescription}</div>
      </div>
      <div style={colCenter}>
        <div className="char-label" style={textCenter}>{middleDescription}</div>
      </div>
      <div style={colRight}>
        <div className="char-label" style={textRight}>{lastDescription}</div>
      </div>
    </div>
  );
};

export default Characteristics;

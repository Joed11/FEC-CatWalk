import React from 'react';

let CharacteristicsForm = (props) => {
  console.log(props);
  let option1, option2, option3, option4, option5;

  if (props.characteristics === 'Size') {
    option1 = 'A size too small';
    option2 = '½ a size too small';
    option3 = 'Perfect';
    option4 = '½ a size too big';
    option5 = 'A size too wide';
  }

  if (props.characteristics === 'Width') {
    option1 = 'Too narrow';
    option2 = 'Slightly narrow';
    option3 = 'Perfect';
    option4 = 'Slightly wide';
    option5 = 'Too wide';
  }

  if (props.characteristics === 'Comfort') {
    option1 = 'Uncomfortable';
    option2 = 'Slightly uncomfortable';
    option3 = 'Ok';
    option4 = 'Comfortable';
    option5 = 'Perfect';
  }

  if (props.characteristics === 'Quality') {
    option1 = 'Poor';
    option2 = 'Below average';
    option3 = 'What I expected';
    option4 = 'Pretty great';
    option5 = 'Perfect';
  }

  if (props.characteristics === 'Fit') {
    option1 = 'Runs tight';
    option2 = 'Runs slightly tight';
    option3 = 'Perfect';
    option4 = 'Runs slightly long';
    option5 = 'Runs long';
  }

  if (props.characteristics === 'Length') {
    option1 = 'Runs Short';
    option2 = 'Runs slightly short';
    option3 = 'Perfect';
    option4 = 'Runs slightly long';
    option5 = 'Runs long';
  }

  return (
    <div className='radio-for-characteristics'>
    <b>{props.characteristics}</b>
      <form>
        <div className='radio'>
          <label>
            <input type='radio' value='1'/>
            {option1}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='2' />
            {option2}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='3' checked={true}/>
            {option3}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='4' />
            {option4}
          </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' value='5' />
            {option5}
          </label>
        </div>
      </form>
    </div>
  );
};

export default CharacteristicsForm;

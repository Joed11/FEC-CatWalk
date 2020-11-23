import React from 'react';
import '../../../dist/stylesheets/OverviewStyles.css';

const SelectSize = ({ sku }) => {
  return <option value={sku[1]}>{sku[0]}</option>;
};

export default SelectSize;

import StyleSelector from '../../components/Overview/StyleSelector.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';
import changeStyle from '../../actions/changeStyle.js';

const mapStateToProps = (store) => ({
  currentStyles: store.currentStyles,
  currentStyle: store.currentStyle,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleStyleChange: (style) => {
      dispatch(changeStyle(style));
    },
  };
};

var styleSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleSelector);

export default styleSelectorContainer;

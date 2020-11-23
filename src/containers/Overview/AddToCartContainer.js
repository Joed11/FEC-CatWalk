import AddToCart from '../../components/Overview/AddToCart.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  currentStyle: store.currentStyle,
});

var addToCartContainer = connect(mapStateToProps, null)(AddToCart);

export default addToCartContainer;

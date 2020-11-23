import ImageGallery from '../../components/Overview/ImageGallery.jsx';
import store from '../../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
  currentStyle: store.currentStyle,
  currentStyles: store.currentStyles,
});

var imageGalleryContainer = connect(mapStateToProps, null)(ImageGallery);

export default imageGalleryContainer;

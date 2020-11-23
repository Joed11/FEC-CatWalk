import React from "react";
import '../../../../dist/stylesheets/QandAstyles.css';

var AnswerPhotoModal = (props) => {
  var { image } = props;
  return (
    <img className="QandA-photo-modal" src={image} alt="User Submitted Product Photo">
</img>
  );
};

AnswerPhotoModal.propTypes = {};

export default AnswerPhotoModal;
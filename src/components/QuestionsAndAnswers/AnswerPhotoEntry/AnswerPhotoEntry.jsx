import React, { useState } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate.jsx";
import AnswerPhotoModal from "../AnswerPhotoModal/AnswerPhotoModal.jsx";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';


var AnswerPhotoEntry = (props) => {
  //modal toggle
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  let { photo } = props;

  if (!is_url(photo)) {
    photo = './attributes/no-img.png';
  }

  return (
    <div>
      <InteractionTracker widget="QandA" element="Open-answer-image"
           render={({ postInteraction }) => (
      <img className="answer-images" src={photo} alt="User Submitted Product Photo" onClick={() => {
        setIsPhotoOpen(true);
        postInteraction();
      }}></img>
      )} />
      {buildAnswerPhotoModal(isPhotoOpen, setIsPhotoOpen, photo)}
    </div>
  );
};

var buildAnswerPhotoModal = (isOpen, setIsOpen, image) => {
  return (
    <ModalTemplate open={isOpen} onClose={() => setIsOpen(false)}>
      <AnswerPhotoModal image={image} />
    </ModalTemplate>
  )
}

AnswerPhotoEntry.propTypes = {};

export default AnswerPhotoEntry;


const is_url = (str) => {
  const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  }
  return false;
}
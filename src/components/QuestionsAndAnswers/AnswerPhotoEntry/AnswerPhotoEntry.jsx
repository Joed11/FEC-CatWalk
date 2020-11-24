import React, { useState } from "react";
import ModalTemplate from "../ModalTemplate/ModalTemplate.jsx";
import AnswerPhotoModal from "../AnswerPhotoModal/AnswerPhotoModal.jsx";
import InteractionTracker from "../../Utility/InteractionTracker.jsx";
import '../../../../dist/stylesheets/QandAstyles.css';


var AnswerPhotoEntry = (props) => {
  //modal toggle
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  var { photo } = props;
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
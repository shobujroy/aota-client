import React, { useEffect, useState } from "react";
import Styles from "./FaqAota.module.css";
import Image from "next/image";
function QuestionsAns({
  questionNum,
  question,
  answer,
  index,
  ansewerTwo,
  answerThree,
  answerFour,
  answerFIve,
  collapsed,
  setCollapsed,
}) {
  const [modalOpen, setModalOpen] = useState(null);
  const toggle = (index) => {
    if (modalOpen === index) {
      return setModalOpen(null);
    }

    setModalOpen(index);
  };
  return (
    <div className={Styles.qaSection}>
      <div className={Styles.questions}>
        <p>{question}</p>
        <div className={Styles.plusIcon} onClick={() => toggle(index)}>
          {modalOpen === index ? (
            <Image
              src={"/images/x.png"}
              layout="fill"
              objectFit="cover"
              alt=""
            ></Image>
          ) : (
            <Image
              src={"/images/Plus.png"}
              layout="fill"
              objectFit="cover"
              alt=""
            ></Image>
          )}
        </div>
      </div>
      {modalOpen === index ? (
        <>
          <p className={Styles.answerPara}>{answer}</p>
          <p className={Styles.answerPara}>{ansewerTwo}</p>
          <p className={Styles.answerPara}>{answerThree}</p>
          <p className={Styles.answerPara}>{answerFour}</p>
          <p className={Styles.answerPara}>{answerFIve}</p>
        </>
      ) : null}
    </div>
  );
}

export default QuestionsAns;

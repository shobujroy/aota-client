import React, { useEffect, useState } from "react";

import styles from "./FaqAota.module.css";
import QuestionsAns from "./QuestionsAns";

const FaqAota = () => {
  const faq = [
    {
      no: 1,
      q: "What is Aliens on the ave?",
      a: "Aliens on the Ave or AOTA (aye-Oh-tuh) Is a collection of 7,146 Unique Alien & characters living on the Ethereum Blockchain.  Owning an AOTA grants you exclusive access into the Creative Haven. A place where imagination thrives and creativity is explored.",
    },
    {
      no: 2,
      q: "How can I get access to the creative haven?",
      a: "Own an AOTA. ",
    },
    {
      no: 3,
      q: "What plans are there for AOTA?",
      a: "Roadmap is dialed in & we have already been actively working on them.  Stay tuned.  .",
    },
    {
      no: 4,
      q: "What are AOTA?",
      a: "Aliens on the Ave is an algorithmically generated collection ot 7,146 aliens living on the Ethereum Blockchain.  Each AOTA is the result of combining 12 hand drawn images across over 400 attributes.Each AOTA is an original art piece with various rarities amongst the entire collection. Some are more rare than others, and some are completely hand drawn 1 of 1’s.",
    },
    {
      no: 5,
      q: "Will there ever be more Aliens added to the collection?",
      a: "There will never be another alien added to this collection, we do however plan on adding to the universe of AOTA.",
    },
    {
      no: 6,
      q: "Do I own the rights to my AOTA?",
      a: "You own the commercial rights to your AOTA after purchase for as long as you retain ownership.",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {}, [collapsed]);

  return (
    <div className={styles.FaqAota}>
      <div className="container pb-4 pt-4">
        <div className="row">
          <div className={`col-md-5 ${styles.FaqPrime}`}>
            <h1>FAQ AOTA</h1>
            <h3>Prime AOTA NFT’s</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className="col-md-7">
            {faq?.map((q, i) => {
              return (
                <QuestionsAns
                  questionNum={q.no}
                  question={q.q}
                  answer={q.a}
                  index={i}
                  setCollapsed={setCollapsed}
                  collapsed={collapsed}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAota;

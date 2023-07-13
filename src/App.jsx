import React from "react";
import Question from "./Question";

const App = () => {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 3,
      title: "When can I get it?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
  ];
  return (
    <div className="w-96 mx-auto  my-5 text-center">
      <h2 className='font-bold text-2xl py-5'>Frequently Ask Question</h2>
      {questions.map((quest) => {
        return <Question key={quest.id} question={quest}/>;
      })}
    </div>
  );
};

export default App;

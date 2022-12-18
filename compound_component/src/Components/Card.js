import React, { createContext, useContext, useState } from "react";

var CardContext = createContext();

const useCardContext = () => {
  var context = useContext(CardContext);
  if (!context) {
    throw new Error("Child Components cant be referrred outside");
  }
  return context;
};

const Card = ({ children }) => {
    var [toggled,setToggled] = useState(false);
  return (
    <CardContext.Provider value={{ toggled,setToggled }}>
      <div className="Card">{children}</div>
    </CardContext.Provider>
  );
};

const Heading = ({ children }) => {
  var {toggled} = useCardContext();
  //console.log(context);
  console.log(toggled);
  return (<>
  <h2 className="Card__heading">{children}
  </h2>
  <h3>value: {" "+toggled}</h3>
  </>);
};

const Button = ({ children }) => {
  var {setToggled} = useCardContext();

  return <button className="Card__button" onClick={()=> setToggled((prev) => !prev)}>{children}</button>;
};

Card.Heading = Heading;
Card.Button = Button;

export default Card;

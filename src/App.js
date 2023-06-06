

import { useState } from "react";

export default function MyApp() {

  function MyButton() { 
    const [message, setMessage] = useState("");

    
  const setText = (message) => {
    setMessage(message);
  };

  const renderButton = () => {
    return <button disabled={message === ""}>I'm a button</button>;
  };

    return (
      <div>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(event) => setText(event.target.value)}
      />
      {renderButton()}
    </div>
    )
  }

  return (
    <div>
      <MyButton/>
      <MyButton/>

      </div>
  )

}

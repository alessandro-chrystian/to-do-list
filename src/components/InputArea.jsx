import React, {useState} from "react";

function InputArea({onAdd, onReset}) {

  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    setInputText(event.target.value)
  };

  return (
    <div className="form">
      <form onSubmit={(e) => {
        e.preventDefault();
        onAdd(inputText)
        setInputText('')
      }}>
        <input onChange={handleChange} value={inputText} />
          <button type="submit">
            <span>Add</span>
          </button>
      </form>
        <button className="reset-button" onClick={() => {
          setInputText('');
          onReset();
        }}>
          <span>Reset To-do</span>
        </button>
    </div>
  );
}

export default InputArea;

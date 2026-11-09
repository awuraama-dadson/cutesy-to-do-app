interface InputProps {
  input: string;
  setInput: (value: string) => void;
  addTask: () => void;
  showInput : boolean;
}

const Input = ({ input, setInput, addTask , showInput}: InputProps) => {
  return (
    <>
      {showInput && (
        <div className="input-div">
          <input
            className="input"
            type="text"
            value={input}
            placeholder="Read a book💕..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <div className="btn-div">
            <button className="btn" onClick={addTask}>
              Add ✨
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;

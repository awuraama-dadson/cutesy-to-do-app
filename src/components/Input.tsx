interface InputProps {
  input: string;
  setInput: (value: string) => void;
  addTask: () => void;
}

const Input = ({ input, setInput, addTask }: InputProps) => {
  return (
    <>
      <div className="input-div">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="Read a book💕..."
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="btn-div">
          <button className="btn" onClick={addTask}>Add ✨</button>
        </div>
      </div>
    </>
  );
};

export default Input;

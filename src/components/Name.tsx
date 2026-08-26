interface NameProps {
  name: string;
  setName: (value: string) => void;
  showNameDiv: boolean;
  addName: () => void;
}

const Name = ({ name, setName, showNameDiv, addName }: NameProps) => {
  return (
    <>
      {showNameDiv && (
        <div className="name-div">
          <h1>Tell me your name🌸</h1>
          <input
            className="input"
            type="text"
            placeholder="I'd love to know🤍..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={addName} className="save-btn">
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default Name;

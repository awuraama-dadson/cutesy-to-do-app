import Name from "./Name";

interface HeaderProps {
  name: string;
  setName: (value: string) => void;
  showNameDiv: boolean;
  showHeaderDiv: boolean;
  addName: () => void;
}

const Header = ({ name, setName, showNameDiv , showHeaderDiv, addName}: HeaderProps) => {
  return (
    <>
      <Name name={name} setName={setName} showNameDiv={showNameDiv} addName={addName} />
      {showHeaderDiv && (
        <div className="header">
          <div className="header-divs">Hi {name} ! 💗</div>
          <div className="header-divs">Let's plan✨</div>
        </div>
      )}
    </>
  );
};

export default Header;

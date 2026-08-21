interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="header-divs">Hi {name} ! 💗</div>
        <div className="header-divs">Let's plan✨</div>
      </div>
    </>
  );
};

export default Header;

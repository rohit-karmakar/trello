import "./titlebar.css";

const TitleBar = ({ title }) => {
  return (
    <div className="titlebar">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBar;

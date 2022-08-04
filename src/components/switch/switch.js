// Import styling for this page
import "./switch.css";

function Switch() {
  // Store the state of dark/light mode in local storage


  const switcher = () => {
    localStorage.setItem(
      "dark",
      window.document.body.classList[0] === "dark" ? false : true
    );
    window.document.body.classList.toggle("dark");
  };

  return (
    <div className="switch" onClick={switcher} data-testid="themeSwitcher">
      <div className="material">emoji_objects</div>
    </div>
  );
}

export default Switch;

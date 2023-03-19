import "./copyButton.css";

const CopyButton = (props) => {
  const copyCss = (val) => {
    navigator.clipboard.writeText(val);
  };

  return (
    <button className="button-div" onClick={() => copyCss(props.val)}>
      <i class="fa-regular fa-copy"></i>
    </button>
  );
};

export default CopyButton;

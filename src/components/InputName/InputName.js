import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import userActions from "../../redux/user/user-actions";

const InputName = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("Please enter your name");
      return;
    }
    onSubmit(name);
    history.push("/todos");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (abc) => dispatch(userActions.login(abc)),
});

export default connect(null, mapDispatchToProps)(InputName);

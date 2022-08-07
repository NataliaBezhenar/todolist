import { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../redux/user/user-actions";

const InputName = (props) => {
  console.log(props);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name);
    props.onSubmit(name);
    setName("");
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

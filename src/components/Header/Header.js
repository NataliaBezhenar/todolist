import { connect } from "react-redux";

const Header = (props) => {
  return (
    <header>
      <h2>Welcome, {props.username} </h2>
    </header>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps, null)(Header);

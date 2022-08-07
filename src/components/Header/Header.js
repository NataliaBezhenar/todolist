import { connect } from "react-redux";

const Header = ({ username }) => {
  return (
    <header>
      <h2>Welcome, {username}</h2>
    </header>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username.name,
});

export default connect(mapStateToProps, null)(Header);

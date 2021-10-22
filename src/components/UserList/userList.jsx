import React from "react";
import { connect } from "react-redux";

const UserList = (props) => {
  const { users, isLoading, error } = props;
  return (
    <section>
      <h1>Список пользователей</h1>
      {isLoading && <div>ГРУЗИМСЯ</div>}
      {error && <div>{error.message}}</div>}
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>id: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(UserList);

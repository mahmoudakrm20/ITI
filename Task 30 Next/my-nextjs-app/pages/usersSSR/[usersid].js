import React from "react";

export default function usersid({ user }) {
  console.log(user)
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr key={user[0].id}>
                <td>{user[0].id}</td>
                <td>{user[0].name}</td>
                <td>{user[0].username}</td>
                <td>{user[0].email}</td>
                <td>{user[0].phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { usersid } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${usersid}`
  );
  const data = await res.json();
  return { props: { user: data } };
}

export default function userid({ userData }) {
  return (
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
            <tr key={userData.id}>
              <td>{userData.id}</td>
              <td>{userData.name}</td>
              <td>{userData.username}</td>
              <td>{userData.email}</td>
              <td>{userData.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const { userid } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  const data = await res.json();
  return { props: { userData: data }, revalidate: 10 };
}
export function getStaticPaths() {
  return {
    paths: [
      { params: { userid: "1" } },
      {
        params: { userid: "2" },
      },
    ],
    fallback: true,
  };
}

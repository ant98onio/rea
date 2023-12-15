/* eslint-disable react/prop-types */
function UserList({ data }) {
  return (
    <>
      <h2>LISTA DI UTENTI</h2>
        {/* MODO RUDIMENTALE */}
        {/* {data.map(function(user) {
          return <article>{user.nome}</article>
        })} */}
        {/* {data.map((user) => {
          return <article>{user.nome}</article>
        })} */}
        {/* {data.map((user) => <article>{user.nome}</article>)} */}
        {data.map((user) => (
          <article key={user.id}>{user.nome}</article>
        ))}
    </>
  )
}

export default UserList
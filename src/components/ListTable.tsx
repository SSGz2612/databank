// css
import '../index.css';

const ListTable = () => {

  return (
    <>
      <nav>
        <button>Add</button>
      </nav>

      <div className='content'>
        <table>
          <tbody>
            <tr className='nav'>
              <th></th>
              <th>Company</th>
              <th>Name</th>
              <th>Additional</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Country</th>
              <th>IBAN</th>
              <th>BIC</th>
              <th>Bank Name</th>
              <th>Fax</th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Homepage</th>
            </tr>
            {/* { users.map((user: userInfo) => {
              const {
                company, name, additional, street,
                postalCode, country, iban, bic, bankName,
                fax, email, birthday, homepage
              } = user;
              return (
                <tr key={name}>
                  <td
                    onClick={() => dispatch(removeUserAction(name))}
                    key={`delete-${name}`}
                  >
                    <div className='trashIcon'></div>
                  </td>
                  <td>{ company }</td>
                  <td>{ name }</td>
                  <td>{ additional }</td>
                  <td>{ street }</td>
                  <td>{ postalCode }</td>
                  <td>{ country }</td>
                  <td>{ iban }</td>
                  <td>{ bic }</td>
                  <td>{ bankName }</td>
                  <td>{ fax }</td>
                  <td>{ email }</td>
                  <td>{ birthday }</td>
                  <td>{ homepage }</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTable;

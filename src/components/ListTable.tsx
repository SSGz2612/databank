import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeList } from '../redux/slice';
// css
import '../index.css';

const ListTable = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.users.list );

  return <>
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
          { selector.map((user) => {
            return <>
              <tr key={ user.id }>
                <td
                  onClick={() => dispatch(removeList(user.id))}
                >
                  <div className='trashIcon'></div>
                </td>
                <td>{ user.company }</td>
                <td>{ user.name }</td>
                <td>{ user.additional }</td>
                <td>{ user.street }</td>
                <td>{ user.postalCode }</td>
                <td>{ user.country }</td>
                <td>{ user.iban }</td>
                <td>{ user.bic }</td>
                <td>{ user.bankName }</td>
                <td>{ user.fax }</td>
                <td>{ user.email }</td>
                <td>{ user.birthday }</td>
                <td>{ user.homepage }</td>
              </tr>
              </>
          })}
        </tbody>
      </table>
    </div>
  </>
};

export default ListTable;

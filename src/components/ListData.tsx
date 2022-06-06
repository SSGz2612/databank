import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeList } from '../redux/slice';
// css
import '../index.css';

const ListData = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.users.list );

  return <>
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
  </>
};

export default ListData;
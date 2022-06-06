import { useState } from 'react';
import AddData from './AddData';
// redux
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeList } from '../redux/slice';
// css
import '../index.css';
import ListData from './ListData';

const ListTable = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const toogleModal = () => setIsModalOpen(!isModalOpen);

  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.users.list );

  return <>
    <AddData isOpen={ isModalOpen } onClose={ toogleModal }>
    </AddData>
    <nav>
      <button onClick={ toogleModal }>Add</button>
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
          <ListData />
        </tbody>
      </table>
    </div>
  </>
};

export default ListTable;

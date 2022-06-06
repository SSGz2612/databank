import { useState } from 'react';
// redux
import { useAppDispatch } from '../redux/hooks';
import { userInfo } from '../redux/model';
// react form
import { useForm } from 'react-hook-form';
import FormInvAddress from './FormInvAddress';
import DataBank from './DataBank';
import Contact from './Contact';

// modal
import { ModalProps } from '../redux/model';
// css
import '../index.css';
import { setList } from '../redux/slice';

type UI = userInfo;

const AddData: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [ page, setPage ] = useState(0);
  const FormTitles = ["Invoice Address", "Bank Data", "Contact"];

  const dispatch = useAppDispatch();
  const { register, handleSubmit, trigger, formState: { errors, isValid }} = useForm<UI>({ mode: "all" });
  
  const onSubmit = handleSubmit((data) => {
    dispatch(setList(data));
    onClose();
  });

  return isOpen ? (<div className="viewModal">
    <div className='modalContent'>
      <form onSubmit={ onSubmit }>
        <div className="contentForm">
          <div className="closeX" onClick={ onClose }>x</div>
          <div className="labels">
          <div className="titleTxt">{ FormTitles[page] }</div>
            { page === 0 && (<>
              <FormInvAddress />
            </>)}

            { page === 1 && (<>
              <DataBank />
            </>)}

            { page === 2 && (<>
              <Contact />
            </>)}
          </div>

          <div className="labelButton">
            <button className="button2" onClick={ onClose }>Cancel</button>

            { page !== 0 && (<div className="button2 textCancel" onClick={() => { setPage((x) => x - 1)}}
            >Previous</div>)}
            
            { page !== 2 && (<button className="button1" type="button" disabled={ !isValid } onClick={() => { setPage((x) => x + 1)}}
            >Next</button>)}
            
            { page === 2 && (<>
            <button
              className="button1"
              type="submit"
              value="submit"
              onClick={ async() => {
                const out = await trigger(["additional", "name", "bic", "iban"]);
                // console.log( out );
                if ( out === true ) {
                  onSubmit();
                }
                console.log( errors );
                }}>Save</button>
            </>)}
          </div>
        </div>
      </form>
    </div>
  </div>) : null
};

export default AddData;

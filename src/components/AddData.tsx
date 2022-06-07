import { useState } from 'react';
// redux
import { useAppDispatch } from '../redux/hooks';
import { userInfo } from '../redux/model';
import { setList } from '../redux/slice';
// react form
import { useForm, FormProvider } from 'react-hook-form';
import InvAddress from './formsteps/InvAddress';
// modal
import { ModalProps } from '../redux/model';
// css
import '../index.css';
import DataBank from './formsteps/DataBank';
import Contact from './formsteps/Contact';

type UI = userInfo;

interface FormFields {
  id: number;
  company: string;
  name: string;
  additional: string;
  street: string;
  postalCode: string;
  country: string;
  iban: string;
  bic: string;
  bankName: string;
  fax: string;
  email: string;
  birthday: string;
  homepage: string;
}

const AddData: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [ page, setPage ] = useState(0);
  const FormTitles = ["Invoice Address", "Bank Data", "Contact"];

  const dispatch = useAppDispatch();
  
  const methods = useForm<FormFields>();
  const onSubmit = (data: FormFields) => {
    console.log( data );
    dispatch(setList( data ));
    onClose();
  };
  
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid }
  } = useForm<UI>({ mode: "all" });

  return isOpen ? (<div className="viewModal">
    <div className='modalContent'>
      <form onSubmit={methods.handleSubmit( onSubmit )}>
      <FormProvider {...methods}>
        <div className="contentForm">
          <div className="closeX" onClick={ onClose }>x</div>
          <div className="labels">
          <div className="titleTxt">{ FormTitles[page] }</div>
            { page === 0 && (<>
              <InvAddress />
              <div className="labelButton">
                <button className="button2" onClick={ onClose }>Cancel</button>
                <button className="button1" type="button" disabled={ !isValid } onClick={ async() => {
                  const out = await trigger(['name', 'company']);
                  console.log( out );
                  if( out === true ) {
                    setPage((x) => x + 1)}}
                  }
                >Next</button>
              
                <button className="button1" type="submit" value="submit" onClick={() => onSubmit }>Save</button>
              </div>
            </>)}

            { page === 1 && (<>
              <DataBank />
              <div className="labelButton">
                <button className="button2" onClick={ onClose }>Cancel</button>
                
                <div className="button2 textCancel" onClick={() => { setPage((x) => x - 1)}}>Previous</div>
              
                <button className="button1" type="button" disabled={ !isValid } onClick={ async() => {
                  const out = await trigger(['iban', 'bic', 'bankName']);
                    console.log( out );
                    if( out === true ) {
                      setPage((x) => x + 1)
                    }}
                  }
                >Next</button>
              
                <button className="button1" type="submit" value="submit" onClick={() => onSubmit }>Save</button>
              </div>
              </>)}

            { page === 2 && (<>
              <Contact />
              <div className="labelButton">
                <button className="button2" onClick={ onClose }>Cancel</button>
                <div className="button2 textCancel" onClick={() => { setPage((x) => x - 1)}}>Previous</div>
              
                <button className="button1" type="submit" value="submit" onClick={() => onSubmit }>Save</button>
              </div>
            </>)}
          </div>
        </div>
      </FormProvider>
      </form>
    </div>
  </div>) : null
};

export default AddData;

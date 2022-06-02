import { useState } from 'react';
// redux
import { useAppDispatch } from '../redux/hooks';
import { userInfo } from '../redux/model';
// react form
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, formState: { errors, isValid }} = useForm<UI>({ mode: "all" });
  
  const onSubmit = handleSubmit((data) => {
    dispatch(setList(data));
  });

  return isOpen ? (<div className="viewModal">
    <div className='modalContent'>
      <form onSubmit={ onSubmit }>
        <div className="contentForm">
          <div className="closeX" onClick={ onClose }>x</div>
          <div className="labels">
          <div className="titleTxt">{ FormTitles[page] }</div>
            { page === 0 && (<>
              {/* *** company *** */}
              <div className="labelInput">
                <label htmlFor="company">Company</label>
                <div className="dirCol">
                  <input { ...register("company", { required: true, maxLength: 100 })} id="company" />
                  <div className="required">{ errors.company && "This is required!" }</div>
                </div>
              </div>

              {/* *** name *** */}
              <div className="labelInput">
                <label htmlFor="name">Name</label>
                <div className="dirCol">
                  <input { ...register("name", { required: true, maxLength: 30 })} id="name" />
                  <div className="required">{ errors.name && "This is required!" }</div>
                </div>
              </div>

              {/* *** additional *** */}
              <div className="labelInput">
                <label htmlFor="additional">Additional</label>
                <input { ...register("additional")} id="additional" />
              </div>

              {/* *** street *** */}
              <div className="labelInput">
                <label htmlFor="street">Street</label>
                <input { ...register("street")} id="street" />
              </div>
              
              {/* *** postal code *** */}
              <div className="labelInput">
                <label htmlFor="postalCode">Postal Code</label>
                <input { ...register("postalCode")} id="postalCode" />
              </div>

              {/* *** country *** */}
              <div className="labelInput">
                <label htmlFor="country">Country</label>
                <select { ...register("country")} id="country">
                  <option value=""></option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                  <option value="Poland">Poland</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Russian">Russian</option>
                  <option value="United kingdom">United kingdom</option>
                  <option value="Ireland">Ireland</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Egipt">Egipt</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Turkey">Turkey</option>
                  <option value="EUA">EUA</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                </select>
              </div>
            </>)}

            { page === 1 && (<>
              {/* *** iban *** */}
              <div className="labelInput">
                <label htmlFor="iban">IBAN</label>
                <div className="dirCol">
                  <input { ...register("iban", { required: true, maxLength: 30 })} id="iban" />
                  <div className="required">{ errors.iban && "This is required!" }</div>
                </div>
              </div>

              {/* *** bic *** */}
              <div className="labelInput">
                <label htmlFor="bic">BIC</label>
                <div className="dirCol">
                  <input { ...register("bic", { required: true, maxLength: 30 })} id="bic" />
                  <div className="required">{ errors.bic && "This is required!" }</div>
                </div>
              </div>

              {/* *** bankname *** */}
              <div className="labelInput">
                <label htmlFor="bankName">Bank Name</label>
                <div className="dirCol">
                  <input { ...register("bankName", { required: true, maxLength: 30 })} id="bankName" />
                  <div className="required">{ errors.bankName && "This is required!" }</div>
                </div>
              </div>
            </>)}

            { page === 2 && (<>
              {/* *** fax *** */}
              <div className="labelInput">
                <label htmlFor="fax">Fax</label>
                <input { ...register("fax")} id="fax" />
              </div>

              {/* *** email *** */}
              <div className="labelInput">
                <label htmlFor="email">E-mail</label>
                <input type="email" { ...register("email")} id="email" />
              </div>

              {/* *** birthday *** */}
              <div className="labelInput">
                <label htmlFor="birthday">Birthday</label>
                <input type="date" { ...register("birthday")} id="birthday" />
              </div>

              {/* *** homepage *** */}
              <div className="labelInput">
                <label htmlFor="homepage">Homepage</label>
                <input { ...register("homepage")} id="homepage" />
              </div>
            </>)}
          </div>

          <div className="labelButton">
            <button className="button2" onClick={ onClose }>Cancel</button>

            { page !== 0 && (<div className="button2 textCancel" onClick={() => { setPage((x) => x - 1)}}
            >Previous</div>)}
            
            { page !== 2 && (<button className="button1" type="button" disabled={ !isValid } onClick={() => { setPage((x) => x + 1)}}
            >Next</button>)}
            
            { page === 2 && (<>
            <button className="button1" type="submit" value="submit">Save</button>
            </>)}
          </div>
        </div>
      </form>
    </div>
  </div>) : null
};

export default AddData;

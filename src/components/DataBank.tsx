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

const DataBank: React.FC = () => {
    const { register, formState: { errors }} = useForm<UI>({ mode: "all" });

    return (<>
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
    </>)
};

export default DataBank;
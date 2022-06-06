import { useAppDispatch } from '../redux/hooks';
import { userInfo } from '../redux/model';
// react form
import { useForm } from 'react-hook-form';
// css
import '../index.css';

type UI = userInfo;

const FormInvAddress: React.FC = () => {
    const { register, formState: { errors }} = useForm<UI>({ mode: "all" });

    return (<>
        <div className="labels">
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
        </div>
    </>)
};

export default FormInvAddress;

import { userInfo } from '../redux/model';
// react form
import { useForm } from 'react-hook-form';
// css
import '../index.css';

type UI = userInfo;

const Contact: React.FC = () => {
    const { register } = useForm<UI>({ mode: "all" });

    return (<>
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
    </>)
};

export default Contact;
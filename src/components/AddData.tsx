// redux
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { userInfo } from '../redux/model';
// react form
import { useForm } from 'react-hook-form';
// css
import '../index.css';
import { setList } from '../redux/slice';

type UI = userInfo;

const AddData = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(() => {});
  const { register, handleSubmit, formState: { errors }} = useForm<UI>();
  

  const onSubmit = handleSubmit((data) => { dispatch(setList(data))});

  return (
    <div className='modalContent'>
      <form onSubmit={ onSubmit }>
        <label htmlFor="company">Company:</label>
        <input { ...register("company", { required: true, maxLength: 100 })} id="company" />
        { errors.company && <p>This is required!</p>}

        <label htmlFor="name">Name:</label>
        <input { ...register("name", { required: true, maxLength: 30 })} id="name" />

        <label htmlFor="additional">Additional:</label>
        <input { ...register("additional")} id="additional" />

        <label htmlFor="street">Street:</label>
        <input { ...register("street")} id="street" />

        <label htmlFor="postalCode">Postal Code:</label>
        <input { ...register("postalCode")} id="postalCode" />

        <label htmlFor="country">Country</label>
        <select { ...register("country")} id="country">
          <option value="">Select...</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Paraguay">Paraguay</option>
        </select>
        
        <input type="submit" value="Submit" />
      </form>

      <div>{}</div>
    </div>
  );
};

export default AddData;

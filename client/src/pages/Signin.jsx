import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD




=======
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
export default function SignIn() {

  const [formData, setFormData] = useState({});
<<<<<<< HEAD

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

=======
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const {loading,error}=useSelector((state)=> state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.id]: e.target.value });

  };




  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
<<<<<<< HEAD

      setLoading(true);

      setError(false);

=======
      dispatch(signInStart());
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
      const res = await fetch('/api/auth/signin', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(formData),

      });

      const data = await res.json();
<<<<<<< HEAD

      setLoading(false);

      if (data.success === false) {

        setError(true);

=======
      if (data.success === false) {
        dispatch(signInFailure(data));
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
        return;

      }
<<<<<<< HEAD

=======
      dispatch(signInSuccess(data));
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
      navigate('/');

    } catch (error) {
<<<<<<< HEAD

      setLoading(false);

      setError(true);

=======
      dispatch(signInFailure(error));
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
    }

  };

  return (

    <div className='p-3 max-w-lg mx-auto'>

      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input

          type='email'

          placeholder='Email'

          id='email'

          className='bg-slate-100 p-3 rounded-lg'

          onChange={handleChange}

        />

        <input

          type='password'

          placeholder='Password'

          id='password'

          className='bg-slate-100 p-3 rounded-lg'

          onChange={handleChange}

        />

        <button

          disabled={loading}

          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'

        >

          {loading ? 'Loading...' : 'Sign In'}

        </button>

      </form>

      <div className='flex gap-2 mt-5'>

        <p>Dont Have an account?</p>

        <Link to='/signup'>

          <span className='text-blue-500'>Sign up</span>

        </Link>

      </div>
<<<<<<< HEAD

      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>

=======
      <p className='text-red-700 mt-5'>
        {error ? error.message  || 'Something went wrong!' : ''}
        </p>
>>>>>>> 77e46b4ceb3e7a164ffd817598a2246c9e5ec283
    </div>

  );

}
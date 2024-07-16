import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="container bg-Green(lighter) mx-auto mt-10 p-12 lg:px-60">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
      />
      <Form />
    </div>
  );
}

function Form() {
  const [status, setStatus] = useState('typing'); // typing, submitting, error, success
  const [errors, setErrors] = useState({});
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    inqury: '',
    consent: false,
  });

  const validate = () => {
    let newErrors = {};
    if (!person.firstName) newErrors.firstName = 'fistName is required!';
    if (!person.lastName) newErrors.lastName = 'lastName is required!';

    if (!person.email) {
      newErrors.email = 'Email is required!';
    } else if (!/\S+@\S+\.\S+/.test(person.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!person.message)
      newErrors.message = 'Message is required. Tell us more about yourself';
    if (!person.inqury) newErrors = 'Please your inqury is needed';
    if (!person.consent)
      newErrors = 'Please you are must consent to be contacted';
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validatorError = validate();
    console.log(validatorError);
    if (Object.keys(validatorError).length > 0) {
      setErrors(validatorError);
      return;
    }

    setStatus('submitting');
    setErrors({});
    submitForm(person)
      .then(() => {
        toast.success(
          "Thanks for completing the form. We'll be in touch soon!"
        );
        setPerson({ firstName: '', lastName: '', email: '', message: '' });
        setStatus('typing');
      })
      .catch((error) => {
        setErrors(error.message);
      });
  }

  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };
  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };
  const handleMessageChange = (e) => {
    setPerson({
      ...person,
      message: e.target.value,
    });
  };

  const handleInquryChange = (e) => {
    const { type, value } = e.target;
    setPerson({
      ...person,
      inqury: type === 'radio' ? value : '',
    });
  };
  const handleConsentChange = (e) => {
    const { type, value } = e.target;
    setPerson({
      ...person,
      consent: type === 'checkbox' ? value : '',
    });
  };

  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div>
      <form
        className="bg-white min-h-screen rounded-2xl p-10"
        onSubmit={handleSubmit}
        onKeyDown={handleKeydown}
      >
        <h1 className="text-6xl text-Grey(darker) font-karla font-bold tracking-tighter mb-10">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row lg:mx-auto lg:gap-8">
          <div className="flex flex-col gap-4 mb-8 lg:w-1/2">
            <label className="text-3xl font-karla text-Grey(darker) ">
              First Name <span className="text-Green(medium) p-4">*</span>
            </label>
            <input
              type="text"
              name="last name"
              value={person.firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
              aria-required="true"
              required
              disabled={status === 'submitting'}
              className="form-control border-2 text-2xl text-Grey(medium) rounded-2xl w-full placeholder-first p-4 border-gray-300 cursor-pointer focus: outline-none hover:border-Green(medium) hover:transition transform duration-300 ease-in-out"
            />
            {errors.firstName && (
              <p style={{ color: 'hsl(0, 66%, 54%)' }}>{errors.firstName}</p>
            )}
          </div>
          <div className="flex flex-col gap-4 mb-8 lg:w-1/2">
            <label className="text-3xl font-karla  text-Grey(darker)">
              Last Name <span className="text-Green(medium) p-4">*</span>
            </label>
            <input
              type="text"
              name="last name"
              value={person.lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
              aria-required="true"
              required
              disabled={status === 'submitting'}
              className="form-control border-2 cursor-pointer text-2xl text-Grey(medium) rounded-2xl w-full p-4 border-gray-300 focus: outline-none hover:border-Green(medium) hover:transition transform duration-300 ease-in-out"
            />
            {errors.lastName && (
              <p style={{ color: 'hsl(0, 66%, 54%)' }}>{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <label className="text-3xl font-karla text-Grey(darker)">
            Email Address <span className="text-Green(medium) p-4">*</span>
          </label>
          <input
            type="text"
            name="email"
            value={person.email}
            onChange={handleEmailChange}
            placeholder="Enter your a valid email address"
            disabled={status === 'submitting'}
            aria-required="true"
            required
            className="form-control border-2 cursor-pointer text-2xl text-Grey(medium) rounded-2xl w-full p-4 border-gray-300 focus: outline-none hover:border-Green(medium) hover:transition transform all duration-300 ease-in-out"
          />
          {errors.email && (
            <p style={{ color: 'hsl(0, 66%, 54%)' }}>{errors.email}</p>
          )}
        </div>
        <label className="text-3xl font-karla text-Grey(darker)">
          Query Type <span className="text-Green(medium) p-4">*</span>
        </label>
        <div className="flex flex-col mb-8 mt-4 lg:flex-row gap-8 lg:mx-auto">
          <div className="flex-1 border-2 p-4 radiobutton hover:bg-Green(lighter) rounded-2xl lg:w-1/2  lg:inline-block hover:border-Green(medium) hover:transition transform all duration-300 ease-in-out">
            <label className="inline-flex relative items-center gap-8 text-xl text-Grey(darker)">
              <input
                type="radio"
                name="inqury"
                value="General Enqury"
                onChange={handleInquryChange}
                checked={person.inqury === 'General Enqury'}
                className="form-check-input inline-block cursor-pointer focus:outline-non"
              />
              General Enqury
            </label>
          </div>
          <div className="flex-1 border-2 radiobutton hover:bg-Green(lighter) p-4 radio_button rounded-2xl lg:w-1/2 lg:inline-block hover:border-Green(medium) hover:transition transform all duration-300 ease-in-out">
            <label className="inline-flex relative items-center gap-6 text-xl text-Grey(darker) ">
              <input
                type="radio"
                name="inqury"
                value="Support Request"
                onChange={handleInquryChange}
                checked={person.inqury === 'Support Request'}
                className="inline-block form-check-input"
              />
              Support Request
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <label className="text-3xl font-karla  text-Grey(darker)">
            Messages <span className="text-Green(medium) p-4">*</span>
          </label>
          <textarea
            rows="1"
            cols="20"
            type="text"
            name="message"
            required
            value={person.message}
            disabled={status === 'submitting'}
            aria-required="true"
            placeholder="Tell us more about yourself"
            onChange={handleMessageChange}
            className="form-control border-2 cursor-pointer text-2xl text-Grey(medium) rounded-md w-full p-2 border-gray-300 focus: outline-none hover:border-Green(medium) hover:transition transform duration-300 ease-in-out"
          />
          {errors.message && (
            <p style={{ color: 'hsl(0, 66%, 54%)' }}>{errors.message}</p>
          )}
        </div>

        <div className="flex gap-6 mb-6 checkboxbutton">
          <input
            type="checkbox"
            name="consent"
            value="consent"
            onChange={handleConsentChange}
            checked={person.consent === 'consent'}
            required
            className="form-check-input bg-Grey(medium)"
          />
          <label className="text-2xl text-Grey(darker) tracking-tight leading-6">
            I consent to being contacted by the team
          </label>
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-block w-full cursor-pointer text-white text-2xl bg-Green(medium) p-4 rounded-2xl hover:bg-Grey(darker) transition transform duration-200 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function submitForm(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.firstName && data.lastName && data.email && data.message) {
        resolve();
      } else {
        reject(new Error('Please fills out all the input fields!'));
      }
    }, 1500);
  });
}

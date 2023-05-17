import Header from '../components/Header';
import contactHeaderBackground from '../../src/assets/img/contact-bg.jpg';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //Handle your form submit here
        alert('Thank you');
    };
    return (
        <>
            <Header
                header='Contact Me'
                subHeading='Have questions? I have answers.'
                backgroundImage={contactHeaderBackground}
            />
            <main className='mb-4'>
                <div className='container px-4 px-lg-5'>
                    <div className='row gx-4 gx-lg-5 justify-content-center'>
                        <div className='col-md-10 col-lg-8 col-xl-7'>
                            <p>
                                Want to get in touch? Fill out the form below to
                                send me a message and I will get back to you as
                                soon as possible!
                            </p>
                            <div className='my-5'>
                                <form
                                    id='contactForm'
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className='form-floating'>
                                        <input
                                            className='form-control'
                                            id='name'
                                            type='text'
                                            placeholder='Enter your name...'
                                            required
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <label htmlFor='name'>Name</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input
                                            className='form-control'
                                            id='email'
                                            type='email'
                                            placeholder='Enter your email...'
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <label htmlFor='email'>
                                            Email address
                                        </label>
                                        <div
                                            className='invalid-feedback'
                                            data-sb-feedback='email:required'
                                        >
                                            An email is required.
                                        </div>
                                    </div>
                                    <div className='form-floating'>
                                        <input
                                            className='form-control'
                                            id='phone'
                                            type='tel'
                                            required
                                            placeholder='Enter your phone number...'
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                        <label htmlFor='phone'>
                                            Phone Number
                                        </label>
                                    </div>
                                    <div className='form-floating'>
                                        <textarea
                                            className='form-control'
                                            id='message'
                                            placeholder='Enter your message here...'
                                            style={{ height: '12rem' }}
                                            required
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        ></textarea>
                                        <label htmlFor='message'>Message</label>
                                    </div>
                                    <br />

                                    <button
                                        className='btn btn-primary text-uppercase'
                                        type='submit'
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;

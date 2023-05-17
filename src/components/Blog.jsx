import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <div className='post-preview'>
                <Link to='blog/1'>
                    <h2 className='post-title'>Failure is not an option</h2>
                    <h3 className='post-subtitle'>
                        Many say exploration is part of our destiny, but it’s
                        actually our duty to future generations.
                    </h3>
                </Link>
                <p className='post-meta'>
                    Posted by
                    <a href='#!'>Start Bootstrap</a>
                    on July 8, 2023
                </p>
            </div>
            <hr className='my-4' />
        </>
    );
};

export default Blog;

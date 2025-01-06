import action from '../../../assets/action.jpg';
import drama from '../../../assets/drama.png';
import horror from '../../../assets/ghost-in-the-dark-scary-woods-human-silhouette-walking-in-forest-photo.jpg';
import animation from '../../../assets/animation.png';
import comedy from '../../../assets/comedy.png';

import { useEffect, useState } from "react";
import useAxios from '../../../hooks/useAxios';

const Categoryes = () => {
    const axios = useAxios();
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        axios.get('/movies?category=genre')
            .then(res => setGenre(res.data))
    }, []);
    console.log(genre[0]);
    
    return (
        <div className='space-y-5'>
            <h2 className="text-secondaryColor"><span className="text-textColor dark:text-white">Movie</span> <span className="underline underline-offset-8">Genre</span></h2>
            
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-7'>

                <div className="card bg-base-100 image-full shadow-md rounded-none">
                    <figure>
                        <img
                            src={action}
                            alt=""
                            className='w-full'
                        />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                        <div className="card-actions">
                            <span className='bg-primaryColor px-8 py-3 text-textColor border-x-4 capitalize'>{genre[0]}</span>
                        </div>
                    </div>
                </div>{/* action */}

                <div className="card bg-base-100 image-full shadow-md rounded-none">
                    <figure>
                        <img
                            src={drama}
                            alt=""
                            className='w-full'
                        />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                        <div className="card-actions">
                            <span className='bg-primaryColor px-8 py-3 text-textColor border-x-4 capitalize'>{genre[1]}</span>
                        </div>
                    </div>
                </div>{/* action */}

                <div className="card bg-base-100 image-full shadow-md rounded-none">
                    <figure>
                        <img
                            src={horror}
                            alt=""
                            className='w-full'
                        />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                        <div className="card-actions">
                            <span className='bg-primaryColor px-8 py-3 text-textColor border-x-4 capitalize'>{genre[2]}</span>
                        </div>
                    </div>
                </div>{/* action */}

                <div className="card bg-base-100 image-full shadow-md rounded-none">
                    <figure>
                        <img
                            src={animation}
                            alt=""
                            className='w-full'
                        />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                        <div className="card-actions">
                            <span className='bg-primaryColor px-8 py-3 text-textColor border-x-4 capitalize'>{genre[3]}</span>
                        </div>
                    </div>
                </div>{/* action */}

                <div className="card bg-base-100 image-full shadow-md rounded-none">
                    <figure>
                        <img
                            src={comedy}
                            alt=""
                            className='w-full'
                        />
                    </figure>
                    <div className="card-body flex justify-center items-center">
                        <div className="card-actions">
                            <span className='bg-primaryColor px-8 py-3 text-textColor border-x-4 capitalize'>{genre[4]}</span>
                        </div>
                    </div>
                </div>{/* action */}

            </div>{/* flex */}
        </div>
    );
};

export default Categoryes;
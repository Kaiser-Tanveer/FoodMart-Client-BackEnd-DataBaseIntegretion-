import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItems.css'

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-24 top-1/3 text-left pb-10">
                <h1 className='text-white text-6xl font-bold hidden md:block'> HEALTHY &<br />
                    DELICIOUS<br />
                    FOODS EVER
                </h1>
            </div>
            <div className="absolute pt-8 text-left w-2/5 flex transform -translate-y-1/2 left-24 top-1/3 lg:top-1/2">
                <p className='md:hidden lg:block text-xl text-white'>There are many variant of FOODS are available<span className='hidden lg:inline'>, But majority have suffered alteration in some forms</span></p>
            </div>
            <div className="absolute w-2/5 flex transform -translate-y-1/2 left-24 top-3/4">
                <Link to="/services"><button className="btn btn-outline btn-warning">All Services</button></Link>
            </div>
        </div>
    );
};

export default BannerItems;
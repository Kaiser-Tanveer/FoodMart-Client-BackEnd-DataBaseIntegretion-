import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';
import './FoodCards.css';

const FoodCards = () => {
    const foods = useLoaderData();
    console.log(foods);
    return (
        <div className='foodBg py-20'>
            <h1 className=' mb-10 text-5xl text-white font-bold'>Welcome to <span className='text-primary'>FoodMart</span>!!!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    foods.map(food => <Cards
                        key={food._id}
                        food={food}
                    />)
                }
            </div>
            <button className='btn btn-primary mt-10'>See All</button>
        </div>
    );
};

export default FoodCards;
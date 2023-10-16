import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const CoffeeCard = ({coffee}) => {
    const {name, photo,supplier, chef} = coffee;
    return (
        <div className='flex justify-around items-center rounded-md bg-[#F4F3F0]'>
            <div>
                <img src={photo} alt="" className='w-48' />
            </div>
            <div>
                <p className='font-semibold text-lg'>Name: <span className='font-normal'>{name}</span></p>
                <p className='font-semibold text-lg'>Chef: <span className='font-normal'>{supplier}</span></p>
                <p className='font-semibold text-lg'>Price: <span className='font-normal'>{chef}</span></p>
            </div>
            <div className='flex flex-col gap-3'>
                <button className='text-white bg-[#D2B48C] p-2 text-xl rounded-md'><AiFillEye></AiFillEye></button>
                <button className='text-white bg-[#3C393B] p-2 text-xl rounded-md'><BiSolidPencil></BiSolidPencil></button>
                <button className='text-white bg-[#EA4744] p-2 text-xl rounded-md'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
};

export default CoffeeCard;
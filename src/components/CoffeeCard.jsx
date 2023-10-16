import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {
    const { _id, name, chef, supplier, photo } = coffee;

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Success!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffee(remaining);
                        }

                    })


            }
        })


        console.log(_id);

    }

    return (
        <div className='flex justify-around items-center rounded-md bg-[#F4F3F0]'>
            <div>
                <img src={photo} alt="" className='w-32 py-5' />
            </div>
            <div>
                <p className='font-semibold text-lg'>Name: <span className='font-normal'>{name}</span></p>
                <p className='font-semibold text-lg'>Chef: <span className='font-normal'>{supplier}</span></p>
                <p className='font-semibold text-lg'>Price: <span className='font-normal'>{chef}</span></p>
            </div>
            <div className='flex flex-col gap-3'>
                <button className='text-white bg-[#D2B48C] p-2 text-xl rounded-md'><AiFillEye></AiFillEye></button>
                <Link to={`/updateCoffee/${_id}`}><button  className='text-white bg-[#3C393B] p-2 text-xl rounded-md'><BiSolidPencil></BiSolidPencil></button></Link>
                <button onClick={() => handleDelete(_id)} className='text-white bg-[#EA4744] p-2 text-xl rounded-md'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
};

export default CoffeeCard;
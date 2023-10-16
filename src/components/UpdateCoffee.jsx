import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

                  
            }
            form.reset()
        })

    }
    
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-[#F4F3F0] p-20">
                <h1 className="text-3xl text-center font-bold mb-4">Add New Coffee</h1>
                <p className="text-center w-9/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <div>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className="grid grid-cols-2 gap-5 mt-10">
                            <div>
                                <h3 className="label-text text-xl mb-3">Name</h3>
                                <input type="name" name="name" defaultValue={name} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div>
                                <h3 className="label-text text-xl mb-3">Chef</h3>
                                <input type="name" name="chef" defaultValue={chef} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div>
                                <h3 className="label-text text-xl mb-3">Supplier</h3>
                                <input type="name" name="supplier" defaultValue={supplier} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div>
                                <h3 className="label-text text-xl mb-3">Taste</h3>
                                <input type="name" name="taste" defaultValue={taste} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div>
                                <h3 className="label-text text-xl mb-3">Category</h3>
                                <input type="name" name="category" defaultValue={category} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div>
                                <h3 className="label-text text-xl mb-3">Details</h3>
                                <input type="name" name="details" defaultValue={details} className="p-[10px] rounded-md w-full" />
                            </div>
                            <div className="col-span-2">
                                <h3 className="label-text text-xl mb-3">Photo</h3>
                                <input type="name" name="photo" defaultValue={photo} className="p-[10px] rounded-md w-full" />
                            </div>
                            <input type="submit" className="w-full py-[10px] text-center font-medium bg-[#D2B48C] col-span-2 border text-lg rounded-md" value="Add Coffee" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;
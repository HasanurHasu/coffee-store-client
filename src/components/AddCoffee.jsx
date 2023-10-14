
const AddCoffee = () => {
    return (
        <div className="max-w-6xl mx-auto bg-[#F4F3F0] p-20">
            <h1 className="text-3xl text-center font-bold mb-4">Add New Coffee</h1>
            <p className="text-center w-9/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div>
                <form>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        <div>
                            <h3 className="label-text text-xl mb-3">Name</h3>
                            <input type="name" name="name" placeholder="Enter Coffee name" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Chef</h3>
                            <input type="name" name="name" placeholder="Enter Coffee Chef" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Supplier</h3>
                            <input type="name" name="name" placeholder="Enter Coffee Supplier" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Taste</h3>
                            <input type="name" name="name" placeholder="Enter Coffee Taste" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Category</h3>
                            <input type="name" name="name" placeholder="Enter Coffee Category" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Details</h3>
                            <input type="name" name="name" placeholder="Enter Coffee Details" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div className="col-span-2">
                            <h3 className="label-text text-xl mb-3">Photo</h3>
                            <input type="name" name="name" placeholder="Enter Photo URL" className="p-[10px] rounded-md w-full" />
                        </div>
                       <input type="submit" className="w-full py-[10px] text-center font-medium bg-[#D2B48C] col-span-2 border text-lg rounded-md" value="Add Coffee" />
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
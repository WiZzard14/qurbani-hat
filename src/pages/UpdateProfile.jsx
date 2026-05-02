import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUserProfile(name, photo)
            .then(() => {
                toast.success("Profile Updated Successfully!");
                navigate("/my-profile");
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="py-10 flex justify-center animate__animated animate__fadeIn">
            <div className="card w-full max-w-md glass-effect border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-center text-primary mb-6">Update Your Info</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="form-control">
                        <label className="label-text text-gray-400 mb-2">New Name</label>
                        <input type="text" name="name" placeholder="Enter new name" className="input input-bordered bg-transparent border-white/20" required />
                    </div>
                    <div className="form-control">
                        <label className="label-text text-gray-400 mb-2">New Photo URL</label>
                        <input type="text" name="photo" placeholder="Enter new photo URL" className="input input-bordered bg-transparent border-white/20" required />
                    </div>
                    <button className="btn btn-primary w-full mt-4 text-white">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
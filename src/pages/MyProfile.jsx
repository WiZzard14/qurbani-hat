import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const MyProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="py-10 flex justify-center animate__animated animate__fadeIn">
            <div className="card w-full max-w-md glass-effect border border-white/10 p-8 text-center">
                <div className="avatar justify-center mb-6">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL || "https://i.ibb.co/5GzXnKy/user.png"} alt="User profile" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{user?.displayName}</h2>
                <p className="text-gray-400 mb-6">{user?.email}</p>
                
                <Link to="/update-profile" className="btn btn-primary w-full text-white shadow-lg shadow-primary/30 border-none">
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
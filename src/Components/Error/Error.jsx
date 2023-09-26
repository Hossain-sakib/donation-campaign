import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center text-3xl flex flex-col items-center justify-center space-y-4">
            <h3>Opps!!</h3>
            <h3>Page Not Found</h3>
            <Link to="/" className="text-red-600 underline">Go back to Home</Link>
        </div>
    );
};

export default Error;
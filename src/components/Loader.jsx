// import { PropagateLoader } from 'react-spinners';
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100dvh-340px)]">
            <HashLoader color="#23BE0A" size={99} />
        </div>
    );
};

export default Loader;
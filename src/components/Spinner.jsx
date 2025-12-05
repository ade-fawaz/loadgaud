
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full py-10">
      <ClipLoader color={"#EF4444"} size={150} />
    </div>
  );
};

export default Spinner;

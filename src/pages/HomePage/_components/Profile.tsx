import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div>
      <h1 className="text-[28px] font-medium ">Hello, {user}</h1>
      <p className="mt-3 text-secondary">
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
    </div>
  );
};

export default Profile;

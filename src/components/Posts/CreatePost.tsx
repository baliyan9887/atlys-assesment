import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../ui";
import AuthContainer from "../AuthContainer";
import { RootState } from "../../store";

const CreatePost: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [text, setText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onPost = () => {
    if (text.length !== 0) {
      if (isAuthenticated) {
        alert(
          "Your post has been recorded, once we verify we will add in our feed, Thanks!"
        );
        setText(""); // Clear the input after posting
      } else {
        setIsOpen(true);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setIsOpen(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-background-light p-4 rounded-md border-2 border-solid border-[#35373B]">
      <p className="font-medium text-[18px]">Create Post</p>
      <div className="bg-background-dark p-3 mt-3 rounded-md flex items-start gap-4">
        <div className="min-w-[48px] h-[48px] bg-background-light rounded-full flex items-center justify-center">
          💬
        </div>
        <input
          className="border-none focus:outline-none focus:border-none hover:border-none bg-transparent h-[48px] w-full"
          placeholder="How are you feeling today?"
          onChange={handleInputChange}
          value={text}
        />
      </div>
      <div className="flex justify-end mt-3">
        <button
          className="bg-button-primary px-6 py-1 rounded-md text-white"
          onClick={onPost}
        >
          Post
        </button>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <AuthContainer />
        </Modal>
      )}
    </div>
  );
};

export default CreatePost;

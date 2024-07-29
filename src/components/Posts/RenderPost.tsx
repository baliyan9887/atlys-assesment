import {
  MoreHorizontal as MoreIcon,
  MessageSquare as CommentIcon,
} from "react-feather";

interface RenderPostProps {
  name: string;
  time: string;
  content: string;
  emoji: string;
  commentsCount: number;
  image?: string;
}

const RenderPost: React.FC<RenderPostProps> = ({
  name,
  time,
  content,
  emoji,
  commentsCount,
  image,
}) => {
  console.log(image);
  return (
    <div className="bg-background-light p-4 rounded-md border-2 border-solid border-[#35373B]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {image ? (
            <img src={image} className="min-w-[48px] h-[48px]" />
          ) : (
            <div className=" min-w-[48px] h-[48px] bg-background-dark rounded-full flex items-center uppercase justify-center">
              {name.charAt(0)}
              {name.charAt(1)}
            </div>
          )}

          <div>
            <p className="font-medium">{name}</p>
            <p className="text-[14px] text-secondary">{time}</p>
          </div>
        </div>
        <MoreIcon />
      </div>
      <div className="bg-background-dark p-3 mt-3 rounded-md flex items-start gap-4">
        <div className=" min-w-[48px] h-[48px] bg-background-light rounded-full flex items-center justify-center">
          {emoji}
        </div>
        <p className="text-secondary">{content}</p>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <CommentIcon className="text-secondary " />
        <p className="text-secondary text-[14px]">{commentsCount} comments</p>
      </div>
    </div>
  );
};

export default RenderPost;

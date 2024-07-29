import { Container } from "../../ui";
import Profile from "./_components/Profile";
import RenderPost from "../../components/Posts/RenderPost";
import { data } from "../../mock/data";
import CreatePost from "../../components/Posts/CreatePost";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Profile />
      <div className="mt-6">
        <CreatePost />
      </div>
      <div className="mt-4">
        {data.map((post, index: number) => (
          <div key={post.name} className={index === 0 ? "" : "mt-4"}>
            <RenderPost
              name={post.name}
              time={post.time}
              content={post.content}
              emoji={post.emoji}
              commentsCount={post.commentsCount}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;

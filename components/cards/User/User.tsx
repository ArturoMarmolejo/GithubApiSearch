import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iUser } from "../../../api/types/user";

interface UserCardProps {
  user: iUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <article className="post-user">
      <div className="post-user-profile">
        <img src={user.avatar_url} />
        <div className="user-info">
          <a
            className="name"
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {user.login}
          </a>
          <p className="proyect-name">{user.type}</p>
        </div>
      </div>
      <div className="user-start-content">
        <FontAwesomeIcon icon={faStar} />
        <p>{user.score}</p>
      </div>
    </article>
  );
};

export default UserCard;

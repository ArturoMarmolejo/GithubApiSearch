import { iUser } from "../../api/types/user";
import UserCard from "../cards/User/User";

interface ListUserProps {
  users: iUser[];
}

const ListUser: React.FC<ListUserProps> = ({ users }) => {
  return (
    <section className="posts-repositories">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </section>
  );
};

export default ListUser;

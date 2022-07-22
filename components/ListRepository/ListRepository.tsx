import { iRepository } from '../../api/types/repository';
import RepositoryCard from '../cards/Repository/Repository';

interface ListRepositoryProps {
  repositories: iRepository[]
}

const ListRepository: React.FC<ListRepositoryProps> = ({ repositories }) => {
  return (
    <section className="posts-repositories">
      {repositories.map((repository, index) => <RepositoryCard key={index} repository={repository} />)}
    </section>
  )
}

export default ListRepository;
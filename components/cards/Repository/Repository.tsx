import { iRepository } from '../../../api/types/repository';
import numbersParse from '../../../utils/numbers-parse';

interface RepositoryCardProps {
  repository: iRepository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <article className="post-repositorie">
      <div className="post-repositorie-header">
        <span>{repository.full_name}</span>
        <div className="post-repositorie-header__language">
          <i className="fa-solid fa-bookmark"></i>
          <p>{repository.language}</p>
        </div>
      </div>
      <div className="post-repositorie-body">
        <a href="#">{repository.name}</a>
        <p>{repository.description}</p>
        <div className="post-repositorie-body__tags">
          <span>Ui Design</span>
          <span>Html</span>
          <span>CSS</span>
          <span>reactapp</span>
        </div>
      </div>
      <div className="post-repositorie-footer">
        <div className="post-repositorie-footer_stats">
          <div className="stat-content">
            <i className="fa-solid fa-eye"></i>
            <p>{numbersParse(repository.watchers)}</p>
          </div>

          <div className="stat-content">
            <i className="fa-solid fa-star"></i>
            <p>{repository.score}</p>
          </div>

          <div className="stat-content">
            <i className="fa-solid fa-code-branch"></i>
            <p>{repository.default_branch}</p>
          </div>
        </div>
        <div className="post-repositorie-user">
          <img src={repository.owner.avatar_url} />
          <div className="user-info">
            <p className="name">{repository.owner.login}</p>
            <p className="proyect-name">{repository.name}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RepositoryCard;
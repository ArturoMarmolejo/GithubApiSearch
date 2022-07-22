import numbersParse from '../../../utils/numbers-parse';
import { faEye, faStar, faCodeBranch, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { iRepository } from '../../../api/types/repository';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RepositoryCardProps {
  repository: iRepository
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <article className="post-repositorie">
      <div className="post-repositorie-header">
        <span>{repository.full_name}</span>
        {
          repository.language && (
            <div className="post-repositorie-header__language">
              <FontAwesomeIcon icon={faBookmark} />
              <p>{repository.language}</p>
            </div>
          )
        }
      </div>
      <div className="post-repositorie-body">
        <a href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a>
        <p>{repository.description}</p>
        <div className="post-repositorie-body__tags">
          {
            repository.topics.map((topic, index) => <span key={index}>{topic}</span>)
          }
        </div>
      </div>
      <div className="post-repositorie-footer">
        <div className="post-repositorie-footer_stats">
          <div className="stat-content">
            <i className="fa-solid fa-eye"></i>
            <FontAwesomeIcon icon={faEye} />
            <p>{numbersParse(repository.watchers)}</p>
          </div>

          <div className="stat-content">
            <i className="fa-solid fa-star"></i>
            <FontAwesomeIcon icon={faStar} />
            <p>{repository.score}</p>
          </div>

          <div className="stat-content">
            <i className="fa-solid fa-code-branch"></i>
            <FontAwesomeIcon icon={faCodeBranch} />
            <p>{repository.default_branch}</p>
          </div>
        </div>
        <div className="post-repositorie-user">
          <a href={repository.owner.html_url} target="_blank" rel="noreferrer">
            <img src={repository.owner.avatar_url} />
          </a>
          <div className="user-info">
            <a href={repository.owner.html_url} target="_blank" rel="noreferrer" className="name">{repository.owner.login}</a>
            <p className="proyect-name">{repository.name}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RepositoryCard;
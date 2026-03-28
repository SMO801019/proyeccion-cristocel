import { Church } from '@/app/data/churches';

type ChurchCardProps = {
  church: Church;
};

export function ChurchCard({ church }: ChurchCardProps) {
  return (
    <article className="card">
      <div className="cardHeader">
        <h3>{church.name}</h3>
        <span className="chip">{church.denomination}</span>
      </div>

      <p className="muted">
        {church.city}, {church.country}
      </p>

      <div className="section">
        <h4>Horarios</h4>
        <ul>
          {church.serviceTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </div>

      <div className="tags">
        {church.tags.map((tag) => (
          <span key={tag} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

import styles from './Statistics.module.css';

const Statistics = ({ stats }) => {
  const { title = 'Upload stats' } = stats;

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statlist}>
        {stats.map((stat, index) => (
          <li
            key={stat.id}
            className={`${styles.item} ${styles[`color${index + 1}`]}`}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

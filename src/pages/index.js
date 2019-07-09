
import styles from './index.css';
import Link from 'umi/link';
import Test from '@routes/qx'
export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <Test>
        0000000000000
      </Test>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <Link to="/card">
            Getting Started
            </Link>
        </li>
      </ul>
    </div>
  );
}

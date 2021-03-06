import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}
const ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninja List</h1>
            {
                ninjas.map(ninja => (
                    <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
};

export default ninjas;
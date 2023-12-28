import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

export const Header = () => {
    const dynamicValue = ['Crucial', 'Fundamental', 'Important'];

    const getRandomIdx = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
    <>
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {dynamicValue[getRandomIdx(2)]} React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    </>
    );
};

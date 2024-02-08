import loader from '../../assets/loading.gif';
import cls from './Loading.module.css';

const Loading = () => {
	return <img className={cls['loader-img']} src={loader}></img>;
};

export default Loading;

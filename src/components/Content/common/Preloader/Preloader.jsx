import preloader from '../../../../assets/img/loading.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={s.wrapper}>
            <img src={preloader} alt="preloader" className={s.loadingImg}/>
        </div>
    )
}

export default Preloader;
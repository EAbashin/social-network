import s from "./Paginator.module.css";
import React, {useEffect, useState} from "react";

type PropsType = {
    currentPage: number
    portionSize: number
    pageSize: number
    totalItemsCount: number
    onPageChange: (pageNumber: number) => void
    onShowMoreItems: () => void
}
const Paginator: React.FC<PropsType> = (props) => {
    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / props.portionSize)), [props.currentPage]);
    const
        [portionNumber, setPortionNumber] = useState(1),
        pagesCount = Math.ceil((props.totalItemsCount) / props.pageSize),
        portionCount = Math.ceil((pagesCount) / props.portionSize),
        leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1,
        rightPortionPageNumber = portionNumber * props.portionSize,
        pages: Array<number> = [],
        arrowLeft = '<<',
        arrowRight = '>>';
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.users}>
            <button className={props.currentPage < pagesCount ? s.btn : s.btn_none} onClick={props.onShowMoreItems}>SHOW MORE</button>
            <div className={s.paginator}>
                <div className={s.btnBlock}>
                    {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className={s.btn}>{arrowLeft}</button>}
                </div>
                <div className={s.pages}>
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => <span className={props.currentPage === p ? s.selectedPage : ''}
                                        onClick={() => props.onPageChange(p)}
                                        key={p}>{p + ' '}</span>)}
                </div>
                <div className={s.btnBlock}>
                    {portionCount > portionNumber &&
                        <button onClick={() => setPortionNumber(portionNumber + 1)} className={s.btn}>{arrowRight}</button>}
                </div>
            </div>
        </div>
    )
}

export default Paginator;
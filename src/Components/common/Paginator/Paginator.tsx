import React , {useState} from 'react';
import s from './paginator.module.css';

type PropsType = {
     portionSize? : number
     currentPage: number  
     totalItemsCount: number 
     pageSize: number 
     onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PropsType> = ({portionSize = 10, currentPage, totalItemsCount, pageSize, onPageChanged}) => {

let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for(let i = 1; i <= pagesCount; i++){
         pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
         {portionNumber > 1 &&
           <button onClick={() => setPortionNumber(portionNumber - 1)}>Prew</button>
         }
          
                {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                     return  <span className ='currentPage === p && s.selectedPage'
                     key={p}
                     onClick={(e) => {onPageChanged(p)}}
                     >{p}</span>
                })}
                {
                     portionCount > portionNumber && 
                     <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
                }
               
            </div>
}


export default Paginator;
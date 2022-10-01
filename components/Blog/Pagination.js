
import ImgLoader from '../Image'

import PrevArw from "../../assets/images/svg/prev-arw.svg"
import NextArw from "../../assets/images/svg/next-arw.svg"

const Pagination = ({ pageIndex, setPageIndex, recordsPerPage, totalRecords }) => {
    console.log('totalRecords',totalRecords)
    const pageCount = Math.ceil(totalRecords / recordsPerPage).toFixed();
    console.log('pageCount',pageCount)
    console.log('pageIndex',pageIndex)
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push({
            label: i + 1
        });
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link d-flex align-items-center justify-content-center"
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={pageIndex === 1}
                    >
                        <ImgLoader src={PrevArw} width={12} height={12} alt="Prev" />
                        <span>Previous</span>
                    </button>
                </li>
                <div className="pagenum">
                    {pages.map((item, index) => (
                        <li key={index}>
                            {pageIndex == item.label ? (
                                <button className="page-item active"><span aria-current="page">{item.label}</span></button>
                            ) : (
                                <button
                                    className="page-item"
                                    onClick={() => setPageIndex(item.label)}
                                ><span>{item.label} </span></button>
                            )}

                        </li>
                    ))}
                </div>
                <li className="page-item ">
                    <button className="page-link d-flex align-items-center justify-content-center"
                    onClick={() => setPageIndex(pageIndex + 1)}
                    disabled={pageIndex >= pageCount}
                ><span>Next</span>
                    <ImgLoader src={NextArw} width={12} height={12} alt="Prev" />
                </button></li>
            </ul>
        </nav>
    )
}

export default Pagination
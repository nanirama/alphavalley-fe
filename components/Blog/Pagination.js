
import ImgLoader from '../Image'

import PrevArw from "../../assets/images/prev-arw.png"
import NextArw from "../../assets/images/next-arw.png"

const Pagination = ({ pageIndex, setPageIndex, recordsPerPage, totalRecords }) => {
    const pageCount = Math.ceil(totalRecords / recordsPerPage).toFixed();

    console.log('totalRecords', totalRecords)

    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push({
            label: i + 1
        });
    }
    console.log('pageSize', pageCount)
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link"
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={pageIndex === 1}
                    >
                        <ImgLoader src={PrevArw} width={20} height={20} alt="Prev" />
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
                <li className="page-item"><button className="page-link"
                    onClick={() => setPageIndex(pageIndex + 1)}
                    disabled={pageIndex === pageCount}
                ><span>Next</span>
                    <ImgLoader src={NextArw} width={20} height={20} alt="Prev" />
                </button></li>
            </ul>
        </nav>
    )
}

export default Pagination
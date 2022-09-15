import Link from 'next/link'
import {useState} from 'react'

import CaseStudiesItem from './CaseStudiesItem';
import Pagination from './Pagination'



export default function CaseStudiesIndex({ articles}) {

    console.log('articlesarticles',articles)
    
    const [pageIndex, setPageIndex] = useState(1);
    const recordsPerPage = 6
    const totalRecords = articles.length
    let data = articles.slice((pageIndex - 1) * recordsPerPage, pageIndex * recordsPerPage);
    return (
        <div className="container">
            <div className="heading">
                <span>CASE STUDIES</span>
                <div className="head">
                    <h1>AlphaValley Case Studies</h1>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div className="blog-list">
                <div className="row mb-5">
                    {data && data.map((item,index)=> ( <CaseStudiesItem key={index} data={item} /> ))}
                </div>
                {totalRecords > recordsPerPage && (
                    <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} recordsPerPage={recordsPerPage} totalRecords={totalRecords}/>   
                )}             
                </div>
            </div>
    )
}

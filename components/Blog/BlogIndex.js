import Link from 'next/link'
import {useState} from 'react'


import BlogItem from "./BlogItem"
import Pagination from './Pagination'
import CategoryList from './CategoryList'



export default function BlogIndex({ articles, categories}) {
    
    const [pageIndex, setPageIndex] = useState(1);
    const recordsPerPage = 6
    const totalRecords = articles.length
    let data = articles.slice((pageIndex - 1) * recordsPerPage, pageIndex * recordsPerPage);
    return (
        <div className="container">
            <div className="heading">
                <span>BLOG</span>
                <div className="head">
                    <h1>AlphaValley Blog</h1>
                    <p>Musings about pitch decks, startup funding, venture capital, and more</p>
                </div>
            </div>
            <div className="blog-list">
                <CategoryList categories={categories} />
                <div className="row">
                    {data && data.map((item,index)=> ( <BlogItem key={index} data={item} /> ))}
                </div>
                {totalRecords > recordsPerPage && (
                    <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} recordsPerPage={recordsPerPage} totalRecords={totalRecords}/>   
                )}                
                </div>
            </div>
    )
}

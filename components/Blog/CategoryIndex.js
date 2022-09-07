import Link from 'next/link'
import {useState} from 'react'


import BlogItem from "./BlogItem"
import Pagination from './Pagination'
import CategoryList from './CategoryList'



export default function CategoryIndex({ category, categories}) {
    const { name,slug, blogs, description } = category.attributes
    const articles = blogs.data
    console.log('articles',articles)
    
    const [pageIndex, setPageIndex] = useState(1);
    const recordsPerPage = 6
    const totalRecords = articles.length
    console.log('totalRecords',totalRecords)
    let data = articles.slice((pageIndex - 1) * recordsPerPage, pageIndex * recordsPerPage);
    return (
        <div className="container">
            <div className="heading">
                <span>BLOG</span>
                <div className="head">
                    <h1>AlphaValley Blog - {name && name}</h1>
                    <p>{description && description}</p>
                </div>
            </div>
            <div className="blog-list">
                <CategoryList categories={categories} slug={slug} />
                <div className="row">
                    {data && data.map((item,index)=> ( <BlogItem key={index} data={item} categoryName={name} /> ))}
                </div>
                {totalRecords > recordsPerPage && (
                    <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} recordsPerPage={recordsPerPage} totalRecords={totalRecords}/>   
                )}                
                </div>
            </div>
    )
}

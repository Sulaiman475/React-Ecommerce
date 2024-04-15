import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Layout>
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
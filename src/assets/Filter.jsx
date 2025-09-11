import React from 'react'

const Filter = ({ category, onCategoryChange }) => {
  
  return (
    <div className="flex justify-end items-center gap-3 mt-4 mb-8">
        <select name="category" className='border border-amber-300 bg-amber-50 focus-within:outline-0 p-3 rounded-lg' id="category" value={category} onChange={(e) => onCategoryChange (e.target.value)}>
            <option value="all">All</option>
            <option value="fragrances">fragrances</option>
            <option value="furniture">furniture</option>
            <option value="groceries">groceries</option>
        </select>
    </div>
  )
}

export default Filter;
'use client'

import { useState } from "react";

interface Props {
  onSelectCategory: (categoryName: string) => void;
}

const categories = [
  'All Products',
  "Women's Fashion",
  "Men's Fashion",
  "Electronics"
];

export default function ProductFilter({ onSelectCategory }: Props) {

  const [active, setActive] = useState('All Products');

  const handleClick = (cat: string) => {
    setActive(cat);
    onSelectCategory(cat);
  }

  return (
    <div className="
    grid grid-cols-2
    sm:grid-cols-2
    md:flex
    md:flex-wrap
    gap-3
    md:gap-5
    my-8 md:my-10
    ">

      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
          w-full md:w-auto
          px-3 md:px-4
          py-2
          text-sm md:text-base
          rounded-md
          transition
          ${active === cat
            ? 'border-b-2 border-black font-semibold'
            : 'text-[#888] hover:bg-gray-100'}
          `}
        >
          {cat}
        </button>
      ))}

    </div>
  )
}
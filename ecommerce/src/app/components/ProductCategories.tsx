// components/ProductCategories.js

import Image from 'next/image';

const categories = [
  {
    id: 1,
    name: 'Phones',
    image: '/Category-CellPhone.svg',
    alt: 'Category Cell Phone',
  },
  {
    id: 2,
    name: 'Computers',
    image: '/Category-Computer.svg',
    alt: 'Category Computer',
  },
  {
    id: 3,
    name: 'Smart Watches',
    image: '/Category-SmartWatch.svg',
    alt: 'Category Smart Watch',
  },
  {
    id: 4,
    name: 'Camera',
    image: '/Category-Camera.svg',
    alt: 'Category Camera',
  },
  {
    id: 5,
    name: 'Head Phones',
    image: '/Category-Headphone.svg',
    alt: 'Category Head Phones',
  },
  {
    id: 6,
    name: 'Gaming',
    image: '/Category-Gamepad.svg',
    alt: 'Category Gaming',
  },
];

const ProductCategories = () => {
  return (

    <div>
      <div className="categories">
        <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] font-semibold flex items-center">
          <span className="ml-8 text-[#DB4444]">Categories</span>
        </div>

        <div className="Today's mb-14 mt-6 flex justify-between gap-20 items-baseline">
          <div className="">
            <div className="text-3xl font-semibold">Browse By Category</div>
          </div>
        </div>
      </div>
    
    <div className="flex justify-between flex-wrap mb-6 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="group w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center gap-3 hover:bg-[#DB4444] hover:text-white transition-colors duration-300"
        >
          <Image
            src={category.image}
            alt={category.alt}
            width={56}
            height={56}
            className="group-hover:invert transition duration-300"
          />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductCategories;

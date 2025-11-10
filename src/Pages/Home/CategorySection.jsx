import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>
        <p className="text-gray-600">
          Find everything your pet needs in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          to="/category-filtered-product/Pets"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pets"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-bold">
              🐶 Pets (Adoption)
            </h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Pet Food"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/5999902/pexels-photo-5999902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pet Food"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-bold">🍖 Pet Food</h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Accessories"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/2253634/pexels-photo-2253634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Accessories"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-bold">🧸 Accessories</h2>
          </div>
        </Link>

        <Link
          to="/category-filtered-product/Pet Care Products"
          className="card bg-base-100 shadow-xl image-full h-48"
        >
          <figure>
            <img
              src="https://images.pexels.com/photos/7450379/pexels-photo-7450379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pet Care"
              className="w-full h-full object-cover"
              alt="Pet Care"
              className="w-full h-full object-cover"
              alt="Pet Care"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl font-bold">💊 Pet Care</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;

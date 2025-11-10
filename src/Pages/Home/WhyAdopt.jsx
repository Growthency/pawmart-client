import React from "react";

const WhyAdopt = () => {
  return (
    <div className="hero bg-base-200 rounded-lg mb-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-4xl font-bold">Why Adopt from PawMart?</h2>
          <p className="py-6">
            When you adopt from PawMart, you're not just getting a new pet;
            you're saving a life. Millions of wonderful animals are waiting in
            shelters for a second chance. Adopting helps reduce pet
            overpopulation and gives a deserving animal a loving home. Adopt,
            don't shop!
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default WhyAdopt;

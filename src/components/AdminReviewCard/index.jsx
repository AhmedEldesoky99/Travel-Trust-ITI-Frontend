const AdminReviewCard = () => {
  const reviewSummaries = [
    { summary: "excellent", width: "100%" },
    { summary: "very good", width: "80%" },
    { summary: "average", width: "40%" },
    { summary: "poor", width: "20%", opacity: "0.6" },
    { summary: "terrible", width: "10%", opacity: "0.3" },
  ];

  const ratings = [
    { value: "1", className: "mask mask-star-2 bg-secondary-yellow mr-2" },
    { value: "2", className: "mask mask-star-2 bg-secondary-yellow mr-2" },
    {
      value: "3",
      className: "mask mask-star-2 bg-secondary-yellow mr-2",
    },
    { value: "4", className: "mask mask-star-2 bg-secondary-yellow mr-2" },
    { value: "5", className: "mask mask-star-2 bg-secondary-yellow mr-2" },
    { value: "6", className: "mask mask-star-2 bg-secondary-yellow mr-2" },
  ];

  return (
    <>
      <section className=" w-full lg:min-w-[25rem] mb-24 -mt-16 2xl:mt-10">
        <div className="container">
          <div className="border-[0.4px] border-gray-200 py-10 -md rounded-md px-8">
            <h2 className="capitalize text-xl">reviews</h2>
            <div className="border-b-2 h-4"></div>
            <p className="capitalize text-xl mt-4">overall rating</p>
            <p className="text-center text-xl mt-6 font-semibold text-[#585858]">
              <span className="text-4xl font-semibold">4.7</span>/5
            </p>
            <div className="w-full flex my-4">
              <div className="rating rating-lg mx-auto">
                {ratings.map(({ className, value }) => (
                  <input
                    type="radio"
                    name="rating-9"
                    className={className}
                    key={value}
                  />
                ))}
              </div>
            </div>
            <p className="text-center text-lg capitalize mb-12">
              based on 2 reviews
            </p>
            <h2 className="capitalize text-xl mt-4">review summary</h2>

            <div className="w-full mt-6">
              {reviewSummaries.map((summary, index) => (
                <div
                  className="w-full bg-white mb-6 grid grid-cols-12"
                  key={index}
                >
                  <div className="col-span-3 capitalize text-[16px]">
                    {summary.summary}
                  </div>
                  <div
                    className="bg-primary-green text-center col-span-9"
                    style={{ width: summary.width, opacity: summary.opacity }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminReviewCard;

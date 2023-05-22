const HeroImages = () => {
  return (
    <>
      <section>
        <div className="w-full mx-auto grid-cols-1 grid lg:grid-cols-3 h-[600px] overflow-hidden relative">
          <div
            className="p-6 bg-cover bg-center transition duration-300 transform brightness-75 hover:brightness-100  cursor-pointer"
            style={{
              backgroundImage: `url("https://vl-prod-static.b-cdn.net/system/images/000/385/796/3a1261facf212f762e8084da73154247/x1000gt/Istanbul-Turkey.jpg?1578668804")`,
            }}
          ></div>

          <div
            className="p-6 bg-cover bg-center transition duration-300 transform ease-in brightness-75 hover:brightness-100 cursor-pointer h-full w-full"
            style={{
              backgroundImage: `url("https://www.sandals.com/blog/content/images/2019/10/shutterstock_81096616-2_web.jpg")`,
            }}
          ></div>

          <div
            className="p-6 bg-cover bg-center transition duration-300 transform brightness-75 hover:brightness-100 cursor-pointer"
            style={{
              backgroundImage: `url("https://i.pinimg.com/originals/5b/ec/5b/5bec5b3ba843297b7f011c5bd4eff3de.jpg")`,
            }}
          ></div>
        </div>
      </section>
    </>
  );
};
export default HeroImages;

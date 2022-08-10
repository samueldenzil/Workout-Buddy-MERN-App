const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="w-full px-3 py-5 max-w-[1140px] mx-auto flex items-center justify-between">
        <div className="flex justify-center items-center cursor-pointer">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/flexed-biceps_1f4aa.png" className="w-10 mr-2" />
          <h1 className="font-bold text-3xl text-[#333]">
            Workout Buddy
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

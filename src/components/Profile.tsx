import edelgard from "/edelgard.png"; // have to import since base changed

function Profile() {
  return (
    <header className="flex flex-col items-center font-bc-prop text-win95-off-white">
      <img
        className="w-25 h-25 md:w-30 md:h-30 rounded-full object-contain border-2 bg-win95-gray border-win95-off-white"
        src={edelgard}
        alt="AP"
      />

      <div className="pt-2 md:font-bold text-lg md:text-2xl ">
        <h2> Ashley Perez </h2>
      </div>

      <p className="text-center  w-40 md:w-full text-sm md:text-lg">
        SWE, Gamer, Educator
      </p>
      <p className="text-center text-[10px] md:text-xs ">
        I like to make things :)
      </p>
    </header>
  );
}

export default Profile;

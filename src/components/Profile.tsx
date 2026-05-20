import edelgard from "/edelgard.png"; // have to import since base changed

function Profile() {
  return (
    <header className="flex flex-col items-center font-bc-prop">
      <img
        className="w-22 h-22 md:w-30 md:h-30 rounded-full object-contain"
        src={edelgard}
        alt="AP"
      />

      <div className="text-win95-off-white pt-2 font-bold text-md md:text-2xl ">
        <h2> Ashley Perez </h2>
      </div>

      <p className="text-center w-40 md:w-full text-xs md:text-lg ">
        SWE, Gamer, Educator
      </p>
      <p className="text-center text-[8px] md:text-xs ">
        I like to make things :)
      </p>
    </header>
  );
}

export default Profile;

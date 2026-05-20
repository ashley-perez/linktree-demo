import edelgard from "/edelgard.png"; // have to import since base changed

function Profile() {
  return (
    <header className="flex flex-col items-center font-akt">
      <img
        className="w-15 h-15 md:w-30 md:h-30 rounded-full object-contain"
        src={edelgard}
        alt="AP"
      />

      <div className="pt-2 font-bold text-sm md:text-xl ">
        <h2> Ashley Perez </h2>
      </div>

      <p className="text-gray-600 text-center w-40 md:w-full text-xs md:text-lg ">
        I make things :)
      </p>
      <p className="text-gray-600 text-center text-[8px] md:text-xs ">
        placeholder
      </p>
    </header>
  );
}

export default Profile;

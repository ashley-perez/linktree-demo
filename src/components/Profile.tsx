import type { ProfileData } from "./ProfileData";

function Profile({ profileinfo }: { profileinfo: ProfileData }) {
  return (
    <header className="flex flex-col items-center font-bc-prop text-win95-off-white">
      <img
        className="w-25 h-25 md:w-30 md:h-30  object-contain border-2 bg-win95-gray border-win95-off-white"
        src={profileinfo.pfp}
        alt="AP"
      />

      <div className="pt-2 md:font-bold text-lg md:text-2xl ">
        <h2> {profileinfo.name} </h2>
      </div>

      <p className="text-center  w-40 md:w-full text-sm md:text-lg">
        {profileinfo.bio}
      </p>
      <p className="text-center text-[10px] md:text-xs ">
        {profileinfo.little_bio}
      </p>
    </header>
  );
}

export default Profile;

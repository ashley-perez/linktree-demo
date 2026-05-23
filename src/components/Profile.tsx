import type { ProfileData } from "./ProfileData";

function Profile({ profileinfo }: { profileinfo: ProfileData }) {
  return (
    <header className="flex flex-col items-center font-bc-prop text-win95-off-white">
      <div className="shadow-win95-bevel p-1">
        <img
          className="w-25 h-25 md:w-30 md:h-30 xl:w-35 xl:h-35 object-contain bg-win95-gray"
          src={profileinfo.pfp}
          alt="AP"
        />
      </div>

      <div className="pt-2 text-lg md:text-2xl ">
        <h2> {profileinfo.name} </h2>
      </div>

      <p className="text-center w-40 md:w-full text-sm md:text-lg">
        {profileinfo.bio}
      </p>
      <p className="text-center text-[10px] md:text-xs ">
        {profileinfo.little_bio}
      </p>
    </header>
  );
}

export default Profile;

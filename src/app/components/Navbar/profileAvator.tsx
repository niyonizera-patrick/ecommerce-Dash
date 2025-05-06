import Image from "next/image";

const ProfileAvatar = () => (
  <Image
    src="/Img/picture1.jgp"
    alt="Profile"
    width={32}
    height={32}
    className="rounded-full w-32 h-12 cursor-pointer"
  />
);
export default ProfileAvatar;

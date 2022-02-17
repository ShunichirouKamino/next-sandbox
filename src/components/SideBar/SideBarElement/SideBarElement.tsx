import HomeLink from "../../icons/HomeLink";

type Props = {};

const SideBarElement: React.FC<Props> = () => {
  return (
    <>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <HomeLink link={""} />
        <span className="font-semibold">Home</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <HomeLink link={""} />
        <span className="font-semibold">All Courses</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <HomeLink link={""} />
        <span className="font-semibold">All Courses</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="font-semibold">Profile</span>
      </li>
      <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <span className="font-semibold">Setthing</span>
      </li>
    </>
  );
};

export default SideBarElement;

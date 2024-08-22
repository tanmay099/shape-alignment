import { USER_GUIDE_LIST } from "./contants";

export function UserGuideList() {
  return (
    <ul className="mx-3">
      <li className="bg-green-800 text-white shadow-md flex justify-around my-3">
        <div>Legends and User guide</div>
      </li>
      {USER_GUIDE_LIST.map((listItem) => (
        <li className="bg-gray-50 text-grey-800 shadow-md flex justify-around my-3">
          <div className="px-2 py-2 m-auto">{listItem.icon}</div>
          <div className="mx-0.5">{listItem.text}</div>
        </li>
      ))}
    </ul>
  );
}

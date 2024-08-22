import { RightArrow,
UpArrow,
DragIcon,
ArcIcon,
PointIcon,
RightClick,
} from "@/app/components/sidepanel/utils";

export function UserGuideList() {
    return (
      <ul className="mx-3">
         <li className="bg-green-800 text-white shadow-md flex justify-around my-3">
          <div>User Guide</div>
          </li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
          <ArcIcon/>
          </div>
          <div>Left click and hold than move up and down to rotate</div></li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
        <UpArrow/>
        </div>
        click on arrow and drag to move up and down</li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
        <RightArrow/>
        </div>
        click on arrow and drag to move left and right</li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
        <DragIcon/>
        </div>
        click on pink square and drag to move anywhere on canvas</li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
        <PointIcon/>
        </div>
        click on point than drag to change shape size</li>
        <li className="bg-gray-50 shadow-md flex justify-around my-3"><div className="px-2 py-2 m-auto">
        <RightClick/>
        </div>
        right click on shape vertex or boundary to delete the shape</li>
      </ul>
    );
  }
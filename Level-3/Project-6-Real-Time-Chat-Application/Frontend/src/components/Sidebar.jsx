import { UserModalProvider } from "../context/UserModalContext";
import UserBar from "./UserBar";
import UserModal from "./UserModal";

function Sidebar() {
  return (
    <UserModalProvider>
      <div className="w-96 overflow-auto overflow-x-hidden bg-green-200 p-2">
        <UserBar username="tayyabraza1918" />
        <UserModal />
      </div>
    </UserModalProvider>
  );
}

export default Sidebar;

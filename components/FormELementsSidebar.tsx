import { FormElements } from "./FormElements";
import SidebarBtnElement from "./SidebarBtnElement";

const FormELementsSidebar = () => {
  return (
    <div>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
};

export default FormELementsSidebar;

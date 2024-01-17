import React from "react";
import SecondPageComponent1 from "./SecondPageComponent1";
import DepartmentTree from "./SecondPageComponent2";

const SecondPage: React.FC = () => {
      return (
          <div>
            <SecondPageComponent1/>
           <DepartmentTree/>
          </div>
           
      )
};
export default SecondPage;
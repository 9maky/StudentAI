import React, { useState } from "react";
import styles from "../../../styles/dashboard/to_do.module.scss";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
export const TodoForm = ({ addTask }: any): JSX.Element => {
  const [value, setValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  const [isToggled, setIsToggled] = useState(false);
  {
  }
  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.to_do_form_cont}>
        <input
          type="text"
          className={styles.to_do_form_input}
          placeholder="Enter a new task..."
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          style={{
            transition: "all 0.3s ease",
            width: isToggled ? "220px" : "0px",
            opacity: isToggled ? "100%" : "0%",
          }}
        />
        <button
          className={styles.to_do_submit_btn}
          onClick={() => toggle()}
          style={{
            transition: "all 0.3s ease",
            width: isToggled ? "25px" : "25px",
          }}
        >
          <HiOutlinePlusSm
            style={{
              color: "white",
              width: "40px",
              height: "40px",

              opacity: isToggled ? "0%" : "100%",

              transform: "translate(0px, 6px)",
            }}
          />
          <HiArrowSmRight
            style={{
              color: "white",
              width: "40px",
              height: "40px",

              opacity: isToggled ? "100%" : "0%",

              transform: "translate(0px, -37px)",
            }}
          />
        </button>
      </div>
    </form>
  );
};
function state(arg0: string, arg1: any) {
  throw new Error("Function not implemented.");
}

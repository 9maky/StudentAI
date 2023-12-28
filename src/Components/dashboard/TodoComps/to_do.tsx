import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { to_do } from "../../../types/to_do_types";
import styles from "../../../styles/dashboard/to_do.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export const Todo = ({ task, index, removeTask }: to_do) => {
  const [isClicked, setIsClicked] = useState(false);

  const clicked = async () => {
    setIsClicked(!isClicked);
    await timeout(400);
    removeTask(index);
  };

  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const variants = {
    hidden: { opacity: isClicked ? 1 : 0 },
    visible: { opacity: isClicked ? 0 : 1 },
    exit: { opacity: isClicked ? 1 : 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className={styles.todos_body}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={styles.todo_text}>{task.title}</div>
        <button
          className={styles.to_do_remove_button}
          onClick={() => clicked()}
          style={{
            height: "20px",
            width: "20px",
          }}
        >
          <FaMinus className={styles.todo_btn_line} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

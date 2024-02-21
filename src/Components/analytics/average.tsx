import React from "react";
import styles from "../../styles/analytics/average.module.scss";
import { LineChart } from "@mui/x-charts";
const Average_Grade = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>Average Grade Over Year</div>
      </div>
      <div className={styles.cont}>
        <LineChart
        
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              color: '#925fe2',
              
            },
            
          ]}
          width={1340}
          height={463}
        />
      </div>
    </>
  );
};

export default Average_Grade;

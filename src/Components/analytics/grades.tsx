import React from "react";
import styles from "../../styles/analytics/grades.module.scss";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { HiCheck, HiOutlinePlusSm } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { analitika_table_data } from "../../Data/grades_table_data";
import {
  TutorTable,
  TitleContainer,
} from "../../styles/material_components/table_styles";
import Button from "@mui/material/Button";

const Grades = () => {
  const columns: GridColDef[] = [
    {
      field: "subject",
      headerName: "Subject",
      width: 230,
      align: "left",
      headerAlign: "left",

      headerClassName: "table_header",
      renderCell: (props: GridRenderCellParams) => {
        return (
          <div className={styles.justify_content}>
            <div className={styles.teacher_title}>{props.row.subject}</div>
          </div>
        );
      },
    },

    {
      field: "grades",
      headerName: "Grades",
      width: 380,
      align: "center",
      headerAlign: "center",
      headerClassName: "table_header",

      renderCell: (props: GridRenderCellParams) => {
        return (
          <div
            className={styles.justify_content_scroll}
            style={{
              display: "-webkit-inline-box",
            }}
          >
            {props.row.grades.map((item: string, index: string) => {
              return (
                <div
                  key={index}
                  className={styles.grade}
                  style={{
                    backgroundColor: "#925fe2",
                    width: "35px",
                    height: "35px",
                    borderRadius: "100%",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      field: "mean",
      headerName: "Mean",
      width: 75,
      headerClassName: "table_header",
      align: "right",
      headerAlign: "right",
    },
  ];
  const rows: any = analitika_table_data;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>Analytics</div>
        </div>
      </div>
      <Paper
        className={styles.table_cont}
        sx={(theme) => ({
          boxShadow: "4px 4px 48px 4px rgba(0, 0, 0, 0.08)",
          borderRadius: "24px",
        })}
      >
        <TutorTable
          sx={(theme) => ({
            borderRadius: "24px",
            width: "754px",
            height: "393px",
            p: `0px ${theme.spacing(4)}`,
            backgroundColor: "#ffff",
            userSelect: "none",

            "& .MuiDataGrid-cell": {
              border: "none",
              overflowX: "scroll",

              "&:focus": {
                outline: "none",
              },
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-footerContainer": {
              border: "none",

              minHeight: "25px",
            },

            "$ .MuiDataGrid-main": {
              height: "100%",
            },

            "& .MuiDataGrid-columnHeaderTitle": {
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "15px",
              color: "808080",
              cursor: "deafult",
            },
            "& .MuiDataGrid-columnHeaderTitleContainerContent": {
              cursor: "default",
            },
            "& .MuiDataGrid-columnHeaderTitleContainer": {
              cursor: "default",
            },

            "& .MuiDataGrid-iconButtonContainer": {
              display: "none",
              cursor: "default",
            },
            "& .MuiDataGrid-virtualScroller": {
              width: "auto",
              marginTop: "10px",
              scrollbarColor: "transparent",

              "&::-webkit-scrollbar": {
                width: "4px",
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#e0e0e0;",
                borderRadius: "40px",
              },
            },
            "& .MuiDataGrid-Ic ": {
              display: "none",
              visibility: "hidden",
              cursor: "deafult",
            },

            "& .MuiDataGrid-cellContent": {
              fontWeight: 500,
              fontSize: "20px",
              color: "#925FE2",
              fontFamily: "Poppins",
            },
          })}
          columns={columns}
          rows={rows}
          getRowId={(row) => row.id}
          pageSize={30}
          hideFooterPagination
          disableSelectionOnClick
          disableColumnSelector
          disableColumnFilter
          disableColumnMenu
          sortModel={[
            {
              field: "name",
              sort: "asc",
            },
          ]}
        />
      </Paper>
    </>
  );
};
export default Grades;

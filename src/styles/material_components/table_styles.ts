import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


import { makeStyles } from "@mui/material";

export const TutorTable = styled(DataGrid)(({ theme }) => ({
  border: "none",
  backgroundColor: "#ffff",
  userSelect: "none",
  padding: theme.spacing(1),
  "& .table_header": {
    border: "none",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 100,
    fontSize: "14px",
  },
  "& .MuiDataGrid-cell": {
    border: "none",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "13px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const TitleContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginRight: "auto",
  padding: `0px ${theme.spacing(4)}`,
}));

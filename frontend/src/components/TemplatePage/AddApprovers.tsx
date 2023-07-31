import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { colors } from "../../theme";
import Approver from "../../types/approver";

const AddApprovers: React.FC = () => {
  const [approverField, setApproverField] = useState<Approver[]>([]);
  const [selectedApprovers, setSelectedApprovers] = useState<Approver[]>([
    { label: "", id: 0 },
  ]);

  // adds a new field
  const handleAddUserField = () => {
    setSelectedApprovers((prevApproverField) => [
      ...prevApproverField,
      {
        label: "",
        id: 0,
      },
    ]);
  };

  // deletes a field
  const handleDeleteApproverField = () => {
    if (selectedApprovers.length > 1) {
      const updatedTextFields = selectedApprovers.slice(0, -1);
      setSelectedApprovers(updatedTextFields);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/get-approvers/"
        );
        setApproverField(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      {selectedApprovers.map((entry) => (
        <Box display="flex" alignItems="center">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              paddingBottom: "14px",
              paddingTop: "13px",
              paddingRight: "15px",
            }}
          >
            New Approver:
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={approverField}
            sx={{ width: 300, paddingBottom: "10px" }}
            renderInput={(params) => <TextField {...params} label="Approver" />}
          />
        </Box>
      ))}
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "#C8102E4D",
          },
          color: colors.black,
          marginTop: "30px",
        }}
        color="secondary"
        onClick={handleAddUserField}
      >
        Add New Approver
      </Button>
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "#C8102E4D",
          },
          color: colors.black,
          marginLeft: "30px",
          marginTop: "30px",
        }}
        color="secondary"
        onClick={handleDeleteApproverField}
      >
        Delete Approver
      </Button>
    </Box>
  );
};

export default AddApprovers;

import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { colors } from "../../theme";
import Approver from "../../types/approver";


const AddApprovers: React.FC = () => {
  const [approverField, setApproverField] = useState<Approver[]>([
    { label: "", email: "" },
  ]);

  // adds a new field
  const handleAddUserField = () => {
    setApproverField((prevApproverField) => [
      ...prevApproverField,
      {
        label: "",
        email: "",
      },
    ]);
  };

  // deletes a field
  const handleDeleteApproverField = () => {
    if (approverField.length > 1) {
      const updatedTextFields = approverField.slice(0, -1);
      setApproverField(updatedTextFields);
    }
  };
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/new_version/" + getCode + "/" + getAE + "/"
        );
        setNewVersion(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
*/
  return (
    <Box>
      {approverField.map((entry) => (
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
            sx={{ width: 300 }}
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

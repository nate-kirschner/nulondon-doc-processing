import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { colors } from "../../theme";

interface TextFieldData {
  id: number;
  minValue: string;
  maxValue: string;
  description: string;
}

const AddApprovers: React.FC = () => {
  const [textFields, setTextFields] = useState<TextFieldData[]>([
    { id: 1, minValue: "", maxValue: "", description: "" },
  ]);

  // adds a new field
  const handleAddTextField = () => {
    setTextFields((prevTextFields) => [
      ...prevTextFields,
      {
        id: prevTextFields.length + 1,
        minValue: "",
        maxValue: "",
        description: "",
      },
    ]);
  };

  // deletes a field
  const handleDeleteTextField = () => {
    if (textFields.length > 1) {
      const updatedTextFields = textFields.slice(0, -1);
      setTextFields(updatedTextFields);
    }
  };

  // updates the field when the user types by iterating through the textFields
  const handleChangeTextField = (id: number, field: string, value: string) => {
    setTextFields((prevTextFields) =>
      prevTextFields.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <Box>
      {textFields.map((entry) => (
        <Box key={entry.id} style={{ marginBottom: "10px" }}>
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
              Grade Range:
            </Typography>
            <TextField
              sx={{ width: 60, marginRight: "15px" }}
              type="text"
              label="Min"
              size="small"
              value={entry.minValue}
              onChange={(e) =>
                handleChangeTextField(entry.id, "minValue", e.target.value)
              }
            />
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                paddingTop: "13px",
                paddingBottom: "14px",
                paddingRight: "15px",
              }}
            >
              to
            </Typography>
            <TextField
              sx={{ width: 60, marginRight: "30px" }}
              type="text"
              label="Max"
              size="small"
              value={entry.maxValue}
              onChange={(e) =>
                handleChangeTextField(entry.id, "maxValue", e.target.value)
              }
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                paddingBottom: "14px",
                paddingTop: "13px",
                paddingRight: "15px",
                paddingLeft: "50px",
              }}
            >
              Description:
            </Typography>
            <TextField
              sx={{ width: 600 }}
              type="text"
              label="Student demonstrated..."
              size="small"
              value={entry.description}
              onChange={(e) =>
                handleChangeTextField(entry.id, "description", e.target.value)
              }
            />
          </Box>
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
        onClick={handleAddTextField}
      >
        Add New Range
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
        onClick={handleDeleteTextField}
      >
        Delete Range
      </Button>
    </Box>
  );
};

export default AddApprovers;

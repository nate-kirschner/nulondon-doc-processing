import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { colors } from "../../theme";

interface TextFieldData {
  id: number;
  minValue: string;
  maxValue: string;
  description: string;
}
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 }
];
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
              New Approver:
            </Typography>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Approver" />
              )}
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
        onClick={handleDeleteTextField}
      >
        Delete Approver
      </Button>
    </Box>
  );
};

export default AddApprovers;

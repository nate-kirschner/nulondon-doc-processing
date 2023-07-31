import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  TableCell,
  TableRow,
} from "@mui/material";
import { PropsWithChildren } from "react";

interface TemplateRowProps extends PropsWithChildren {
  title: string;
  index: number;
  isExpanded: boolean;
  handlePreviousAccordion: () => void;
  handleNextAccordion: () => void;
  setActiveAccordion: (active: number | null) => void;
}

const TemplateRow: React.FC<TemplateRowProps> = ({
  title,
  index,
  isExpanded,
  handleNextAccordion,
  handlePreviousAccordion,
  setActiveAccordion,
  children,
}) => {
  const handleClick = () => {
    if (isExpanded) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <TableRow>
      <TableCell colSpan={1}>
        <Accordion expanded={isExpanded}>
          <AccordionSummary onClick={handleClick}>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {children}
            <Box style={{ display: "grid", placeItems: "center" }}>
              <TableRow>
                <TableCell colSpan={1}>
                  <Button
                    sx={{ margin: "4px" }}
                    variant="outlined"
                    onClick={handlePreviousAccordion}
                    color="error"
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ margin: "4px" }}
                    variant="outlined"
                    onClick={handleNextAccordion}
                    color="error"
                  >
                    Next
                  </Button>
                  <Button
                    sx={{ margin: "4px" }}
                    variant="outlined"
                    onClick={() => setActiveAccordion(null)}
                    color="error"
                  >
                    Close
                  </Button>
                </TableCell>
              </TableRow>
            </Box>
          </AccordionDetails>
        </Accordion>
      </TableCell>
    </TableRow>
  );
};

export default TemplateRow;

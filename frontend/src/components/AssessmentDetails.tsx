import { Center } from "@chakra-ui/react";
import { Box, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const AssessmentDetails: React.FC = () => {
    const courseDummy = {
        title: "Course 1",
        code: "IS3500",
        credits: 4,
        assessments: [{ title: "Assessment 2", weighting: 50, versions: [1, 2, 3] }]
    };
    return (
        <Box>
            <Typography
                textAlign="left"
                sx={{
                    fontSize: "18px",
                    fontFamily: "lato"
                }}>
                Course Title: {courseDummy.title}<br />
                Course Code: {courseDummy.code}<br />
                Course Leader: Mark Martin<br />
                Level: Level 4
                <br /><br />
                Sitting: First Sitting<br />
                Assessment: {courseDummy.assessments[0].title}<br />
                Version: {courseDummy.assessments[0].versions[2]}<br />
                Assessment Number: AE4
                <br /><br />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "80%",
                    }}>
                    <Box>
                        Assessment Type:
                        <TextField id="outlined-basic" label="" variant="outlined" size="small" /><br />
                    </Box>
                    <Box>
                        Restrictions on Time/Length:
                        <TextField id="outlined-basic" label="" variant="outlined" size="small" /><br />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "20%"
                    }}>
                    <Typography>
                        Individual/Group:
                    </Typography>
                    <Select
                        labelId="individual-group"
                        id="individual-group"
                        label=""
                        size="small"
                        fullWidth>
                        <MenuItem value={"Individual"}>Individual</MenuItem>
                        <MenuItem value={"Group"}>Group</MenuItem>
                    </Select>
                </Box>
                Assessment Weighting: {courseDummy.assessments[0].weighting} %<br />
                <Box>
                    <Typography>
                        Issue Date:
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Typography>
                </Box><br />
                Hand In Deadline: 
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "90%",
                    }}>
                    <Typography>
                        Planned Feedback Deadline:
                        <TextField id="outlined-basic" label="" variant="outlined" size="small" /><br /><br />
                    </Typography>
                    <Typography>Mode of Submission:
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={""}
                            label=""
                            fullWidth
                            size="small">
                            <MenuItem value={"online"}>Online</MenuItem>
                            <MenuItem value={"in-person"}>In person</MenuItem>
                        </Select>
                    </Typography>
                </Box>
                Anonymous Marketing:
                <FormControlLabel control={<Switch defaultChecked />} label="" /><br />
            </Typography>
        </Box>
    );
};

export default AssessmentDetails;
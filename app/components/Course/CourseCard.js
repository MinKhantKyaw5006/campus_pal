import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CourseCard = ({ course }) => {
    return (
        <Card variant="outlined" sx={{height:"140px", marginBottom: "10px", position: "relative", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "190px", // Set the height of the card
                    "@media (max-width: 768px)": {
                        // Apply styles for screens smaller than 768px (adjust as needed)
                        height: "auto", // Reset height for mobile
                    },
                }}
            >
                {/* Red background portion */}
                <Box
                    style={{
                        display: "flex",
                        alignItems: "center", // Center vertically
                        justifyContent: "center", // Center horizontally
                        height: "52px", // Height of the red portion
                        background:
                            "linear-gradient(90deg, #651428 9.58%, #3E0527 67.41%)",
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            color: "white", // White color for the title
                            textAlign: "center",
                        }}
                    >
                        {course.title}
                    </Typography>
                </Box>
                <Grid container alignItems="stretch" sx={{ flexGrow: 1 }}>
                    {/* Image Box */}
                    <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img
                            src="/Course/programming.png" // Replace with the actual path to your image in the public folder
                            alt="Course Image"
                            width="72"
                            height="72"
                        />
                    </Grid>
                    {/* Prerequisite Box */}
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                padding: "20px 0px 20px 0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "left",
                                justifyContent: "center",
                                height: "100%", // Fill the available vertical space
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    textAlign: "left",
                                    fontWeight: "bold",
                                    color: "#651428",
                                }}
                            >
                                Prerequisite
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    textAlign: "left",
                                }}
                            >
                                Location
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0}>
                        <Box
                            sx={{
                                borderLeft: "2px solid gray",
                                height: "80%",
                                marginTop: "5px",
                                width: "0px",
                            }}
                        />
                    </Grid>

                    {/* Location Box */}
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                padding: "20px 20px 20px 10px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "left",
                                justifyContent: "center",
                                height: "100%",
                            }}
                        >
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    textAlign: "left",
                                    fontWeight: "bold",
                                    color: "#651428",
                                }}
                            >
                                {course.prerequisite}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                sx={{
                                    textAlign: "left",
                                }}
                            >
                                {course.location}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        {/* Arrow Box */}
                        <Box
                            sx={{
                                padding: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <ArrowForwardIosIcon
                                sx={{
                                    fontSize: "large",
                                    color: "gray",
                                    opacity: 0.7,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
};

export default CourseCard;

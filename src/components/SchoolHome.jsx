import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
import Calendar from "./CalendarView"; // Uses same Calendar as Dashboard
import Sidebar from "./Sidebar";
import EventList from "./EventList";

const SchoolHome = () => {
  const { schoolId } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleMonthChange = (monthIndex) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    newDate.setDate(1);
    setSelectedDate(newDate);
  };

  return (
    <Box sx={{ background: '#f3f3f9', minHeight: '100vh', p: 0 }}>
      <Box display="flex" gap={4} alignItems="flex-start" width="100vw" sx={{ overflow: 'hidden' }}>
        <Sidebar selectedDate={selectedDate} onMonthClick={handleMonthChange} sx={{ height: '100vh', width: '220px', flexShrink: 0 }} />
        <Paper elevation={3} className="dashboard-calendar-card" style={{ flex: 1, minWidth: 0, maxWidth: '1100px', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" gutterBottom>
            School Calendar
          </Typography>
          {/* Calendar grid area, scrollable */}
          <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
            <Calendar
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
              schoolId={schoolId}
              showEventDetails={false}
            />
          </Box>
          {/* Event detail section, always visible at the bottom */}
          <Box sx={{ mt: 2, flexShrink: 0 }}>
            <Typography variant="h6" gutterBottom>
              Events on {selectedDate.toDateString()}:
            </Typography>
            {/* You can add event details here if needed */}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SchoolHome;

import React, { useContext, useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import TextField from "@material-ui/core/TextField";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Button, ButtonGroup, IconButton } from "@material-ui/core";

export default function DateFilter({
  startdate,
  setstartdate,
  enddate,
  setenddate,
}) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div style={{}}>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button
          style={{
            textTransform: "none",
            fontWeight: "400",
            borderColor: "#bbbbbb",
            backgroundColor: "#727272d4",
          }}
          onClick={handleClickToOpen}
        >
          FilterDate
        </Button>
        <Button
          style={{
            borderColor: "#bbbbbb",
            backgroundColor: "#727272d4",
          }}
        >
          <IconButton
            style={{
              margin: "0px",
              width: "5px",
              height: "2px",
              color: "white",
            }}
            onClick={() => {
              setstartdate("");
              setenddate("");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </Button>
      </ButtonGroup>

      <Dialog
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleToClose}
      >
        <DialogTitle>SelectDates</DialogTitle>
        <DialogContent>
          <TextField
            value={startdate}
            onChange={(e) => setstartdate(e.target.value)}
            type="date"
            id="startdate"
            label="Start Date"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ margin: "6px", width: "155px" }}
          />

          <TextField
            value={enddate}
            label="End Date"
            onChange={(e) => setenddate(e.target.value)}
            type="date"
            id="enddate"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ margin: "6px", width: "155px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

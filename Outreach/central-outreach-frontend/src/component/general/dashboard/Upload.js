import React, { useContext, useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../../axiosAPI";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { BaseUrl } from "../../../URLs";
// import LinearIndeterminate from "./fileProgressBar";
import { Chip } from "@material-ui/core";
import { useSnackbar } from "notistack";

export default function Upload({
  file,
  ws,
  name,
  action,
  setReceivedData,
  setResponseData,
  buttoncolor,
  // closebutton
}) {
  const [open, setOpen] = React.useState(false);
  const [fileName, setFileName] = useState(null);
  const [fileHeader, setFileHeader] = useState(file);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [fileLoader, setfileLoader] = useState(false);
  const [hide, sethide] = useState(false);
  const [fileEvent, setfileEvent] = useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const fetchData = async () => {
    const response = await axiosInstance.get(
      BaseUrl + "api/dashboard/iocwsfile/"
    );
    const d = response.data;

    setResponseData(response.data);
    setReceivedData(true);
  };

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
    fetchData();
    setFileName(null);
  };

  const handleDelete = () => {
    sethide(true);
    setfileEvent(null);
  };

  const changeHandlerPhoto = (event) => {
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);
    uploadData.append("name", event.target.files[0].name);
    uploadData.append("id", ws);

    console.log(uploadData, "Upload data");

    axiosInstance
      .post("/api/dashboard/AddIocWkshopPhoto/", uploadData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        enqueueSnackbar("Photo uploaded Successfully", {
          variant: "success",
        });
      });
  };

  const changeHandlerAttendance = (event) => {
    const uploadData = new FormData();
    uploadData.append("attendance", event.target.files[0]);
    uploadData.append("name", event.target.files[0].name);
    uploadData.append("id", ws);

    axiosInstance
      .post("/api/dashboard/AddIocWkshopAttendance/", uploadData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        enqueueSnackbar("PDF uploaded Successfully", {
          variant: "success",
        });
      });
  };

  const changeHandlerReport = (event) => {
    const uploadData = new FormData();
    uploadData.append("report", event.target.files[0]);
    uploadData.append("name", event.target.files[0].name);
    uploadData.append("id", ws);

    axiosInstance
      .post("/api/dashboard/AddIocWkshopReport/", uploadData, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        enqueueSnackbar("PDF uploaded Successfully", {
          variant: "success",
        });
      });
  };

  const onChangeHandler = (event) => {
    console.log("Handler");

    if (name == "file") {
      return changeHandlerPhoto(event);
    } else if (name == "attend") {
      return changeHandlerAttendance(event);
    } else if (name == "report") {
      return changeHandlerReport(event);
    }
  };

  const onChangeInputHandler = (event) => {
    console.log("Input handler");
    if (name == "file") {
      setFileName(event.target.files[0].name);
      setFileHeader("Inserted Photo!");
      sethide(false);
    } else if (name == "attend") {
      setFileName(event.target.files[0].name);
      setFileHeader("Inserted Photo!");
      sethide(false);
    } else if (name == "report") {
      setFileName(event.target.files[0].name);
      setFileHeader("Inserted Photo!");
      sethide(false);
    }
  };

  return (
    <div style={{}}>
      {console.log(buttoncolor)}
      {buttoncolor !== "change" ? (
        <Button
          style={{ textTransform: "none", fontWeight: "400" }}
          onClick={handleClickToOpen}
        >
          {action}
        </Button>
      ) : (
        <Button
          color="primary"
          variant="outlined"
          style={{ textTransform: "none", marginBottom: "8px" }}
          onClick={handleClickToOpen}
        >
          {action}
        </Button>
      )}
      <Dialog
        open={open}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleToClose}
      >
        <DialogTitle>{fileHeader}</DialogTitle>
        <DialogContent>
          <label htmlFor="upload">
            <input
              style={{ display: "none" }}
              type="file"
              name={name}
              id="upload"
              accept={name == "file" ? ".png,.jpg,.jpeg" : ".pdf"}
              onChange={(event) => {
                onChangeInputHandler(event);
                setfileEvent(event);
              }}
            />
            <Button
              color="primary"
              variant="outlined"
              autoFocus
              style={{ textTransform: "none" }}
              component="span"
              // onClick={sethide(false)}
            >
              <span>Browse</span>{" "}
              <AttachFileIcon style={{ height: 18, color: "#3f51b5" }} />
            </Button>{" "}
            {/* <LinearProgress /> */}
          </label>
          <DialogContentText>
            {!hide && (
              <Chip
                label={fileName}
                onDelete={handleDelete}
                variant="outlined"
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              fileEvent && onChangeHandler(fileEvent);
            }}
            autoFocus
          >
            Upload
          </Button>
          <Button
            onClick={handleToClose}
            color="primary"
            variant="outlined"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

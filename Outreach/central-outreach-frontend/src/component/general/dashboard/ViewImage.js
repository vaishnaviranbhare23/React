import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { BaseUrl } from "../../../URLs";
import PDFReader from "./PDF_Reader/PDFReader";
import FileUploader from "./fileProgressBar";
import axiosInstance from "../../../axiosAPI";
import { useSnackbar } from "notistack";
import { DialogContentText } from "@material-ui/core";

export default function ViewImage({
  image,
  name,
  ws,
  pdf_url,
  setReceivedData,
  setResponseData,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [afterDelete, setafterDelete] = useState(true);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [openDelete, setopenDelete] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchData();
  };
  const fetchData = async () => {
    const response = await axiosInstance.get(
      BaseUrl + "api/dashboard/iocwsfile/"
    );
    setResponseData(response.data);
    setReceivedData(true);
  };

  const handledeleteWkshop = (fileName, ws) => {
    console.log(fileName);
    var imageJson = { fileName: fileName, fileId: ws, type: name };
    axiosInstance
      .post("/api/dashboard/DeleteWkshopPhoto/", imageJson)
      .then((res) => {
        image = null;
        setafterDelete(false);
        handleClose();
        enqueueSnackbar("Data Deleted Successfully", {
          variant: "success",
        });
      });
  };

  const ChangeDeleteView = ({ name, fileHeader, wsInfo, label }) => {
    const handleDeleteOpen = () => {
      setopenDelete(true);
    };

    const handleDeleteClose = () => {
      setopenDelete(false);
    };
    const handleDeleteConfirmClose = () => {
      setopenDelete(false);
      handledeleteWkshop(wsInfo, ws.id);
    };
    return (
      <div style={{ display: "flex" }}>
        {/* <Upload
                  action="Change"
                  ws={ws.id}
                  setReceivedData={setReceivedData}
                  setResponseData={setResponseData}
                  file="Insert Photo"
                  name="file"
                  buttoncolor="change"
                /> */}

        <FileUploader
          setReceivedData={setReceivedData}
          setResponseData={setResponseData}
          fileHeader={fileHeader}
          name={name}
          ws={ws.id}
          action="Change"
          buttoncolor="change"
        />
        <Button
          color="secondary"
          variant="outlined"
          style={{
            textTransform: "none",
            marginBottom: "8px",
            marginLeft: "5px",
          }}
          onClick={() => {
            handleDeleteOpen();
          }}
        >
          Delete
        </Button>
        <Dialog
          open={openDelete}
          onClose={handleDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want delete this {label}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteClose} color="primary">
              No
            </Button>
            <Button
              onClick={handleDeleteConfirmClose}
              color="primary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={BaseUrl + "api" + wsInfo}
          style={{
            color: "#3f51b5",
            marginTop: 5,
            padding: 6,
            marginLeft: 10,
          }}
        >
          Open {label} in new Tab <i class="fa fa-external-link"></i>
        </a>
      </div>
    );
  };

  return (
    <div>
      <Button
        style={{ textTransform: "none", fontWeight: "400" }}
        onClick={handleClickOpen}
      >
        View/Change
      </Button>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
        <DialogTitle>
          <h4>
            {name === "photo" ? ws.workshopfile.photo.slice(9) : ""}
            {name === "attendance" ? ws.workshopfile.attendance.slice(14) : ""}
            {name === "report" ? ws.workshopfile.report.slice(10) : ""}
          </h4>
        </DialogTitle>
        <DialogContent>
          <div style={{ margin: 10 }}>
            {name === "photo" ? (
              <ChangeDeleteView
                name="image"
                label="Image"
                fileHeader="Insert Photo"
                wsInfo={ws.workshopfile.photo}
              />
            ) : (
              <></>
            )}
            {name === "attendance" ? (
              <ChangeDeleteView
                name="attendance"
                label="PDF"
                fileHeader="Insert Attendance"
                wsInfo={ws.workshopfile.attendance}
              />
            ) : (
              <></>
            )}

            {name === "report" ? (
              <ChangeDeleteView
                name="report"
                label="PDF"
                fileHeader="Insert Report"
                wsInfo={ws.workshopfile.report}
              />
            ) : (
              <></>
            )}

            {image && (
              <div>
                <img
                  style={{
                    objectFit: "contain",
                    width: "550px",
                    height: "480px",
                  }}
                  src={BaseUrl + "api" + ws.workshopfile.photo}
                />
                {console.log(image, afterDelete)}
              </div>
            )}
            {pdf_url && (
              <div style={{ height: 700, border: "2px", borderColor: "#EEE" }}>
                {name === "attendance" ? (
                  <>
                    <PDFReader
                      file={BaseUrl + "api" + ws.workshopfile.attendance}
                    />
                  </>
                ) : (
                  <>
                    <PDFReader
                      file={BaseUrl + "api" + ws.workshopfile.report}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

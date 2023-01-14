import React, { useEffect, useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import { BaseUrl } from "../../../URLs";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import axiosInstance from "../../../axiosAPI";
import axios from "axios";
import { DialogActions, DialogTitle } from "@material-ui/core";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import { create } from "filepond";

function FileUploader({
  setReceivedData,
  setResponseData,
  ws,
  fileHeader,
  name,
  action,
  buttoncolor,
}) {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState(null);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [postUrl, setpostUrl] = useState("");
  const [uploadText, setuploadText] = useState(null);

  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize
  );

  const fetchData = async () => {
    const response = await axiosInstance.get(
      BaseUrl + "api/dashboard/iocwsfile/"
    );

    setResponseData(response.data);
    setReceivedData(true);
  };
  const handleClickToOpen = () => {
    setOpen(true);
    console.log(files, "FILESS");
    if (name == "image") {
      setpostUrl("/api/dashboard/AddIocWkshopPhoto/");
    } else if (name == "attendance") {
      setpostUrl("/api/dashboard/AddIocWkshopAttendance/");
    } else if (name == "report") {
      setpostUrl("/api/dashboard/AddIocWkshopReport/");
    }
  };

  const handleToClose = () => {
    setOpen(false);
    fetchData();
  };

  const processFile = (
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort
  ) => {
    const uploadData = new FormData();
    uploadData.append(name, file);
    uploadData.append("name", file.name);
    uploadData.append("id", ws);

    console.log(uploadData, "Upload data");
    console.log(files, "FILESS");

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // the request itself
    axiosInstance
      .post(postUrl, uploadData, {
        "content-type": "multipart/form-data",
      })
      .then((response) => {
        load(file);
      })
      .catch((error) => {
        console.log(error);
      });
    progress(true, 0, 1024);
    setuploadText(null);

    return {
      abort: () => {
        source.cancel("Operation cancelled by the user.");
        abort();
      },
    };
  };

  return (
    <div>
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
        <DialogContent>
          <DialogTitle>
            {fileHeader}
            <small>
              <span
                style={{
                  color: "#ff2828",
                  fontSize: "0.8rem",
                  marginLeft: "15px",
                }}
              >
                (File size cannot be greater than 2MB)
              </span>
            </small>

            {uploadText && (
              <span
                style={{
                  color: "rgb(120 120 120)",
                  fontSize: "14px",
                  marginLeft: "180px",
                  fontWeight: 400,
                }}
              >
                {" "}
                {/* Click on the upload icon. */}
                {uploadText}
              </span>
            )}
          </DialogTitle>

          <FilePond
            files={files}
            oninit={() => {
              setuploadText(null);
            }}
            onupdatefiles={setFiles}
            onupdatefiles={() => {
              setuploadText("Click on the Upload icon");
            }}
            allowFileTypeValidation="true"
            credits="false"
            allowRevert="false"
            acceptedFileTypes={
              name == "image" ? ["image/*"] : ["application/pdf"]
            }
            maxFileSize="2MB"
            // fileValidateTypeDetectType={(source, type) =>
            //   new Promise((resolve, reject) => {
            //     console.log("type");
            //     resolve(type);
            //   })
            // }
            labelButtonProcessItem="Click on upload icon"
            instantUpload="false"
            maxFiles={1}
            server={{
              fetch: null,
              revert: null,
              process: (
                fieldName,
                file,
                metadata,
                load,
                error,
                progress,
                abort
              ) => {
                processFile(
                  fieldName,
                  file,
                  metadata,
                  load,
                  error,
                  progress,
                  abort
                );
              },
            }}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <DialogActions>
            <Button
              onClick={handleToClose}
              color="primary"
              variant="outlined"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FileUploader;

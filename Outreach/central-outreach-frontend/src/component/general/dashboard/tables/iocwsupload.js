import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../../../axiosAPI";
import { useSnackbar } from "notistack";
import store from "../../../../store/index";
import ViewImage from "../ViewImage";
import { BaseUrl } from "../../../../URLs";
import { AppContext } from "../BasicDashboard";
import MaterialTable from "material-table";
import DateFilter from "./datefilter";
import FileUploader from "../fileProgressBar";

function WSFileComponent({
  wsData,
  setWsData,
  wsFileData,
  setWsFileData,
  lookDate,
}) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [data, setData] = useState([]);

  const [responseData, setResponseData] = useState([]);
  const [receivedData, setReceivedData] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [id, setId] = useState(null);
  const authState = store.getState().Authdata;

  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const [Date3, setDate3] = useState(); /* add state for starting date */
  const [Date4, setDate4] = useState(); /* add state for ending date */

  useEffect(() => {
    fetchWsFileData();
    console.log("WSFile");
  }, []);

  const fetchWsFileData = async () => {
    const response = await axiosInstance.get(
      BaseUrl + "api/dashboard/iocwsfile/"
    );
    setWsFileData(response.data);
    setReceivedData(true);
    const d = response.data;
    for (var wsd = d.length - 1; wsd >= 0; wsd--) {
      //  lookup[d[wsd].id] = d[wsd].date;
      lookDate.push(d[wsd].date.toString());
      console.log(lookDate);
    }
  };

  useEffect(() => {
    setData(responseData);
    console.log(responseData);
    console.log(state);
  }, [responseData]);
  console.log({ ...state });

  const [columns, setColumns] = useState([
    {
      title: "Date",
      field: "date",
      type: "date",
      editable: "never",
      dateSetting: { locale: "en-GB" },
      validate: (rowData) =>
        rowData.date
          ? true
          : {
              isValid: false,
              helperText: "Select a Date.",
            },
      filterComponent: (props) => (
        <DateFilter
          startdate={Date3}
          setstartdate={setDate3}
          enddate={Date4}
          setenddate={setDate4}
        />
      ),
    },
    {
      title: "Participating Institute",

      field: "nc.pi.name",
      editable: "never",
      filtering: false,
      // filterComponent: (props) => <FilterByDateRange row="2" />,
    },
    {
      title: "Nodal Center",
      field: "nc.name",
      editable: "never",
    },
    {
      title: "Attended Participants",
      field: "no_parti",
      // filtering: false,
      validate: (rowData) =>
        rowData.no_parti && /^[1-9][0-9]*$/.test(rowData.no_parti)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },
    {
      title: "Usage",
      field: "usage",
      validate: (rowData) =>
        rowData.usage && /^[1-9][0-9]*$/.test(rowData.usage)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },

    {
      title: "Photo",
      filtering: false,

      render: (ws) => {
        if (ws.workshopfile == null) {
        } else {
          return ws.workshopfile.photo ? (
            <div>
              <ViewImage
                image={BaseUrl + "api" + ws.workshopfile.photo}
                name="photo"
                ws={ws}
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
              />
            </div>
          ) : (
            <div>
              {/* <Upload
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                file="Insert Photo"
                ws={ws.id}
                name="file"
                action="Upload"
              /> */}

              <FileUploader
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                fileHeader="Insert Photo"
                name="image"
                ws={ws.id}
                action="Upload"
              />
            </div>
          );
        }
      },
    },
    {
      title: "Attendance",
      filtering: false,
      render: (ws) => {
        if (ws.workshopfile == null) {
        } else {
          return ws.workshopfile.attendance ? (
            <div>
              <ViewImage
                pdf_url={BaseUrl + "api" + ws.workshopfile.attendance}
                name="attendance"
                ws={ws}
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                action="Upload"
              />
            </div>
          ) : (
            <div>
              {/* <Upload
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                file="Insert Attendance"
                ws={ws.id}
                name="attend"
                action="Upload"
              /> */}
              <FileUploader
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                fileHeader="Insert Attendance"
                name="attendance"
                action="Upload"
                ws={ws.id}
              />
            </div>
          );
        }
      },
    },
    {
      title: "Report",
      filtering: false,
      render: (ws) => {
        if (ws.workshopfile == null) {
        } else {
          return ws.workshopfile.report ? (
            <div>
              <ViewImage
                pdf_url={BaseUrl + "api" + ws.workshopfile.report}
                name="report"
                ws={ws}
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
              />
            </div>
          ) : (
            <div>
              {/* <Upload
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                file="Insert Report"
                ws={ws.id}
                name="report"
                action="Upload"
              /> */}
              <FileUploader
                setReceivedData={setReceivedData}
                setResponseData={setWsFileData}
                fileHeader="Insert Report"
                name="report"
                action="Upload"
                ws={ws.id}
              />
            </div>
          );
        }
      },
    },
    {
      title: "Status",
      field: "status",
      editable: "never",
      render: (ws) => {
        return ws.status === "Pending" ? (
          <div>
            <span
              className="badge badge-pill font  mb-0"
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "rgb(108, 112, 115)",
              }}
            >
              &nbsp;{ws.status}&nbsp;
            </span>
          </div>
        ) : (
          <div>
            <span
              className="badge badge-pill font  mb-0"
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "rgb(0, 81, 151)",
              }}
            >
              {ws.status}
            </span>
          </div>
        );
      },
    },
  ]);

  const myData = () => {
    /* function to determine the data to be rendered to the table */
    let myArr = [];
    if (Date3 && Date4) {
      wsFileData.map((item) =>
        item.date >= Date3 && item.date <= Date4 ? myArr?.push(item) : null
      );
    } else {
      myArr =
        wsFileData; /* YourData is the array you want to display and filter */
    }

    return myArr;
  };
  return (
    <div>
      {receivedData === true ? (
        <MaterialTable
          style={{ boxShadow: "none" }}
          localization={{
            body: {
              editRow: {
                deleteText: (
                  <div
                    style={{
                      backgroundColor: "#ffe5e5",
                      color: "#e73939",
                      display: "flex",
                      padding: "10px",
                      flexDirection: "column",
                      alignItems: "center",
                      letterSpacing: "2px",
                    }}
                  >
                    Are you sure you want to delete this Workshop?
                  </div>
                ),
              },
            },
          }}
          options={{
            // actionsCellStyle: { backgroundColor: "#d1d1d157" },
            filterRowStyle: { backgroundColor: "#d1d1d157" }, //rgb(197 197 197 / 65%);
            DeleteRowStyle: { backgroundColor: "#d1d1d157" }, //rgb(197 197 197 / 65%);
            onRowDeleteStyle: { backgroundColor: "#d1d1d157" },
            rowDeleteStyle: { backgroundColor: "#d1d1d157" },
            RowDeleteStyle: { backgroundColor: "#d1d1d157" },

            actionsColumnIndex: -1,
            rowStyle: (rowData) => ({
              backgroundColor:
                rowData.status === "Pending"
                  ? "rgba(179, 223, 255, 0.31)"
                  : "rgba(179, 223, 255, 0.8)",
            }),
            exportButton: true,
            pageSize: 3,
            pageSizeOptions: [3, 5, 10, 20, 30],
            draggable: false,
            exportAllData: true,
            filtering: true,
          }}
          title="Pending and Approved Workshops"
          columns={columns}
          data={myData()}
          editable={
            authState.role === "IOC" && {
              onRowUpdate: (newData, oldData) => {
                console.log(newData, oldData, "NewOld");

                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...wsFileData];
                    const index = oldData.tableData.id;
                    // dataUpdate[index] = newData;

                    axiosInstance
                      .post("/api/dashboard/UpdateIocWkshop/", newData)
                      .then((res) => {
                        dataUpdate[index] = res.data;
                        setWsFileData([...dataUpdate]);
                      });

                    resolve();
                  }, 1000);
                });
              },

              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...wsFileData];
                    const index = oldData.tableData.id;

                    const deleteData = dataDelete[index];
                    console.log("Deleted Data : ", dataDelete[index]);

                    axiosInstance.post(
                      "/api/dashboard/DeleteIocWkshop/",
                      deleteData
                    );

                    dataDelete.splice(index, 1);
                    setWsFileData([...dataDelete]);
                    enqueueSnackbar("Data Deleted Successfully", {
                      variant: "success",
                    });
                    resolve();
                  }, 1000);
                }),
            }
          }
        />
      ) : (
        <div>
          <div className="loader-box">
            <div className="loader-10"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WSFileComponent;

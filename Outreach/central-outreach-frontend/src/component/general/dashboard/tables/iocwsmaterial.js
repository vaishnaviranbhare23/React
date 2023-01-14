import MaterialTable, { MTableToolbar } from "material-table";
import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../../../axiosAPI";
import { useSnackbar } from "notistack";
import store from "../../../../store/index";
import { BaseUrl } from "../../../../URLs";
import { AppContext } from "../BasicDashboard";
import MyAction from "../IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Button, IconButton } from "@material-ui/core";
import DateFilter from "./datefilter";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const WSComponent = ({
  ncData,
  setNcData,
  wsData,
  setWsData,
  wsFileData,
  setWsFileData,
  lookDate,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const [data, setData] = useState([]);
  const [dataTest, setdataTest] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [receivedData, setReceivedData] = useState(false);
  const authState = store.getState().Authdata;
  const { state, dispatch } = useContext(AppContext);

  const changeInputValue = (newValue) => {
    dispatch({ type: "UPDATE_INPUT", data: newValue });
  };
  const updateNewData = (newValue) => {
    dispatch({ type: "UPDATE_WORSHOPFILE_DATA", data: newValue });
  };

  // const updateDateRange = (stdate, eddate) => {
  //   dispatch({ type: "stdate", data: stdate });
  //   dispatch({ type: "eddate", data: eddate });
  // };
  const [Date1, setDate1] = useState(); /* add state for starting date */
  const [Date2, setDate2] = useState(); /* add state for ending date */

  useEffect(() => {
    fetchWsData();
    fetchDataNC();

    console.log("WS", wsData);
  }, []);

  const lookup = {};
  const lookInactivenc = [];

  const fetchWsData = async () => {
    const response = await axiosInstance
      .get(BaseUrl + "api/dashboard/iocws/")
      .then((response) => {
        console.log(response);
        setWsData(response.data);
        setReceivedData(true);
        const d = response.data;
        for (var wsd = d.length - 1; wsd >= 0; wsd--) {
          //  lookup[d[wsd].id] = d[wsd].date;
          lookDate.push(d[wsd].date.toString());
          console.log(lookDate);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // .then((response) => console.log("!!!!!!!!!!!!!!!", response.data));
  };

  const fetchDataNC = async () => {
    const response = await axiosInstance.get(BaseUrl + "api/dashboard/iocnc/");
    console.log(response.data);
    const d = response.data;
    setNcData(response.data);
    for (var ws = d.length - 1; ws >= 0; ws--) {
      lookup[d[ws].id] = d[ws].name;

      if (d[ws].status !== true) {
        lookInactivenc.push(d[ws].id.toString());
      }
    }
  };

  const [columns, setColumns] = useState([
    {
      title: "Date",
      field: "date",
      type: "date",
      dateSetting: { locale: "en-GB" },
      validate: (rowData) =>
        // console.log(rowData.date);
        rowData.date
          ? true
          : {
              isValid: false,
              helperText: "Select a Valid Date.",
            },

      // console.log(lookDate.includes(rowData.date));
      // if (rowData.date) {
      //   const formatDate =
      //     Number(Number(rowData.date.getMonth()) + 1) <= 9
      //       ? rowData.date.getFullYear() +
      //         "-" +
      //         "0" +
      //         Number(Number(rowData.date.getMonth()) + 1) +
      //         "-" +
      //         rowData.date.getDate()
      //       : rowData.date.getFullYear() +
      //         "-" +
      //         Number(Number(rowData.date.getMonth()) + 1) +
      //         "-" +
      //         rowData.date.getDate();
      //   return lookDate.includes(formatDate) === false
      //     ? true
      //     : {
      //         isValid: false,
      //         helperText: "Select a Valid Date ",
      //       };
      // } else {
      //   return {
      //     isValid: false,
      //     helperText: "Select a Valid Date ",
      //   };
      // }

      // : {
      //     isValid: false,
      //     helperText: "Select a Valid Date ",
      //   };

      // return rowData.date && lookDate.includes(rowData.date) === false
      //   ? true
      //   : {
      //       isValid: false,
      //       helperText: "Select a Valid Date ",
      //     };

      filterComponent: (props) => (
        <DateFilter
          startdate={Date1}
          setstartdate={setDate1}
          enddate={Date2}
          setenddate={setDate2}
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
      field: "nc.id",
      lookup: lookup,
      validate: (rowData) =>
        rowData.nc && lookInactivenc.includes(rowData.nc.id) === false
          ? true
          : {
              isValid: false,
              helperText: "Select an Active Institute.",
            },
    },
    {
      title: "Expected Participants",
      field: "no_parti_exp",

      validate: (rowData) =>
        rowData.no_parti_exp && /^\d+$/.test(rowData.no_parti_exp)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },
    {
      title: "No. of Sessions",
      field: "no_sessions",

      validate: (rowData) =>
        rowData.no_sessions && /^\d+$/.test(rowData.no_sessions)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },
    {
      title: "Duration of each session in min",
      field: "duration_sessions",
      // type: "numeric",
      // filtering: false,
      validate: (rowData) =>
        rowData.duration_sessions && /^\d+$/.test(rowData.duration_sessions)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },
    {
      title: "No. of Labs planned",
      field: "no_labs",

      validate: (rowData) =>
        rowData.no_labs && /^\d+$/.test(rowData.no_labs)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid number.",
            },
    },
    {
      title: "Status",
      field: "status",
      editable: "never",
      default: "Upcoming",
      render: (ws) => {
        return (
          <div>
            <span
              className="badge badge-pill font  mb-0"
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "rgb(0, 186, 242)",
              }}
            >
              Upcoming
            </span>
          </div>
        );
      },

      // filtering: false,
    },
  ]);

  const myData = () => {
    /* function to determine the data to be rendered to the table */
    let myArr = [];
    if (Date1 && Date2) {
      wsData.map((item) =>
        item.date >= Date1 && item.date <= Date2 ? myArr?.push(item) : null
      );
    } else {
      myArr = wsData; /* YourData is the array you want to display and filter */
    }

    return myArr;
  };

  return (
    <div>
      {receivedData === true ? (
        <div>
          <MaterialTable
            style={{ boxShadow: "none" }}
            options={{
              // filterRowStyle: { backgroundColor: "rgba(246, 246, 246, 0.44)" },
              filterRowStyle: { backgroundColor: "#d1d1d157" },
              actionsColumnIndex: -1,
              addRowPosition: "first",
              exportButton: true,
              exportAllData: true,
              pageSize: 3,
              pageSizeOptions: [3, 5, 10, 20, 30],
              draggable: false,
              filtering: true,
            }}
            components={{
              Action: (props) => <MyAction {...props} />,
            }}
            icons={{
              Add: (props) => (
                <div>
                  <Button variant="contained" color="primary">
                    {" "}
                    <i className="fa fa-plus " style={{ color: "#ffffff" }} />
                    &nbsp; Add Workshop
                  </Button>
                </div>
              ),
            }}
            title="Upcoming Workshops"
            columns={columns}
            data={myData()}
            editable={
              authState.role === "IOC" && {
                onRowAdd: (newData) => {
                  console.log(newData);

                  return new Promise((resolve, reject) => {
                    setTimeout(async () => {
                      console.log("New Data : ", newData);

                      const res = await axiosInstance
                        .post("api/dashboard/AddIocWkshop/", newData)
                        .then((response) => {
                          console.log(response);
                          enqueueSnackbar("Data Added Successfully", {
                            variant: "success",
                          });

                          if (response.data.status == "Pending") {
                            changeInputValue("Pending");
                            console.log(wsFileData, "filedata");
                            setWsFileData([response.data, ...wsFileData]);

                            console.log(response.data, "filedata");

                            updateNewData(response.data);
                          } else if (response.data.status == "Upcoming") {
                            setWsData([response.data, ...wsData]);
                          }
                        })

                        .catch((err) => {
                          console.log(err);
                          enqueueSnackbar("Invalid Information", {
                            variant: "error",
                          });
                        });

                      resolve();
                    }, 1000);
                  });
                },
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(async () => {
                      const dataUpdate = [...wsData];
                      const index = oldData.tableData.id;

                      console.log("Updated Data : ", newData, newData.date);

                      // if newData.date > current.date
                      var newDate = newData.date.toString();
                      var date = newDate.split(" ");
                      let currentDate = new Date();
                      let cDay = currentDate.getDate();
                      let cMonth = currentDate.getMonth() + 1;
                      let cYear = currentDate.getFullYear();
                      let months = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ];
                      console.log(date, cDay, cMonth, cYear);

                      if (cYear > parseInt(date[3])) {
                        var isBackdated = true;
                      } else if (
                        cYear == parseInt(date[3]) &&
                        cMonth > months.indexOf(date[1]) + 1
                      ) {
                        var isBackdated = true;
                      } else if (
                        cYear == parseInt(date[3]) &&
                        cMonth == months.indexOf(date[1]) + 1
                      ) {
                        if (cDay > date[2]) {
                          var isBackdated = true;
                        } else {
                          var isBackdated = false;
                        }
                      } else {
                        var isBackdated = false;
                      }
                      console.log(isBackdated);
                      if (isBackdated) {
                        newData.status = "Pending";
                      } else {
                        newData.status = "Upcoming";
                      }

                      dataUpdate[index] = newData;
                      console.log(newData, dataUpdate[index], "New Datttaaaa");

                      // setWSFile.data[...oldData,newData]
                      const res = await axiosInstance
                        .post("api/dashboard/UpdateIocWkshop/", newData)
                        .then((response) => {
                          console.log(response);
                          if (isBackdated) {
                            setWsFileData([newData, ...wsFileData]);
                            dataUpdate.splice(index, 1);
                          }

                          setWsData([...dataUpdate]);

                          enqueueSnackbar("Data Updated Successfully", {
                            variant: "success",
                          });
                        })

                        .catch((err) => {
                          console.log(err);
                          enqueueSnackbar("Invalid Changes", {
                            variant: "error",
                          });
                        });

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...wsData];
                      const index = oldData.tableData.id;

                      const deleteData = dataDelete[index];

                      axiosInstance.post(
                        "api/dashboard/DeleteIocWkshop/",
                        deleteData
                      );

                      dataDelete.splice(index, 1);
                      setWsData([...dataDelete]);
                      enqueueSnackbar("Data Deleted Successfully", {
                        variant: "success",
                      });

                      resolve();
                    }, 1000);
                  }),
              }
            }
          />

          <span style={{ color: "rgb(217, 121, 36)" }}>
            {" "}
            *Note : If the date is in past , the workshop will be added in the{" "}
            <i>"Pending & Approved workshops"</i> table
          </span>
        </div>
      ) : (
        <div>
          <div className="loader-box">
            <div className="loader-10"></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default WSComponent;

import React, { useEffect, useState, useMemo, useContext } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import axiosInstance from "../../../../axiosAPI";
import store from "../../../../store";
import { set } from "lodash";
import { BaseUrl } from "../../../../URLs";
import { useSnackbar } from "notistack";
import { Button } from "@material-ui/core";
import MyAction from "../IconButton";

// const BaseUrl = "https://stage1.vlabs.co.in/";
const NCComponent = ({ ncData, setNcData }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [responseData, setResponseData] = useState([{}]);
  // const [data, setDat1a] = useState([]);
  const [receivedData, setReceivedData] = useState(false);
  const authState = store.getState().Authdata;
  const lookNCPin = [];

  var status;

  useEffect(() => {
    fetchData();
    setReceivedData(true);
  }, []);
  const fetchData = async () => {
    const response = await axiosInstance.get(BaseUrl + "api/dashboard/iocnc/");
    // var temp = response.data;
    setResponseData(response.data);
    setNcData(response.data);
    const d = response.data;
    setNcData(response.data);
    for (var nc = d.length - 1; nc >= 0; nc--) {
      console.log(lookNCPin);
      lookNCPin.push(d[nc].details[0].pincode.toString());
      console.log(lookNCPin);
    }
    responseData.map((res) => {
      console.log(res.status);
    });
    console.log(status, "row Status");
  };

  useEffect(() => {
    setNcData(responseData);
    console.log("Useffect", responseData);
  }, [responseData]);

  const [columns, setColumns] = useState([
    // { title: "ID", field: "id", type: "numeric" },
    {
      title: "Nodal Center",
      field: "name",
      defaultSort: "asc",
      validate: (rowData) =>
        rowData.name &&
        !/^\s+$/i.test(rowData.name) &&
        /^[a-zA-Z0-9'-_& ]+$/i.test(rowData.name)
          ? true
          : {
              isValid: false,
              helperText: "Name cannot be null.",
            },
    },
    // {
    //   title: "Total Users/Usage",
    //   render: (d) =>
    //     `${d.total_users} / ${d.total_usage}` === "undefined / undefined"
    //       ? "0 / 0"
    //       : `${d.total_users} / ${d.total_usage}`,
    //   // field: "total_users"+"total_usage",
    //   editable: "never",
    // },
    {
      title: "Users",
      field: "total_users",
      editable: "never",
    },
    {
      title: "Usage",
      field: "total_usage",
      editable: "never",
    },

    {
      title: "Location",
      field: "details[0].address_l2",
      validate: (rowData) =>
        rowData.details &&
        !/^\s+$/i.test(rowData.details[0].address_l2) &&
        /^[a-zA-Z ]+$/i.test(rowData.details[0].address_l2)
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid city name.",
            },
    },
    {
      title: "Pincode",
      field: "details[0].pincode",
      // type: "numeric",
      validate: (rowData) => {
        // var detail = rowData.details;
        // if (rowData.details) {
        //     console.log(rowData.details.pincode.toString());
        //     console.log((+rowData.details.pincode).toString().length);
        // }
        // return false;
        // console.log(lookNCPin.includes(rowData.details.pincode));
        // console.log(rowData.details.pincode, typeof rowData.details.pincode);
        return rowData.details &&
          // lookNCPin.includes(rowData.details.pincode) === false &&
          rowData.details[0].pincode >= 0 &&
          rowData.details[0].pincode.toString().length == 6
          ? true
          : {
              isValid: false,
              helperText: "Pincode should be a 6 digit (unique)",
            };
      },
    },

    {
      title: "Coordinator Name",
      field: "coordinatordetails[0].name",
      type: "string",
      validate: (rowData) =>
        rowData.coordinatordetails &&
        !/^\s+$/i.test(rowData.coordinatordetails[0].name) &&
        /^[a-zA-Z ]+$/i.test(rowData.coordinatordetails[0].name)
          ? true
          : {
              isValid: false,
              helperText: "Valid Format: FirstName LastName ",
            },
    },
    {
      title: "Coordinator Number",
      field: "coordinatordetails[0].number",
      // type: "numeric",
      // filtering: false,
      validate: (rowData) =>
        rowData.coordinatordetails &&
        /^\d{10}$/.test(rowData.coordinatordetails[0].number)
          ? true
          : {
              isValid: false,
              helperText: "Enter a Mobile number.",
            },
    },
    {
      title: "Coordinator Email",
      field: "coordinatordetails[0].email",
      // type: "email",
      // filtering: true,
      validate: (rowData) =>
        rowData.coordinatordetails &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          rowData.coordinatordetails[0].email
        )
          ? true
          : {
              isValid: false,
              helperText: "Enter a valid e-mail.",
            },
    },

    {
      title: "Status",
      field: "status",
      // lookup: { true: "Active", false: "Inactive" },
      editComponent: (props) => (
        <select
          name="status"
          id="ncstatus"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          <option value="" selected disabled hidden>
            {" "}
            --Select--{" "}
          </option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      ),

      validate: (rowData) => {
        console.log(rowData.status);
        // console.log({ true: "Active", false: "Inactive" });
        console.log(rowData.status);
        return typeof rowData.status !== "undefined"
          ? true
          : {
              isValid: false,
              helperText: "Select any one",
            };
        // return false;
      },

      render: (nc) => {
        return nc.status === false ? (
          <div>
            <span
              className="badge badge-pill font  mb-0"
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "rgb(108, 112, 115)",
              }}
            >
              Inactive
            </span>
          </div>
        ) : (
          <div>
            {" "}
            &nbsp;
            <span
              className="badge badge-pill font  mb-0"
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "rgb(0, 81, 151)",
              }}
            >
              Active
            </span>
          </div>
        );
      },
    },
  ]);

  return (
    <div>
      {receivedData === true ? (
        <MaterialTable
          // className={"f-w-600" }
          // className="Btn"
          style={{ boxShadow: "none" }}
          options={{
            filterRowStyle: { backgroundColor: "#d1d1d157" },
            actionsColumnIndex: -1,
            addRowPosition: "first",

            // rowStyle: (rowData) => ({
            //   backgroundColor: rowData.status === false ? "#ffdfdf" : "#dfffe5",
            // }),
            rowStyle: (rowData) => ({
              backgroundColor:
                rowData.status === false
                  ? "rgba(179, 223, 255, 0.31)"
                  : "rgba(179, 223, 255, 0.8)",
            }),
            exportButton: true,
            exportAllData: true,
            pageSize: 3,
            pageSizeOptions: [3, 5, 10, 20, 30],
            draggable: false,
            filtering: true,
            // rowStyle: (rowData) => ({
            //   backgrondColor:
            //     rowData.status === false ? "#ffdfdf" : "#dfffe5",
            // }),
            // rowStyle: (rowData) => ({
            //   color: rowData.status === false ? "#f80000" : "#000",
            // }),
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
                  &nbsp; Add Nodal Center
                </Button>
              </div>
            ),
          }}
          title="Nodal Center Details"
          columns={columns}
          data={ncData}
          editable={
            authState.role === "IOC" && {
              onRowAdd: (newData) => {
                console.log(newData);

                return (
                  // validation(newData) &&

                  new Promise((resolve, reject) => {
                    setTimeout(async () => {
                      // setNcData([newData, ...ncData]);

                      console.log("New Data : ", newData);
                      // var st =
                      //   newData.status == "true" || newData.status == true;
                      const res = await axiosInstance
                        .post("api/dashboard/AddNc/", newData)

                        .then((response) => {
                          setNcData([newData, ...ncData]);
                          console.log(response);
                          enqueueSnackbar("Data Added Successfully", {
                            variant: "success",
                          });
                          // newData.status = st;
                          setNcData([response.data, ...ncData]);
                          console.log(ncData);
                        })

                        .catch((err) => {
                          console.log(err);
                          enqueueSnackbar("Invalid Information ", {
                            variant: "error",
                          });
                        });
                      console.log(res);

                      resolve();
                    }, 1000);
                  })
                );
              },
              onRowUpdate: (newData, oldData) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    console.log("Updated Data : ", newData);
                    const dataUpdate = [...ncData];
                    const index = oldData.tableData.id;
                    var st = newData.status == "true" || newData.status == true;

                    console.log(st, newData, oldData);

                    axiosInstance
                      .post("api/dashboard/UpdateNc/", newData)
                      .then((res) => {
                        console.log(res.data);
                        newData.status = st;
                        dataUpdate[index] = newData;
                        setNcData([...dataUpdate]);
                        enqueueSnackbar("Data Updated Successfully", {
                          variant: "success",
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                        enqueueSnackbar("Invalid Update ", {
                          variant: "error",
                        });
                      });

                    resolve();
                  }, 1000);
                });
              },
              // onRowDelete: (oldData) =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       const dataDelete = [...ncData];
              //       const index = oldData.tableData.id;

              //       const deleteData = dataDelete[index];
              //       console.log("Deleted Data : ", dataDelete[index]);

              //       axiosInstance.post("api/dashboard/DeleteNc/", deleteData);

              //       dataDelete.splice(index, 1);
              //       setNcData([...dataDelete]);
              //       enqueueSnackbar("Data Deleted Successfully", {
              //         variant: "success",
              //       });

              //       resolve();
              //     }, 1000);
              //   }),
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
};
export default NCComponent;

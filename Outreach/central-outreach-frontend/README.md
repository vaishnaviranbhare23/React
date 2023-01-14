# COP Frontend Project

[[_TOC_]]



## Paths to important files
| Sr No. |            Filename | Path                                 |                                         Note                                          |
| :----: | ------------------: | :----------------------------------- | :-----------------------------------------------------------------------------------: |
|        |        `reducer.js` | `./src/redux/auth/`                  |                              Main Authentication Reducer                              |
|        |          `route.js` | `./src/route/`                       |                                  List of all Routes                                   |
|        |       `axiosAPI.js` | `./`                                 |            Source File for Axios Instance which handles Tokens and Headers            |
|        |         `header.js` | `./src/component/common/header/`     |                                   Header Component                                    |
|        |        `default.js` | `./src/component/general/dashboard/` |                                Landing Page Component                                 |
|        | `BasicDashboard.js` | `./src/component/general/dashboard/` |                               Basic Dashboard Component                               |
|        |   `toastdismiss.js` | `./src/component/ui-element/`        |                                Toast Message Component                                |
|        |          `index.js` | `./`                                 |               Index File, should contain all Routes and Major Redirects               |
|        |          `login.js` | `./src/pages/authentication/`        | Login Component (this component contains the majority of calls to `AuthData` reducer) |        
|        |          `emailsent.js` | `./src/pages/authentication/`        | Email sent to change the password |     
|        |          `forgotpasswd.js` | `./src/pages/authentication/`        | Forgot Password |                  
|         |    `ControlPanel.js`, `Loader.js`,`PDFReader.js`   |   `/src/component/general/dashboard/PDF_Reader/`        | For Pdf view |
|         |    `datefilter.js`   |   `/src/component/general/dashboard/tables/`        | Date sorting for IOC workshops |
|         |    `iocncmaterial.js`   |   `/src/component/general/dashboard/tables/`        | Nodal Center Table |
|         |    `iocwsmaterial.js`   |   `/src/component/general/dashboard/tables/`        | Upcoming Workshop Table |
|         |    `iocwsupload.js`   |   `/src/component/general/dashboard/tables/`        | Pending and Approved Workshop Table |
|         |    `ViewImage.js`   |   `/src/component/general/dashboard/`        | For viewing Image from workshop table |
|         |    `Upload.js`   |   `/src/component/general/dashboard/`        | For uploading files in workshop table |






## Current Routes
_As per `route.js` mentioned in table above_
| URL                   | Component Name |          Note          |
| :-------------------- | :------------: | :--------------------: |
| `/dashboard/default/` |    Default     | Landing Page Component |
| `/user/dashboard/`    | BasicDashboard | _temporary component_  |
| `/pages/login/`       |     Login      |    Login Component     |



_There are multiple apps in this project as update of this file. All Apps Except for `Customizer` are of no practical use to COP._


## `.env`  template
| key                    | environment type |             value             |            note            |
| :--------------------- | :--------------: | :---------------------------: | :------------------------: |
| REACT_APP_PUBLIC_URL   |   development    | `https://stage3.vlabs.co.in/` | Self URL of hosted project |
|                        |    production    |          _not known_          |      _same as above_       |
| REACT_APP_API_ROOT_URL |   development    | `https://stage1.vlabs.co.in/` |  root URL of API project   |
|                        |    production    |          _not known_          |      _same as above_       |


#### template `.env` for local deployment
```env
REACT_APP_PUBLIC_URL="https://localhost:3000/"
REACT_APP_API_ROOT_URL=http://localhost:8000/
```


## Add NC Form

### Postal Pincode API (Third-Party)
##### Methods
1. GET request to https://api.postalpincode.in/pincode/110001
2. Returns  following response in data
```
{
   "Message":"Number of Post office(s) found: 21",
   "Status":"Success",
   "PostOffice":[
      {
         "Name":"Baroda House",
         "Description":"",
         "BranchType":"Sub Post Office",
         "DeliveryStatus":"Non-Delivery",
         "Circle":"New Delhi",
         "District":"Central Delhi",
         "Division":"New Delhi Central",
         "Region":"Delhi",
         "State":"Delhi",
         "Country":"India"
      }
   ]
} 
```

__In case of failure from Third Party API, user can input the location manually.__
<br>
[Pincode verification API](http://www.postalpincode.in/Api-Details)
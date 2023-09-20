import React, { useRef, useEffect, useState } from "react";
import { MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { UserPlusIcon } from "@heroicons/react/24/solid";
import { PiEyeThin } from "react-icons/pi";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Textarea,
  Button,
  CardBody,
  Chip,
  Dialog,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Progress,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["Full name", "Nationality", "Occupation", "Status", ""];


export default function CompanyKYC() {
  const [tab, setTab] = useState("1");
  const [open, setOpen] = useState(false);
  const [openPro, setOpenPro] = useState(false);


  const [ID, setID] = useState("1");
  const [data, setData] = useState({});
  const [TABLE_ROWS, setDataTable] = useState([]);
  const [company, setCompany] = useState({
    name: "",
    physical_address: "",
    number_of_employees: "",
    email_address: "",
    phone: "",
    directors_names:"",
  });

  const [search, setSearch] = useState("");

  const handleOpen = (results) => {
    setOpen((cur) => !cur);
  };
  const handleOpenPro = (results) => {
    setOpenPro((cur) => !cur);
  };
  const handleForm = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

 const submitCompany = async () => {
    try {
      axios
        .post("http://127.0.0.1:8080/api/companies", company)
        .then((response) => {
          console.log("Response:", response.data);
          alert("Company added")
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual axios API call
        let response = await axios.get(
          "http://127.0.0.1:8080/api/companies"
        );
        response = response.data.items;
        console.log(response)
        const results = response.filter((row) => row.id === ID);
        if (results.length !== 0) {
          setData(results);
        }
        setDataTable(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataIfNeeded = async () => {
      if (ID) {
        await fetchData();
      }
    };
    fetchDataIfNeeded();
  }, [ID]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace with your actual axios API call
  //       // const response = await axios.get("https://api.example.com/data");
  //       let response = TABLE;
  //       const results = response.filter((row) => {
  //         return (
  //           row.id === search ||
  //           row.name.includes(search) ||
  //           row.licenseNo === search
  //         );
  //       });
  //       setDataTable1(results);
  //       console.log(results);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   const fetchDataIfNeeded = async () => {
  //     if (search !== "") {
  //       await fetchData();
  //     } else {
  //       setDataTable1(TABLE);
  //     }
  //   };

  //   fetchDataIfNeeded();
  // }, [search]);

  // Ensure useEffect runs whenever ID changes

  const ViewDetails = (id) => {
    setID(id);
    setOpen(true);
  };

  const ViewDetailsPro = (id) => {
    setID(id);
    setOpenPro(true);
  };

  return (
    <div className="px-20 pt-[125px]">
      <Card className="h-full w-full  mt-10 mb-20">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Company Profiles
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about company
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Client
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    name,
                    number_of_employees,
                    physical_address,
                    email_address,
                    phone,
                    id,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center">
                         
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                           
                        
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {number_of_employees}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {physical_address}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="View">
                          <IconButton
                            onClick={() => {
                              ViewDetailsPro(id);
                            }}
                            variant="text"
                          >
                            <PiEyeThin className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 3
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <CardHeader
            variant="gradient"
            // color="blue"
            className="mb-4  grid  h-20 place-items-center bg-[#bfbfc0]"
          >
            <Typography variant="h4" color="white">
              Company / Client Details
            </Typography>
          </CardHeader>
          <CardBody className="grid grid-cols-3 gap-4">
            <div>
              <label>Client Name</label>
              <Input
                label="Name"
                size="lg"
                name="name"
                onChange={handleForm}
                value={company.name}
              />
            </div>
            <div>
              <label>Location</label>
              <Input
                label="Location"
                size="lg"
                name="physical_address"
                onChange={handleForm}
                value={company.physical_address}
              />
            </div>
            <div>
              <label>Email Address</label>
              <Input
                label="email"
                size="lg"
                name="email_address"
                onChange={handleForm}
                value={company.email_address}
              />
            </div>
            <div>
              <label>Directors FullNames</label>
              <Input
                label="Directors FullNames"
                size="lg"
                name="directors_names"
                onChange={handleForm}
                value={company.directors_names}
              />
            </div>
            <div>
              <label>Number of Employees</label>
              <Input
                label="Number to be employees"
                size="lg"
                name="number_of_employees"
                onChange={handleForm}
                value={company.number_of_employees}
              />
            </div>
           
            <div>
              <label>Nationality</label>
              <Input
                label="Nationality"
                size="lg"
                name="nationality"
                onChange={handleForm}
                value={company.nationality}
              />
            </div>

            <div>
              <label>Phone</label>
              <Input
                label="Phone"
                size="lg"
                name="phone"
                onChange={handleForm}
                value={company.phone} />
            </div>
          </CardBody>
          <CardFooter className="pt-0 grid grid-cols-2 gap-2">
            <Button
              className=" w-[209px]"
              variant="blue-gray"
              onClick={submitCompany}
              fullWidth
            >
              Create
            </Button>{" "}
          </CardFooter>
        </Card>
      </Dialog>


      <Dialog
        size="xl"
        open={openPro}
        handler={handleOpenPro}
        className=" shadow-none"
      >
        <card className="h-96 w-96">
          <CardBody className="">
            <div class="md:flex no-wrap md:-mx-2 ">
              <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white p-3  border-r-4 border-[#3c95d2]">
                  <div class="image overflow-hidden">
                    <img
                      class="h-auto w-full mx-auto"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                    {data && data[0] && data[0].name ? data[0].name : "7"}
                  </h1>
                  <h3 class="text-gray-600 font-lg text-semibold leading-6">
                    Client for Botswana Diamond Hub
                  </h3>
                  <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    {data && data[0] && data[0].description
                      ? data[0].description
                      : "7"}
                  </p>
                  <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li class="flex items-center py-3">
                      <span>Status</span>
                      <span class="ml-auto">
                        <span class="bg-green-200 py-1 px-2 rounded text-white text-sm">
                          {data && data[0] && data[0].status
                            ? "Complient"
                            : "Not Complient"}
                        </span>
                      </span>
                    </li>
                    <li class="flex items-center py-3">
                      <span>Client since</span>
                      <span class="ml-auto">Nov 07, 2016</span>
                    </li>
                  </ul>
                </div>

                <div class="my-4"></div>

                <div class="bg-white p-3 hover:shadow  border-r-4 border-[#3c95d2]">
                  <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                    <span class="text-[#494949]">
                      <svg
                        class="h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                    <span>Employees</span>
                  </div>
                  <div class="grid grid-cols-3 ">
                    <div class="text-center my-2">
                      <img
                        class="h-16 w-16 rounded-full mx-auto"
                        src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                        alt=""
                      />
                      <a href="#" class="text-main-color">
                        Karabo
                      </a>
                    </div>

                    <div class="text-center my-2">
                      <img
                        class="h-16 w-16 rounded-full mx-auto"
                        src="https://igc.is/wp-content/uploads/2018/04/charlinbodley.jpg"
                        alt=""
                      />
                      <a href="#" class="text-main-color">
                        Amogelang
                      </a>
                    </div>

                    <div class="text-center my-2">
                      <img
                        class="h-16 w-16 rounded-full mx-auto"
                        src="https://rmi.org/wp-content/uploads/2022/08/charlin-bodley-headshot.jpg"
                        alt=""
                      />
                      <a href="#" class="text-main-color">
                        Masego
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full md:w-9/12 mx-2 h-64">
                <div class="bg-white p-3 shadow-sm rounded-sm">
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                  </div>
                  <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm">
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Client Name</div>
                        <div class="px-4 py-2">
                          {" "}
                          {data && data[0] && data[0].name ? data[0].name : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Last Name</div>
                        <div class="px-4 py-2">
                          {" "}
                          {data && data[0] && data[0].name ? data[0].name : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Employees</div>
                        <div class="px-4 py-2">
                          {" "}
                          {data && data[0] && data[0].number_of_employees
                            ? data[0].number_of_employees
                            : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">
                          {" "}
                          {data && data[0] && data[0].phone
                            ? data[0].phone
                            : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">
                          Current Address
                        </div>
                        <div class="px-4 py-2">
                          {data && data[0] && data[0].physical_address
                            ? data[0].physical_address
                            : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">
                          Permanant Address
                        </div>
                        <div class="px-4 py-2">
                          {data && data[0] && data[0].physical_address
                            ? data[0].physical_address
                            : "7"}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                          <a
                            class="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            {data && data[0] && data[0].email_address
                              ? data[0].email_address
                              : "7"}
                          </a>
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Nationality</div>
                        <div class="px-4 py-2">
                          {" "}
                          {data && data[0] && data[0].nationality
                            ? data[0].nationality
                            : "7"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-4"></div>

                <div class="bg-white p-3 shadow-sm rounded-sm">
                  <div class="grid grid-cols-2">
                    <div>
                      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Reports</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div className="flex gap-4">
                            <div>
                              <div>Company Inc.</div>
                             
                            </div>
                            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
                          </div>

                          <div className="flex gap-4 mt-2.5">
                            <div>
                              <Typography class="text-sm">Company Inc.</Typography>
                             
                            </div>
                            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
                          </div>
                          <div className="flex gap-4 mt-2.5">
                            <div>
                              <Typography >Company Inc.</Typography>
                             
                            </div>
                            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">
                          Certificates|Permits|License
                        </span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <Typography class="text-teal-600">
                            Diamond Cutting
                          </Typography>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <Typography class="text-teal-600">
                            Precious Stones Processing
                          </Typography>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </card>
      </Dialog>

    </div>
  );
}













import React, { useRef, useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
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

const TABLE_HEAD1 = ["Full name", "Nationality", "Occupation", "Status", ""];

const TABLE = [
  {
    id: "1",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "prochivs@gmail.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    id: "12",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    id: "154",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    id: "1524",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    id: "1514",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export default function CompanyKYC() {
  const [tab, setTab] = useState("1");
  const [open, setOpen] = useState(false);

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
  const handleForm = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const submitCompany = async () => {
    try {
      axios
        .post("http://127.0.0.1:8080/api/companies", company)
        .then((response) => {
          console.log("Response:", response.data);
          alert("done")
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
          "http://127.0.0.1:8080/api/diamond-cutting-license-applications/"
        );
        response = response.data.items;
        response = response.filter((row) => row.status === true);
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
                See information about all Permits and certificates
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
                {TABLE_HEAD1.map((head, index) => (
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
                      {index !== TABLE_HEAD1.length - 1 && (
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
                    img,
                    full_name,
                    email,
                    occupation,
                    nationality,
                    status,
                    residential_address,
                    id,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={full_name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {full_name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {nationality}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {occupation}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={!status ? "Pending" : "Approved"}
                            color={!status ? "red" : "green"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="View">
                          <IconButton
                            onClick={() => {
                              ViewDetails(id);
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
            Page 1 of {TABLE_ROWS.length}
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
                value={company.phone}              />
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
      
    </div>
  );
}

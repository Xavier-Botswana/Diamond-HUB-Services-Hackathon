import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
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
import { useEffect, useState } from "react";
import { BASEURL } from "../../utils/baseEndpoints";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Position", "Phone Number", "Department"];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Admin",
    department: "Adminstration",
    position: "Manager",
    phone: "7699864",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Admin",
    department: "Admin",
    position: "Admin",
    phone: "785425",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Admin",
    department: "Adminstration",
    position: "Admin",
    phone: "7689542345",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Admin",
    department: "Administration",
    position: "Admin",
    phone: "765329656",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    department: "Executive",
    position: "Admin",
    phone: "765479536",
  },
];

export default function SortableTable() {
  const [data, setData] = useState({});
  const [TABLE_ROWS1, setDataTable1] = useState([]);
  const [TABLE_ROWS2, setDataTable2] = useState([]);
  const [TABLE_ROWS3, setDataTable3] = useState([]);
  const [ID, setID] = useState("1");
  const [all_elements, set_all_elements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual axios API call
        const response1 = await axios.get(`${BASEURL}/api/diamond-cutting-license-applications/`);
        let response_dia = response1.data.items;
        setDataTable1(response_dia);

        // kimberly
        const response2 = await axios.get(
          `${BASEURL}/api/kimberly-process-certificates-applications`
        );
        let response_kim = response2.data.items;

        setDataTable2(response_kim);

        // Stones
        const response3 = await axios.get(
          `${BASEURL}/api/precious-stones-dealer-license-applications/`
        );
        let response_pre = response3.data.items;
        setDataTable3(response_pre);
        set_all_elements([...TABLE_ROWS, ...TABLE_ROWS2, ...TABLE_ROWS3]);
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
  }, [all_elements]);

  return (
    <div className="px-20 pt-[105px]">
      <Typography variant="h5" color="blue-gray">
        Welcome Back Admin
      </Typography>
      <Typography variant="paragraph" className="w-92">
        Welcome to the Diamond Hub Service
      </Typography>
      <div className="grid  lg:grid-cols-4 gap-4 md:grid-cols-4 justify-evenly">
        <Card className="mt-6 w-70">
          <CardBody>
            <Typography variant="h5" color="#bfbfbf" className="mb-2">
              Generated Certificates
            </Typography>
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="#79b5c9" variant="h6">
                  Completed
                </Typography>
                <Typography color="#79b5c9" variant="h6">
                  {all_elements.length > 0
                    ? Math.round(
                        (all_elements.filter(
                          (element) => element.status === "approved"
                        ).length /
                          all_elements.length) *
                          100
                      )
                    : 0}
                  %
                </Typography>
              </div>
              <Progress
                value={Math.round(
                  (all_elements.filter(
                    (element) => element.status === "approved"
                  ).length /
                    all_elements.length) *
                    100
                )}
                color="orange"
              />
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 w-70">
          <CardBody>
            <Typography variant="h5" color="#bfbfbf" className="mb-2">
              {" "}
              Pending Applications
            </Typography>
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="#79b5c9" variant="h6">
                  Completed
                </Typography>
                <Typography color="#79b5c9" variant="h6">
                  {all_elements.length > 0
                    ? Math.round(
                        (all_elements.filter(
                          (element) => element.status === "pending"
                        ).length /
                          all_elements.length) *
                          100
                      )
                    : 0}
                  %
                </Typography>
              </div>
              <Progress
                value={Math.round(
                  (all_elements.filter(
                    (element) => element.status === "pending"
                  ).length /
                    all_elements.length) *
                    100
                )}
                color="green"
              />
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 w-70">
          <CardBody>
            <Typography
              variant="h5
            
            
            
            
            
            "
              color="#bfbfbf"
              className="mb-2"
            >
              Issued License
            </Typography>
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="#79b5c9" variant="h6">
                  Completed
                </Typography>
                <Typography color="#79b5c9" variant="h6">
                  50%
                </Typography>
              </div>
              <Progress value={50} color="blue" />
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 w-70">
          <CardBody>
            <Typography variant="h5" color="#bfbfbf" className="mb-2">
              {" "}
              Approved Applications
            </Typography>
            <div className="w-full">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="#79b5c9" variant="h6">
                  Completed
                </Typography>
                <Typography color="#79b5c9" variant="h6">
                  {all_elements.length > 0
                    ? Math.round(
                        (all_elements.filter(
                          (element) => element.status === "approved"
                        ).length /
                          all_elements.length) *
                          100
                      )
                    : 0}
                  %
                </Typography>
              </div>
              <Progress
                value={Math.round(
                  (all_elements.filter(
                    (element) => element.status === "approved"
                  ).length /
                    all_elements.length) *
                    100
                )}
                color="yellow"
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="h-full w-full  mt-10 mb-10">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-1 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Users list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all users
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className=" w-full min-w-max table-auto text-left">
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
                    img,
                    name,
                    email,
                    position,
                    phone,
                    department,
                    online,
                    date,
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
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={
                              "https://smartbots.gov.bw/sites/default/files/logo-with-tagline.png"
                            }
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
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
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {position}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {department}
                        </Typography>
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
            Page 1 of 10
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
      </Card>{" "}
    </div>
  );
}

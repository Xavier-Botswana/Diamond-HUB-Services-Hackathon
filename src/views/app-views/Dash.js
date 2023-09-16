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

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export default function SortableTable() {
  return (
    <div className="px-20 pt-[105px]">
      <Typography variant="h5" color="blue-gray">
        Welcome Back Amogelang
      </Typography>
      <Typography variant="paragraph" className="w-92">
        Material Tailwind is an easy to use components library for Tailwind CSS
      </Typography>
      <div className="grid  lg:grid-cols-4 md:grid-cols-4 justify-evenly">
        <Card className="mt-6 w-80">
          <CardBody>
            <Typography variant="h5" color="#bfbfbf" className="mb-2">
              {" "}
              Generated Certificates
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
              <Progress value={50} color="orange" />
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 w-80">
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
                  50%
                </Typography>
              </div>
              <Progress value={50} color="green" />
            </div>
          </CardBody>
        </Card>

        <Card className="mt-6 w-80">
          <CardBody>
            <Typography variant="h5" color="#bfbfbf" className="mb-2">
              Approved Payments
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

        <Card className="mt-6 w-80">
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
                  50%
                </Typography>
              </div>
              <Progress value={50} color="yellow" />
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="h-full w-full  mt-10 mb-10">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-1 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
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
                ({ img, name, email, job, org, online, date }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={name} size="sm" />
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
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {job}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={online ? "online" : "offline"}
                            color={online ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
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

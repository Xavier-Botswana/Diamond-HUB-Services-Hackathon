import { PencilIcon } from "@heroicons/react/24/solid";
import { PiEyeThin } from "react-icons/pi";
import React, { useState, useEffect } from "react";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  Progress,
  CardBody,
  Carousel,
  CardFooter,
  Chip,
  Tabs,
  Dialog,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Progress as Progresss } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const TABLE_HEAD1 = ["Service", "Amount", "Date","Employee_Responsible", "Status", "Account", ""];
const TABLE_HEAD2 = ["Service", "Amount", "Date","Employee_Responsible" ,"Status", "Account", ];
const TABLE_HEAD3 = ["Service", "Amount", "Date","Employee_Responsible", "Status", "Account", ];

const TABLE_ROWS = [
  {
    id: "1",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa", employee:"Amogelang",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "2",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P500",
    date: "Wed 1:00pm",
    status: "pending", employee:"---",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "3",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P700",
    date: "Mon 7:40pm",
    status: "pending", employee:"---",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "4",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P1000",
    date: "Wed 5:00pm",
    status: "paid", employee:"Amogelang",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "5",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    date: "Wed 3:30am",
    status: "paid", employee:"Prince",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
const TABLE_ROWS2 = [
  {
    id: "1",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    employee:"---",
    date: "Wed 3:00pm",
    status: "pending", employee:"---",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "2",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P500",
    date: "Wed 1:00pm",
    status: "pending", employee:"---",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "3",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P700",
    date: "Mon 7:40pm",
    status: "pending", employee:"---",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "4",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P1000",
    date: "Wed 5:00pm",
    status: "pending", employee:"---",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "5",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    date: "Wed 3:30am",
    status: "pending", employee:"---",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

const TABLE_ROWS3 = [
  {
    id: "1",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    date: "Wed 3:00pm",
    status: "paid", employee:"Karabo",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "2",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P500",
    date: "Wed 1:00pm",
    status: "paid", employee:"Karabo",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "3",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P700",
    date: "Mon 7:40pm",
    status: "paid", employee:"Karabo",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "4",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Kimberly Process",
    amount: "P1000",
    date: "Wed 5:00pm",
    status: "paid", employee:"Prince",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    id: "5",
    img: "https://www.gov.bw/sites/default/files/Code-of-Arms-colour.png",
    name: "Diamond Cutting License",
    amount: "P500",
    date: "Wed 3:30am",
    status: "paid",
    account: "visa", employee:"Prince",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export default function Payments() {
  const [tab, setTab] = useState("1");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const Details = () => {
    handleOpen();
  };

  return (
    <div className="px-20 pt-[105px] flex flex-col">
      <Card className="h-full w-full  mt-10 mb-20">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Payments
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all applications
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Download
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="1" className="w-full md:w-max">
              <TabsHeader>
                <Tab
                  key={1}
                  value="1"
                  onClick={() => {
                    setTab("1");
                  }}
                >
                  All
                </Tab>
                <Tab
                  key={2}
                  value="2"
                  onClick={() => {
                    setTab("2");
                  }}
                >
                  Pending
                </Tab>
                <Tab
                  key={3}
                  value="3"
                  onClick={() => {
                    setTab("3");
                  }}
                >
                  Approved
                </Tab>
              </TabsHeader>
            </Tabs>

            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>

        {tab === "1" ? (
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD1.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
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
                      amount,
                      date,employee,
                      status,
                      account,
                      accountNumber,
                      expiry,
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
                              src={"https://smartbots.gov.bw/sites/default/files/logo-with-tagline.png"}
                              alt={name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {amount}
                          </Typography>
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {employee}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                              <Avatar
                                src={
                                  account === "visa"
                                    ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                    : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                }
                                size="sm"
                                alt={account}
                                variant="square"
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize"
                              >
                                {account.split("-").join(" ")} {accountNumber}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {expiry}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <Tooltip content="View Details">
                            <IconButton variant="text" onClick={Details}>
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
        ) : tab === "2" ? (
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD2.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS2.map(
                  (
                    {
                      img,
                      name,
                      amount,
                      date,employee,
                      status,
                      account,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS2.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={img}
                              alt={name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {amount}
                          </Typography>
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {employee}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                              <Avatar
                                src={
                                  account === "visa"
                                    ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                    : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                }
                                size="sm"
                                alt={account}
                                variant="square"
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize"
                              >
                                {account.split("-").join(" ")} {accountNumber}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {expiry}
                              </Typography>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        ) : (
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD3.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS3.map(
                  (
                    {
                      img,
                      name,
                      amount,
                      employee,
                      date,
                      status,
                      account,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS3.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={img}
                              alt={name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {amount}
                          </Typography>
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {employee}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                              <Avatar
                                src={
                                  account === "visa"
                                    ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                    : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                }
                                size="sm"
                                alt={account}
                                variant="square"
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize"
                              >
                                {account.split("-").join(" ")} {accountNumber}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {expiry}
                              </Typography>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        )}

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
      </Card>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <CardHeader
            variant="gradient"
            // color="blue"
            className="mb-4 grid h-28 place-items-center bg-[#f5f7f8]"
          >
            <Typography variant="h3" color="#484747">
              Payments Details
            </Typography>
          </CardHeader>
          <CardBody className="grid grid-cols-2 gap-4">
           
            <Input label="Name" size="lg" value={"Amogelang"} disabled />
            <Input label="Amount" size="lg" value={"P500"} disabled/>
            <Input label="Application ID" size="lg" value="20230912" disabled/>
            <Input label="Bank Ref" size="lg" value={"Bfht97"} disabled/>
           
          </CardBody>
          <CardFooter className="pt-0 grid grid-cols-2 gap-2">
            <Button className="bg-[#595a5a]" onClick={handleOpen} fullWidth>
              Approve Payment
            </Button>{" "}
            <Button className="bg-[#b37171]" onClick={handleOpen} fullWidth>
              Decline Payment
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

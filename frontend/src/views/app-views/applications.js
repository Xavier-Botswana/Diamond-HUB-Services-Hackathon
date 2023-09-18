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

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

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

export default function Applications() {
  const [tab, setTab] = useState("1");
  const [open, setOpen] = useState(false);
  const [openDec, setOpenDec] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const [ID, setID] = useState("1");
  const [data, setData] = useState({});
  const [PDFDATA, setPdfdata] = useState(null);
  const [pdfnum, setPdfnum] = useState(null);
  const [pdfbs, setPdfbs] = useState(null);
  const [TABLE_ROWS, setDataTable1] = useState([]);
  const [search, setSearch] = useState("");

  const handleOpen = (results) => {
    setOpen((cur) => !cur);
  };
  const handleOpenDec = (results) => {
    setOpenDec((cur) => !cur);
  };

  const handleOpenApp = (results) => {
    setOpenApp((cur) => !cur);
  };

  const submitApproval = async () => {



    try {
      let categoryparam = "practice";
      let res = [];
      res = await fetch(
        "https://certificates.erb.org.bw/api/files/" + categoryparam
      );

      const data1 = await res.json();
      const buf1 = data1.message.data;
      var ab = new ArrayBuffer(buf1.length);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buf1.length; ++i) {
        view[i] = buf1[i];
      }
      const existingPdfBytes = ab;

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      if (categoryparam === "practice") {
        const helveticaFont = await pdfDoc.embedFont(
          StandardFonts.HelveticaBold
        );
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();

        const names = "firstname";
        const textWidth = helveticaFont.widthOfTextAtSize(names, 15);
        const centerX = (width - textWidth) / 2;
        firstPage.drawText(names, {
          x: centerX,
          y: height / height + 382,
          size: 15,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        const practices = "practice";
        const textWidth01 = helveticaFont.widthOfTextAtSize(practices, 11);
        const centerX01 = (width - textWidth01) / 2;
        firstPage.drawText(practices, {
          x: centerX01,
          y: height / height + 342,
          size: 11,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        const disciplines = " discipline";
        const textWidth02 = helveticaFont.widthOfTextAtSize(disciplines, 11);
        const centerX02 = (width - textWidth02) / 2;
        firstPage.drawText(disciplines, {
          x: centerX02,
          y: height / height + 307,
          size: 11,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        firstPage.drawText("registrationNumber", {
          x: width / 1.4,
          y: height / 3 + 50,
          size: 9,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        firstPage.drawText("certificateNumber", {
          x: width / 5.5 - 9,
          y: height / 3 + 50,
          size: 9,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        firstPage.drawText(`currentDate`, {
          x: width / 6.3,
          y: height / 3 + 19,
          size: 9,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        firstPage.drawText(`certificate_Number`, {
          x: width / 4.3,
          y: height / 4 - 109,
          size: 9,
          font: helveticaFont,
          color: rgb(1, 1, 1),
        });

        firstPage.drawText(`expiryDate`, {
          x: width / 1.51,
          y: height / 3 + 19,
          size: 9,
          font: helveticaFont,
          color: rgb(0.29, 0.337, 0.408),
        });

        // // Embed the QR code image
        // let qCodeText = `https://certificates.erb.org.bw/certificateQr/?id=${response.data.id}`;
        // let qCodeDataURL = await QRCode.toDataURL(qCodeText);
        // let qCodeImage = await pdfDoc.embedPng(
        //   Uint8Array.from(atob(qCodeDataURL.split(',')[1]), (c) => c.charCodeAt(0))
        // );

        // firstPage.drawImage(qCodeImage, {
        //   x: width / 2 + 150,
        //   y: height / 70,
        //   width: 45,
        //   height: 45,
        //   color: rgb(0, 0, 0),
        // });

        const pdfBytes = await pdfDoc.save();
        const base64String = await pdfDoc.saveAsBase64();
        setPdfnum(pdfBytes);
        setPdfbs(base64String);

        const data = {
          email: data[0].email,
          message: `<h4>Good day</h4><p>This is to inform you that your certificate has been created successfully.\n Thank you</p>`,
          base64String: base64String,
        };

        axios
          .post(
            "http://localhost:5000/diamond-hub-e2534/us-central1/api/send",
            data
          ).then((response) => {
            console.log("Response:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendDecline = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const Approve = () => {
    setOpenApp(true);
    handleOpen();
  };
  const Decline = () => {
    setOpenDec(true);
    handleOpen();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual axios API call
        // const response = await axios.get("https://api.example.com/data");
        let response = TABLE;
        const results = response.filter((row) => row.id === ID);
        setData(results);
        setDataTable1(TABLE);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual axios API call
        // const response = await axios.get("https://api.example.com/data");
        let response = TABLE;
        const results = response.filter((row) => {
          return (
            row.id === search ||
            row.name.includes(search) ||
            row.licenseNo === search
          );
        });
        setDataTable1(results);
        console.log(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataIfNeeded = async () => {
      if (search !== "") {
        await fetchData();
      } else {
        setDataTable1(TABLE);
      }
    };

    fetchDataIfNeeded();
  }, [search]);

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
                Applications
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all applications
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {/* <Button variant="outlined" size="sm">
                view all
              </Button> */}
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="1" className="w-full md:w-max">
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
            </Tabs>
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
        {tab === "1" ? (
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
                  ({ img, name, email, job, org, online, date, id }, index) => {
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
        ) : tab === "2" ? (
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
                  ({ img, name, email, job, org, online, date, id }, index) => {
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
        ) : (
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
                  ({ img, name, email, job, org, online, date, id }, index) => {
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
                          <Tooltip content="View">
                            <IconButton
                              onClick={() => {
                                ViewDetails(id);
                                console.log(id);
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
        )}
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
            className="mb-4  grid h-28 place-items-center bg-[#45518d]"
          >
            <Typography variant="h3" color="white">
              Application Details
            </Typography>
          </CardHeader>
          <CardBody className="grid grid-cols-3 gap-4">
            <div>
              <label>Applicante Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].email ? data[0].name : "Pending"
                }
              />
            </div>
            <div>
              <label>Location</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].email
                    ? data[0].location
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Contact Details</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].email ? data[0].email : "Pending"
                }
              />
            </div>
            <div>
              <label>Source of Funds</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].email ? data[0].name : "Pending"
                }
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].email ? data[0].name : "Pending"
                }
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                label="Email"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].name : "7"}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0 grid grid-cols-2 gap-2">
            <Button className="bg-[#005e25]" onClick={Approve} fullWidth>
              Approve Application
            </Button>{" "}
            <Button className="bg-[#c02323]" onClick={Decline} fullWidth>
              Decline Application
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <Dialog
        size="xs"
        open={openDec}
        handler={handleOpenDec}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="red"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Are you Sure ?
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Reason" size="lg" />
            <Textarea label="Description" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="hover:bg-[#3c95d2]"
              onClick={() => {
                handleOpenDec();
                sendDecline();
              }}
              fullWidth
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      <Dialog
        size="xs"
        open={openApp}
        handler={handleOpenApp}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="green"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Are you Sure ?
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="paragraph" className="w-92">
              Once you approve this application the applicant will recieve an
              sms and an email with thier new certificate /license in it
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="hover:bg-[#3c95d2]"
              onClick={() => {
                handleOpenApp();
                submitApproval();
              }}
              fullWidth
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

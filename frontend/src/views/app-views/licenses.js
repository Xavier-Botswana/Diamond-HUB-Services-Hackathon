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

const TABLE_HEAD1 = ["Full name", "Nationality", "Occupation", "Status"];
const TABLE_HEAD2 = [
  "Full name",
  "Country_of_origin",
  "Number_of_parcels",
  "Status",
 
];
const TABLE_HEAD3 = [
  "Full name",
  "Address",
  "Location of Operations",
  "Stones Source",
  "Status",
 
];

export default function Applications() {
  const [tab, setTab] = useState("1");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [openDec, setOpenDec] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const [ID, setID] = useState("1");
  const [data, setData] = useState({});
  const [PDFDATA, setPdfdata] = useState(null);
  const [pdfnum, setPdfnum] = useState(null);
  const [pdfbs, setPdfbs] = useState(null);
  const [TABLE_ROWS, setDataTable1] = useState([]);
  const [TABLE_ROWS2, setDataTable2] = useState([]);
  const [TABLE_ROWS3, setDataTable3] = useState([]);

  const [search, setSearch] = useState("");

  const handleOpen = (results) => {
    setOpen((cur) => !cur);
  };

  const handleOpen2 = (results) => {
    setOpen2((cur) => !cur);
  };

  const handleOpen3 = (results) => {
    setOpen3((cur) => !cur);
  };
  const handleOpenDec = (results) => {
    setOpenDec((cur) => !cur);
  };

  const handleOpenApp = (results) => {
    setOpenApp((cur) => !cur);
  };

  const submitApproval = async () => {
    try {
      // axios.put()

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
          email: `{data[0].email}`,
          message: `<h4>Good day</h4><p>This is to inform you that your certificate has been created successfully.\n Thank you</p>`,
          base64String: base64String,
        };

        axios
          .post(
            "http://localhost:5000/diamond-hub-e2534/us-central1/api/send",
            data
          )
          .then((response) => {
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
        const response1 = await axios.get(
          "http://127.0.0.1:8080/api/diamond-cutting-license-applications/"
        );

        let response = response1.data.items;
        response = response.filter((row) => row.status === "approved");
        const results = response.filter((row) => row.id === ID);
        if (results.length !== 0) {
          setData(results);
        }
        setDataTable1(response);

        // kimberly
        const response2 = await axios.get(
          "http://127.0.0.1:8080/api/kimberly-process-certificates-applications"
        );
        let responsekim = response2.data.items;
        responsekim = responsekim.filter((row) => row.status === "approved");
        const resultskim = responsekim.filter((row) => row.id === ID);
        if (resultskim.length !== 0) {
          setData(resultskim);
        }
        setDataTable2(responsekim);

        // Stones
        const response3 = await axios.get(
          "http://127.0.0.1:8080/api/precious-stones-dealer-license-applications/"
        );
        let responsePre = response3.data.items;
        responsePre = responsePre.filter((row) => row.status === "approved");
        const resultsPre = responsePre.filter((row) => row.id === ID);
        if (resultsPre.length !== 0) {
          setData(resultsPre);
        }
        setDataTable3(responsePre);
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
  const ViewDetails2 = (id) => {
    setID(id);
    setOpen2(true);
  };
  const ViewDetails3 = (id) => {
    setID(id);
    setOpen3(true);
  };
  const headers = [
    {
      label: "Diamond Cutting License",
      value: "1",
    },
    {
      label: "Kimberly Process Certificate",
      value: "2",
    },
    {
      label: "Stones Dealers Licence",
      value: "3",
    },
  ];
  return (
    <div className="px-20 pt-[125px]">
      <Card className="h-full w-full  mt-10 mb-20">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Permits and Certificates
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all Permits and certificates
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row"></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="1" className="w-full md:w-max">
              <TabsHeader>
                {headers.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setTab(value)}
                    className="flex w-fit"
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
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
                            <Avatar
                              src={
                                "https://smartbots.gov.bw/sites/default/files/logo-with-tagline.png"
                              }
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
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
                  {TABLE_HEAD2.map((head, index) => (
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
                        {index !== TABLE_HEAD2.length - 1 && (
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
                {TABLE_ROWS2.map(
                  (
                    {
                      img,
                      number_of_parcels,
                      name,
                      email,
                      name_of_exporter,
                      country_of_origin,
                      status,
                      id,
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
                              src={
                                "https://smartbots.gov.bw/sites/default/files/logo-with-tagline.png"
                              }
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name_of_exporter}
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
                            {country_of_origin}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {number_of_parcels}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={
                                status === "approved" ? "Approved" : "Pending"
                              }
                              color={status === "pending" ? "red" : "green"}
                            />
                          </div>
                        </td>
                       
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        ) : tab === "3" ? (
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD3.map((head, index) => (
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
                        {index !== TABLE_HEAD3.length - 1 && (
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
                {TABLE_ROWS3.map(
                  (
                    {
                      source_of_stones,
                      applicant_name,
                      number_to_employed,
                      email,
                      address,
                      location_of_operations,
                      director_fullnames,
                      status,
                      date,
                      id,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS3.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={applicant_name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={
                                "https://smartbots.gov.bw/sites/default/files/logo-with-tagline.png"
                              }
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {applicant_name}
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
                            {address}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {location_of_operations}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {source_of_stones}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={status ? "Approved" : "offline"}
                              color={status ? "Pending" : "blue-gray"}
                            />
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
          ""
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

      {/* diamond */}
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
                  data && data[0] && data[0].full_name
                    ? data[0].full_name
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Location</label>
              <Input
                label="Location"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].residential_address
                    ? data[0].residential_address
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Occupation</label>
              <Input
                label="Occupation"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].occupation
                    ? data[0].occupation
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Cutters to be Employed</label>
              <Input
                label="Number to be Employed Cutters"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].number_to_be_employed_cutters
                    ? data[0].number_to_be_employed_cutters
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Polishers to be Employed</label>
              <Input
                label="Number to be employed polishers"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].number_to_be_employed_polishers
                    ? data[0].number_to_be_employed_polishers
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Sawyers to be Employed</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].number_to_be_employed_sawyers
                    ? data[0].number_to_be_employed_sawyers
                    : "7"
                }
              />
            </div>

            <div>
              <label>Nationality</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].nationality
                    ? data[0].nationality
                    : "7"
                }
              />
            </div>

            <div>
              <label>License Applied For</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].license_applied_for
                    ? data[0].license_applied_for
                    : "7"
                }
              />
            </div>

            <div>
              <label>Applicant Email</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].email : "7"}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0 grid grid-cols-2 gap-2">
            <Button className="bg-[#c2d1c8]" onClick={Approve} fullWidth>
              Approve Application
            </Button>{" "}
            <Button className="bg-[#c09f9f]" onClick={Decline} fullWidth>
              Decline Application
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      {/* stones */}
      <Dialog
        size="md"
        open={open3}
        handler={handleOpen3}
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
                  data && data[0] && data[0].applicant_name
                    ? data[0].applicant_name
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Address</label>
              <Input
                label="Address"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].address
                    ? data[0].address
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Directors Names</label>
              <Input
                label="Directors Names"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].director_fullnames
                    ? data[0].director_fullnames
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Source_of_stones</label>
              <Input
                label="Source_of_stones"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].source_of_stones
                    ? data[0].source_of_stones
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Location_of_operations</label>
              <Input
                label="location_of_operations"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].location_of_operations
                    ? data[0].location_of_operations
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Number to employee</label>
              <Input
                label="Number_to_employee"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].number_to_employed
                    ? data[0].number_to_employed
                    : "7"
                }
              />
            </div>

            <div>
              <label>Share Capital</label>
              <Input
                label="Share capital"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].share_capital
                    ? data[0].share_capital
                    : "7"
                }
              />
            </div>

            <div>
              <label>Intended_operations</label>
              <Input
                label="intended_operations"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].intended_operations
                    ? data[0].intended_operations
                    : "7"
                }
              />
            </div>

            <div>
              <label>Applicant Email</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].email : "7"}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0 grid grid-cols-2 gap-2">
            <Button className="bg-[#c2d1c8]" onClick={Approve} fullWidth>
              Approve Application
            </Button>{" "}
            <Button className="bg-[#c09f9f]" onClick={Decline} fullWidth>
              Decline Application
            </Button>
          </CardFooter>
        </Card>
      </Dialog>

      {/* kim */}
      <Dialog
        size="md"
        open={open2}
        handler={handleOpen2}
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
              <label>Country_of_origin</label>
              <Input
                label="country_of_origin"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].country_of_origin
                    ? data[0].country_of_origin
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Number_of_parcels</label>
              <Input
                label="number_of_parcels"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].number_of_parcels
                    ? data[0].number_of_parcels
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Name_of_exporter</label>
              <Input
                label="Name_of_exporter"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].name_of_exporter
                    ? data[0].name_of_exporter
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Address_of_exporter</label>
              <Input
                label="address_of_exporter"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].address_of_exporter
                    ? data[0].address_of_exporter
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Name_of_importer</label>
              <Input
                label="Name_of_importer"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].name_of_importer
                    ? data[0].name_of_importer
                    : "Pending"
                }
              />
            </div>
            <div>
              <label>Address_of_importer</label>
              <Input
                label="Address_of_importer"
                size="lg"
                disabled
                value={
                  data && data[0] && data[0].address_of_importer
                    ? data[0].address_of_importer
                    : "7"
                }
              />
            </div>

            <div>
              <label>Place</label>
              <Input
                label="Share capital"
                size="lg"
                disabled
                value={data && data[0] && data[0].place ? data[0].place : "7"}
              />
            </div>

            <div>
              <label>Date</label>
              <Input
                label="date"
                size="lg"
                disabled
                value={data && data[0] && data[0].date ? data[0].date : "7"}
              />
            </div>

            <div>
              <label>Applicant Email</label>
              <Input
                label="Number_to_be_employed_sawyers"
                size="lg"
                disabled
                value={data && data[0] && data[0].email ? data[0].email : "7"}
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

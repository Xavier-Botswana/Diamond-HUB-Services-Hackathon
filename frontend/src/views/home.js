import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineHeader,
  Tabs,
  TabsHeader,
  TabsBody,
  Dialog,
  CardHeader,
  CardBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import {
  BellIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { PiWarningThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import PaypalButton from "./components/paypalButton";
import { BASEURL } from "../utils/baseEndpoints";
export function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [fields, setFields] = useState(false);
  const [files, setFiles] = useState([]);
  const [docs, setDocs] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [form1, setForm1] = useState({
    applicant_name: "",
    license_no: "",
    address: "",
    director_fullnames: "",
    director_nationalities: "",
    share_capital: "",
    shareholder_names: "",
    shareholders_nationality: "",
    experience: "",
    phone: "",
    type: "stonesDealers",
    intended_operations: "",
    particulars_of_plant: "",
    number_to_employed: "",
    types_and_quantities: "",
    source_of_stones: "",
    location_of_operations: "",
    market_of_products: "",
    email: "",
    status: "pending",
  });
  const [form3, setForm3] = useState({
    country_of_origin: "",
    number_of_parcels: 0,
    name_of_exporter: "",
    address_of_exporter: "",
    name_of_importer: "",
    address_of_importer: "",
    date: "",
    place: "",
    email: "",
    status: "pending",
    type: "",
    phone: "",
  });

  const [form4, setForm4] = useState({
    full_name: "",
    email: "",
    type: "diamondCutting",
    date_of_birth: "",
    nationality: "",
    residential_address: "",
    occupation: "",
    phone: "",
    license_applied_for: "",
    number_to_be_employed_cutters: 0,
    number_to_be_employed_polishers: 0,
    number_to_be_employed_sawyers: 0,
    status: "pending",
  });

  const [form2, setForm2] = useState({
    country_of_origin: "",
    name_of_exporter: "",
    goods_exported_to: "",
    reason_for_exporting: "",
    weight_of_goods: "",
    phone: "",
    value_of_goods: "",
    goods_to_be_returned: "",
    returned_in_carats: "",
    not_returned_in_carats: "",
    date: "2022-01-01 10:00:00.123Z",
  });


  const handleDocChange = (event) => {
    setDocs((prevDocs) => [...prevDocs, ...event.target.files]);
  };

  const onFileUpload = (e) => {};

  const handleForm1 = (e) => {
    setForm1({ ...form1, [e.target.name]: e.target.value });
  };
  const handleForm2 = (e) => {
    setForm2({ ...form2, [e.target.name]: e.target.value });
  };
  const handleForm3 = (e) => {
    setForm3({ ...form3, [e.target.name]: e.target.value });
  };

  const handleForm4 = (e) => {
    setForm4({ ...form4, [e.target.name]: e.target.value });
  };

  const handleOpen = () => setOpen((cur) => !cur);

  const submitForm1 = async () => {
    axios
      .post(`${BASEURL}/api/precious-stones-dealer-license-applications`, form1)
      .then((response) => {
        // open payment dialog
        handleOpen();
      });
  };

  const submitForm2 = async () => {
    axios
      .post(`${BASEURL}/api/diamond-export-import-permit-applications`, form2)
      .then((response) => {
        handleOpen();
      });
  };

  const submitForm3 = async () => {
    axios
      .post(`${BASEURL}/api/kimberly-process-certificates-applications`, form3)
      .then((response) => {
        handleOpen();
      });
  };

  const submitForm4 = async () => {
    const form_data = new FormData();
    // console.log(form4)
    //preparing the multipart/form-data to send to the database
    Object.entries(form4).forEach(([key,value]) => {
      // console.log(key, value);
      form_data.append(`${key}`, `${value}`);
    });
    console.log(docs[0])
    form_data.append("report", docs[0], `${docs[0].name}`);
    // form_data.append("report", docs[0], `${docs[0].name}`);

    console.log(form_data);

    const response3 = await axios.post(
        `${BASEURL}/api/diamond-cutting-license-applications`,
        form_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
    ).then((response) => {
          // open payment dialog
          handleOpen();
        });
  };

  const data = [
    {
      label: "Semi-Preciouse Stones Dealers Licence",
      value: "1",
    },
    {
      label: "Export of Rough Diamonds Permit",
      value: "2",
    },

    {
      label: "Diamond Cutting Licence",
      value: "4",
    },

    {
      label: "Kimberly Process Certificate",
      value: "3",
    },
  ];
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          FAQs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contacts
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mb-2 text-[#0097c9] font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#a1c5d1] to-[#0097c9]"
          >
            Botswana Diamond Hub
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link to="/">
              <Button size="sm" className="hidden bg-[#0097c9] lg:inline-block">
                <span>Sign In</span>
              </Button>
            </Link>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>

      <div className="mx-auto container px-10 md:px-0 py-12">
        <Typography variant="h4" className="mb-2 text-[#0097c9] font-medium">
          Licensing and Permits
        </Typography>
        <Typography className="font-normal ">
          The Diamond Hub is made up of two units; the Business Development
          Office and Diamond Administration Office. The diamond administration
          office manages and regulates diamond imports and exports, whereas the
          business development is responsible for developing business value
          proposition for diamond sector in Botswana. Some of the services that
          are offered by the Diamond hub are automated while other are manual
          or/and semi automated. The services that are offered are;
        </Typography>
      </div>

      <div className="container px-10 md:px-0 mx-auto">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" className="mb-2 text-[#000000] font-medium">
            Application
          </Typography>
          <Typography color="gray" className="mt-1 mb-1 font-normal">
            Enter your details to register.
          </Typography>

          <Tabs id="custom-animation" value="1">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-[#607d8b]">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel key={"1"} value={"1"}>
                <form className="mt-8 mb-2 ">
                  <div className="md:flex grid grid-cols-1  justify-between gap-4">
                    <div className="flex-1 mb-4 grid   md:grid-cols-3 gap-6">
                      <Input
                        name="applicant_name"
                        size="lg"
                        onChange={handleForm1}
                        value={form1.applicant_name}
                        label="Applicant Name"
                      />
                      <Input
                        size="lg"
                        label="License No"
                        name="license_no"
                        onChange={handleForm1}
                        value={form1.license_no}
                      />
                      <Input
                        size="lg"
                        label="Address"
                        name="address"
                        onChange={handleForm1}
                        value={form1.address}
                      />
                      <Input
                        size="lg"
                        label="Director Fullnames"
                        name="director_fullnames"
                        onChange={handleForm1}
                        value={form1.director_fullnames}
                      />
                      <Input
                        size="lg"
                        label="Director Nationalities"
                        name="director_nationalities"
                        onChange={handleForm1}
                        value={form1.director_nationalities}
                      />
                      <Input
                        size="lg"
                        label="Share Capital"
                        name="share_capital"
                        onChange={handleForm1}
                        value={form1.share_capital}
                      />
                      <Input
                        size="lg"
                        label="Shareholder Names"
                        name="shareholder_names"
                        onChange={handleForm1}
                        value={form1.shareholder_names}
                      />
                      <Input
                        size="lg"
                        label="Shareholders Nationality"
                        name="shareholders_nationality"
                        onChange={handleForm1}
                        value={form1.shareholders_nationality}
                      />
                      <Input
                        size="lg"
                        label="Experience"
                        name="experience"
                        onChange={handleForm1}
                        value={form1.experience}
                      />
                      <Input
                        size="lg"
                        label="Intended Operations"
                        name="intended_operations"
                        onChange={handleForm1}
                        value={form1.intended_operations}
                      />
                      <Input
                        size="lg"
                        label="Particulars Of Plant"
                        name="particulars_of_plant"
                        onChange={handleForm1}
                        value={form1.particulars_of_plant}
                      />
                      <Input
                        size="lg"
                        label="Number to be Employed"
                        name="number_to_employed"
                        onChange={handleForm1}
                        value={form1.number_to_employed}
                      />
                      <Input
                        size="lg"
                        label="Types & Quantities"
                        name="types_and_quantities"
                        onChange={handleForm1}
                        value={form1.types_and_quantities}
                      />
                      <Input
                        size="lg"
                        label="Source Of Stones"
                        name="source_of_stones"
                        onChange={handleForm1}
                        value={form1.source_of_stones}
                      />
                      <Input
                        size="lg"
                        label="Location of Operations"
                        name="location_of_operations"
                        onChange={handleForm1}
                        value={form1.location_of_operations}
                      />
                      <Input
                        size="lg"
                        label="Market of Products"
                        name="market_of_products"
                        onChange={handleForm1}
                        value={form1.market_of_products}
                      />

                      <Input
                        name="phone"
                        size="lg"
                        onChange={handleForm1}
                        value={form1.phone}
                        label="Applicant Number"
                      />

                      <Input
                        name="email"
                        size="lg"
                        onChange={handleForm1}
                        value={form1.email}
                        label="Applicant email"
                      />

                      <Button
                        onClick={() => {
                          submitForm1();
                        }}
                        className="mt-6 hover:bg-[#0097c9]"
                        fullWidth
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={fields ? "green" : "red"}
                            >
                              <PiWarningThin className="h-5 w-5" />
                            </TimelineIcon>

                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Complete Registration
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Make Payment
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Get Permit/License
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                20 DEC 2:20 AM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                </form>
              </TabPanel>

              <TabPanel key={"2"} value={"2"}>
                <form className="mt-8 mb-2 ">
                  <div className="flex justify-between gap-4">
                    <div className="flex-1 mb-4 grid   md:grid-cols-3 gap-6">
                      <Input
                        size="lg"
                        label="Country Of Origin"
                        name="country_of_origin"
                        onChange={handleForm2}
                        value={form2.country_of_origin}
                      />
                      <Input
                        size="lg"
                        label="Name Of Exporter"
                        name="name_of_exporter"
                        onChange={handleForm2}
                        value={form2.name_of_exporter}
                      />
                      <Input
                        size="lg"
                        label="Goods Exported To"
                        name="goods_exported_to"
                        onChange={handleForm2}
                        value={form2.goods_exported_to}
                      />{" "}
                      <Input
                        size="lg"
                        label="Reason For Exporting"
                        name="reason_for_exporting"
                        onChange={handleForm2}
                        value={form2.reason_for_exporting}
                      />
                      <Input
                        size="lg"
                        label="Wieght Of Goods"
                        name="weight_of_goods"
                        onChange={handleForm2}
                        value={form2.weight_of_goods}
                      />
                      <Input
                        size="lg"
                        label="Value of Goods"
                        name="value_of_goods"
                        onChange={handleForm2}
                        value={form2.value_of_goods}
                      />{" "}
                      <Input
                        size="lg"
                        label="Goods to be"
                        name="goods_to_be_returned"
                        onChange={handleForm2}
                        value={form2.goods_to_be_returned}
                      />
                      <Input size="lg" label="Returned" name="returned_goods" />
                      <Input
                        size="lg"
                        label="Not Returned"
                        name="not_returned_in_carats"
                        onChange={handleForm2}
                        value={form2.not_returned_in_carats}
                      />
                      <Input
                        size="lg"
                        label="Date"
                        name="date"
                        onChange={handleForm2}
                        value={form2.date}
                      />
                      <Input
                        type="number"
                        size="lg"
                        name="phone"
                        value={form2.phone}
                        label="Applicant Number"
                        onChange={handleForm2}
                      />
                      <Input
                        name="email"
                        size="lg"
                        onChange={handleForm2}
                        value={form2.email}
                        label="Applicant email"
                      />
                      <Button
                        onClick={() => {
                          submitForm2();
                        }}
                        className="mt-6 hover:bg-[#0097c9]"
                        fullWidth
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={fields ? "green" : "red"}
                            >
                              <PiWarningThin className="h-5 w-5" />
                            </TimelineIcon>

                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Complete Registration
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Make Payment
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Get Permit/License
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                20 DEC 2:20 AM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                </form>
              </TabPanel>

              <TabPanel key={"3"} value={"3"}>
                <form className="mt-8 mb-2 ">
                  <div className="flex justify-between gap-4">
                    <div className="flex-1 mb-4 grid   md:grid-cols-3 gap-6">
                      <Input
                        name="email"
                        size="lg"
                        onChange={handleForm3}
                        value={form3.email}
                        label="Applicant email"
                      />
                      <Input
                        size="lg"
                        label="Country of Origin"
                        name="country_of_origin"
                        onChange={handleForm3}
                        value={form3.country_of_origin}
                      />
                      <Input
                        size="lg"
                        label="Number of Parcels"
                        name="number_of_parcels"
                        onChange={handleForm3}
                        value={form3.number_of_parcels}
                      />
                      <Input
                        type="text"
                        size="lg"
                        label="Name of Exporter"
                        name="name_of_exporter"
                        onChange={handleForm3}
                        value={form3.name_of_exporter}
                      />
                      <Input
                        size="lg"
                        label="Exporters Address"
                        name="address_of_exporter"
                        onChange={handleForm3}
                        value={form3.address_of_exporter}
                      />
                      <Input
                        type="text"
                        size="lg"
                        label="Name of Importer"
                        name="name_of_importer"
                        onChange={handleForm3}
                        value={form3.name_of_importer}
                      />{" "}
                      <Input
                        size="lg"
                        label="Address of Importer"
                        name="address_of_importer"
                        onChange={handleForm3}
                        value={form3.address_of_importer}
                      />
                      <Input
                        type="number"
                        size="lg"
                        name="phone"
                        value={form3.phone}
                        label="Applicant Number"
                        onChange={handleForm3}
                      />
                      <Input
                        type="text"
                        size="lg"
                        label="Place"
                        name="place"
                        onChange={handleForm3}
                        value={form3.place}
                      />
                      <Button
                        className="mt-6 hover:bg-[#0097c9]"
                        fullWidth
                        onClick={submitForm3}
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={fields ? "green" : "red"}
                            >
                              <PiWarningThin className="h-5 w-5" />
                            </TimelineIcon>

                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Complete Registration
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Make Payment
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Get Permit/License
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                20 DEC 2:20 AM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel key={"4"} value={"4"}>
                <form className="mt-8 mb-2 ">
                  <div className="flex justify-between gap-4">
                    <div className="flex-1 mb-4 grid   md:grid-cols-3 gap-6">
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form4.full_name}
                        name="full_name"
                        label="Applicant Name"
                      />
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form4.nationality}
                        label="Nationality"
                        name="nationality"
                      />
                      <Input
                        type="text"
                        size="lg"
                        label="Date of Birth"
                        name="date_of_birth"
                        onChange={handleForm4}
                        value={form4.date_of_birth}
                      />
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form4.residential_address}
                        label="Residential Address"
                        name="residential_address"
                      />
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form1.occupation}
                        label="Occupation"
                        name="occupation"
                      />
                      <Input
                        type="text"
                        size="lg"
                        onChange={handleForm4}
                        value={form4.license_applied_for}
                        label="License Applied For"
                        name="license_applied_for"
                      />
                      <Input
                        type="text"
                        size="lg"
                        onChange={handleForm4}
                        value={form4.number_to_be_employed_cutters}
                        label="Cutters to be Employed"
                        name="number_to_be_employed_cutters"
                      />
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form4.number_to_be_employed_polishers}
                        label="Polishers to be Employed"
                        name="number_to_be_employed_polishers"
                      />
                      <Input
                        size="lg"
                        onChange={handleForm4}
                        value={form4.number_to_be_employed_sawyers}
                        label="Sawyers to be Employed"
                        name="number_to_be_employed_sawyers"
                      />
                      <Input
                        type="text"
                        size="lg"
                        onChange={handleForm4}
                        value={form4.email}
                        label="Email Address"
                        name="email"
                      />
                      {/* heeeeeeerrrrreeeeeeeeee */}
                      <Input
                        type="file"
                        size="lg"
                        // onChange={handleForm4}
                        onChange={handleDocChange}
                        // value={form4.document}
                        name="document"
                      />
                      <Input
                        type="text"
                        size="lg"
                        onChange={handleForm4}
                        value={form4.email}
                        hidden
                        name="email"
                      />{" "}
                      <Button
                        className="mt-6 hover:bg-[#0097c9]"
                        fullWidth
                        onClick={submitForm4}
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={fields ? "green" : "red"}
                            >
                              <PiWarningThin className="h-5 w-5" />
                            </TimelineIcon>

                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Complete Registration
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Make Payment
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              ></Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="green"
                            >
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Get Permit/License
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                20 DEC 2:20 AM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </Card>

        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none overflow-auto"
        >
          <Card className="w-full max-w-[24rem]">
            <CardHeader
              color="gray"
              floated={false}
              shadow={false}
              className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
            >
              <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
                <BanknotesIcon className="h-10 w-10" />
              </div>
              <Typography variant="h4" color="white">
                Payments via PayPal
              </Typography>
            </CardHeader>
            <CardBody className="shadow-none overflow-auto h-[400px]">
              <div onClick={() => setOpen(false)}>
                {" "}
                <PaypalButton />
              </div>
            </CardBody>
          </Card>
        </Dialog>
      </div>
    </div>
  );
}

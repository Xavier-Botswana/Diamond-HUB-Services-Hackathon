import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input,
  Checkbox,
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
  CardFooter,
  Tab, Select,
  Option,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { PiWarningThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCountries } from "use-react-countries";
export function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [fields, setFields] = useState(false);
  const [files, setFiles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
  
  
  
  function formatCardNumber(value: string) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
   
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
   
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  }
  function formatExpires(value: string) {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^([2-9])$/g, "0$1")
      .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
      .replace(/^0{1,}/g, "0")
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
  }
  const handleOpen = () => setOpen((cur) => !cur);

  const data = [
    {
      label: "Preciouse Stone Dealers License",
      value: "1",
    },
    {
      label: "Diamond Cutting Factories",
      value: "2",
    },

    {
      label: "Other",
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
        <Typography color="gray" className="font-normal ">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
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
                <Tab key={value} value={value}>
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
                      <Input name="name_of_applicant" size="lg" label="Applicant Name" />
                      <Input size="lg" label="License No" name="manufacturing_license_no"/>
                      <Input size="lg" label="Address" name="address_in_botswana"/>{" "}
                      <Input size="lg" label="Director Fullnames" name="fullnames_of_directors"/>
                      <Input size="lg" label="Director Nationalities" name="director_nationalities"/>
                      <Input size="lg" label="Share Capital" name="authorised_share_capital_and_issued_capital"/>{" "}
                      <Input size="lg" label="Shareholder Names" name="names_of_shareholders"/>
                      <Input size="lg" label="Shareholders Nationality" name="shareholders_nationalities"/>
                      <Input size="lg" label="Experience" name="experience_in_semi_precious_stones"/>
                      <Input size="lg" label="Intended Operations" name="description_of_intended_operations"/>
                      <Input size="lg" label="Particulars Of Plant" name="particulars_of_plant"/>{" "}
                      <Input size="lg" label="Number to be Employed" name="number_to_be_employed"/>
                      <Input size="lg" label="Types & Quantities" name="types_and_quantities" />
                      <Input size="lg" label="Source Of Stones" name="source_of_stones" />{" "}
                      <Input size="lg" label="Location of Operations" name="location_of_ops" />
                      <Input size="lg" label="Market of Products" name="market_of_products" />{" "}
                       <Input size="lg" label="Signature" name="applicant_signature" />
                      <Button onClick={()=>{
                     handleOpen()
                      }} className="mt-6 hover:bg-[#0097c9]" fullWidth>
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
                                Please fill all fields
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                22 SEP 7:20 PM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={files.length !== 0 ? "green" : "red"}
                            >
                              <PiWarningThin className="h-5 w-5" />{" "}
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Please attach files
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                21 SEP 11 PM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color={
                                fields && files.length === 0 ? "green" : "red"
                              }
                            >
                              <PiWarningThin className="h-5 w-5" />{" "}
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                {!fields
                                  ? "Provide all neccesary Details"
                                  : "You can Submit"}
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
                      <Input size="lg" label="Country Of Origin" name="country_of_origin"/>
                      <Input size="lg" label="Name Of Exporter" name="name_of_exporter"/>
                      <Input size="lg" label="Goods Exported To" name="goods_exported" />{" "}
                      <Input size="lg" label="Reason For Exporting" name="exporting_reason"/>
                      <Input size="lg" label="Wieght Of Goods" name="weight_of_goods" />
                      <Input size="lg" label="Value of Goods" name="value_of_goods" />{" "}
                      <Input size="lg" label="Goods to be" name="goods_to_be_returned" />
                      <Input size="lg" label="Returned" name="returned_goods"/>
                      <Input size="lg" label="Not Returned" name="not_returned" />
                      <Input size="lg" label="Date" name="date" />
                      <Input type="Signature" size="lg" label="Signature" />{" "}
                      <Button onClick={()=>{
                     handleOpen()
                      }} className="mt-6 hover:bg-[#0097c9]" fullWidth>
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost">
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Design changes
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                22 DEC 7:20 PM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="red"
                            >
                              <ArchiveBoxIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                New order #1832412
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                21 DEC 11 PM
                              </Typography>
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
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Payment completed for order #4395133
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
                      <Input size="lg" label="Name" />
                      <Input size="lg" label="Email" />
                      <Input type="password" size="lg" label="Password" />{" "}
                      <Input size="lg" label="Name" />
                      <Input size="lg" label="Email" />
                      <Input type="password" size="lg" label="Password" />{" "}
                      <Input size="lg" label="Name" />
                      <Input size="lg" label="Email" />
                      <Input type="password" size="lg" label="Password" />
                      <Input size="lg" label="Email" />
                      <Input type="password" size="lg" label="Password" />{" "}
                      <Input size="lg" label="Name" />
                      <Input size="lg" label="Email" />
                      <Input type="password" size="lg" label="Password" />{" "}
                      <Input size="lg" label="Name" />
                      <Button className="mt-6 hover:bg-[#0097c9]" fullWidth>
                        Apply
                      </Button>
                    </div>

                    <div className="w-[25rem]">
                      <Timeline>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon className="p-3" variant="ghost">
                              <BellIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                $2400, Design changes
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                22 DEC 7:20 PM
                              </Typography>
                            </div>
                          </TimelineHeader>
                        </TimelineItem>
                        <TimelineItem className="h-28">
                          <TimelineConnector className="!w-[78px]" />
                          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                            <TimelineIcon
                              className="p-3"
                              variant="ghost"
                              color="red"
                            >
                              <ArchiveBoxIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                New order #1832412
                              </Typography>
                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                21 DEC 11 PM
                              </Typography>
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
                              <CurrencyDollarIcon className="h-5 w-5" />
                            </TimelineIcon>
                            <div className="flex flex-col gap-1">
                              <Typography variant="h6" color="blue-gray">
                                Payment completed for order #4395133
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
        className="bg-transparent shadow-none"
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
         Process
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="card" onClick={() => setType("card")}>
              Pay with Card
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              Pay with PayPal
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Input type="email" label="Email Address" />
                </div>
 
                <div className="my-6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Card Details
                  </Typography>
 
                  <Input
                    label="Card Number"
                    maxLength={19}
                    value={formatCardNumber(cardNumber)}
                    onChange={(event) => setCardNumber(event.target.value)}
                    icon={
                      <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                    }
                  />
                  <div className="my-4 flex items-center gap-4">
                    <Input
                      label="Expires"
                      maxLength={5}
                      value={formatExpires(cardExpires)}
                      onChange={(event) => setCardExpires(event.target.value)}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                    <Input
                      label="CVC"
                      maxLength={4}
                      containerProps={{ className: "min-w-[72px]" }}
                    />
                  </div>
                  <Input label="Holder Name" />
                </div>
                <Button size="lg" className="hover:bg-[#3c95d2]" onClick={()=>{
                  setOpen(false)
                }}>Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="paypal" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Input type="email" label="Email Address" />
                </div>
 
                <div className="my-6">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Billing Address
                  </Typography>
 
                  <Select label="Country" menuProps={{ className: "h-48" }}>
                    {countries.map(({ name }: any) => (
                      <Option key={name} value={name}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                  <Input
                    label="Postal Code"
                    containerProps={{ className: "mt-4" }}
                  />
                </div>
                <Button size="lg" color="amber" className="relative h-12">
                  <img
                    alt="paypal "
                    className="absolute top-2/4 left-2/4 w-16 -translate-x-2/4 -translate-y-2/4"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4"
                  />
                </Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
      </Dialog>
      </div>

   
    </div>
  );
}

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
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import axios from "axios";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { PiWarningThin } from "react-icons/pi";
import { Link } from "react-router-dom";

export function Home() {
  const [openNav, setOpenNav] = useState(false);
  const [fields, setFields] = useState(false);
  const [files, setFiles] = useState([]);

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
      label: "Vue",
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
          Pages
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
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
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
                             { !fields ? "Provide all neccesary Details" : "You can Submit"}
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
      </div>

  
       <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

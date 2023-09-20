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
import {useEffect, useState} from "react";
import axios from "axios";
import {BASEURL} from "../../utils/baseEndpoints";
// import {user} from "../../../functions/mail-config";


  
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Pending",
      value: "monitored",
    },
    {
      label: "Approved",
      value: "unmonitored",
    },
  ];
  
  const TABLE_HEAD = [ "ID","Activity", "Employee_Responsible", "Channel"];
  

  export default function Logs() {

    const [data, setData] = useState({});
    const [TABLE_ROWS, setDataTable] = useState([]);
    const [ID, setID] = useState("1");


    useEffect(() => {
      const fetchData = async () => {
        try {
          // Replace with your actual axios API call
          const logs_response = await axios.get(
              `${BASEURL}/api/logs/`
          );
          console.log(logs_response);

          let response = logs_response.data.items;
          // response   = response.filter((row) => row.status === true);
          const results = response.filter((row) => row.id === ID);
          if(results.length !== 0){setData(results)}
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
      fetchDataIfNeeded().then(r => {});
    }, [ID]);


    return (
      <div className="px-20 pt-[125px]">
        <Card className="h-full w-full  mt-10 mb-20">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                System Reports/Logs
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all system activity
                </Typography>
              </div>
            
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs> */}
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
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
                  ({ id, type, description, username, user_id, channel, created}, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
  
                    return (
                      <tr key={id}>
                       
                           <td className={classes}>

                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {user_id}
                              </Typography>
                          
                        </td>
                        <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {description}
                            </Typography>
                            </td>
                        <td className={classes}>

                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {username}
                            </Typography>
                       
                        </td>
                       
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {channel}
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
        </Card>
      </div>
    );
  }
  
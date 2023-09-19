import { Button } from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { useHistory } from 'react-router-dom';
import {BASEURL} from "../../utils/baseEndpoints";




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASEURL}/api/users/auth-with-password/`, {
        identity: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const {record} = response.data;

      const log_response = await axios.post(`${BASEURL}/api/logs`,
          {
            "type": "activity",
            "description": "login",
            "username": record.username,
            "user_id": record.id,
            "channel": "system"
          },{
              headers: {
                  'Content-Type': 'application/json',
              },
          });

        setSuccess('Login successful');
        history.push('/app/dashboard');

      console.log('Login successful', response.data);
      // Here, you would typically save the JWT to localStorage and redirect the user to the dashboard
    } catch (error) {
        console.log(error.response.data.message);
      // // If the response status code is 400, it means the request was malformed
        if (error.response.status === 400) {
            setError(error.response.data.message);
        } else {
            setError('Something went wrong.');
        }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to sign in.
        </Typography>
        <form method="post" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {success && <div className="text-green-500 mt-2">{success}</div>}
          {/*<Checkbox*/}
          {/*  label={*/}
          {/*    <Typography*/}
          {/*      variant="small"*/}
          {/*      color="gray"*/}
          {/*      className="flex items-center font-normal"*/}
          {/*    >*/}
          {/*      I agree the*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="font-medium transition-colors hover:text-gray-900"*/}
          {/*      >*/}
          {/*        &nbsp;Terms and Conditions*/}
          {/*      </a>*/}
          {/*    </Typography>*/}
          {/*  }*/}
          {/*  containerProps={{ className: "-ml-2.5" }}*/}
          {/*/>*/}
          {/*<Link to="/app/dashboard">*/}
            <Button className="mt-6 hover:bg-[#0097c9]" fullWidth type="submit">
              Sign in
            </Button>
          {/*<Button className="bg-blue-200 mt-6 hover:bg-[#0097c9]" fullWidth type="submit">*/}
          {/*  Sign in with SSO*/}
          {/*</Button>*/}
            {/*</Link>*/}

          {/*<Typography color="gray" className="mt-4 text-center font-normal">*/}
          {/*  Already have an account?{" "}*/}
          {/*  <Link to="/auth/registration" className="font-medium text-gray-900 cursor-pointer">*/}
          {/*    Sign up*/}
          {/*  </Link>*/}
          {/*</Typography>*/}
        </form>
      </Card>
    </div>
  );
}

export default Login;

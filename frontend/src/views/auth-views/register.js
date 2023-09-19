import { Button } from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link, useHistory } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {BASEURL} from "../../utils/baseEndpoints";
function Register() {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    history.push("/auth/login");

    try {
      const res = await axios.post(`${BASEURL}/api/users/`, {
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      });
      console.log(res);
    } catch (error) {

      // If the response status code is 400, it means the request was malformed
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
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleRegistration}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" size="lg" label="Password" onChange={(e) => setPassword(e.target.value)} />
            <Input type="password" size="lg" label="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button className="mt-6  hover:bg-[#0097c9]" fullWidth type="submit">
            Register
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <span
              onClick={() => {
                history.push("/auth/login");
              }}
              className="font-medium text-gray-900 cursor-pointer"
            >
              Sign In
            </span>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;

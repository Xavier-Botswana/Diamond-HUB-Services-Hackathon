import { Button } from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link, useHistory } from "react-router-dom";
function Register() {
  const history = useHistory();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
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

          <Button className="mt-6  hover:bg-[#0097c9]" fullWidth>
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

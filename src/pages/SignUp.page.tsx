import Logo from "../assets/logo.png";
import { Img2 } from "../assets";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const SignUp = () => {
  const [info, setInfo] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(info);
  };
  const handleGoogleSignUp = async() => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    setInfo({...info,[name]:value});
  };
  return (
    <div className="h-svh bg-white sm:bg-gray-200 w-svw flex justify-center sm:items-center">
      <div className=" flex gap-2 bg-white w-full s:w-[70%] sm:max-w-lg h-fit p-5 lg:max-w-4xl">
        <div className="w-full lg:w-[55%] ">
          <div className="mb-3">
            <nav>
              <img src={Logo} alt="" height={70} width={70} />
            </nav>
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            <span>Few steps away from Digital World</span>
          </div>
          <div className="">
            <form action="" className="flex flex-col gap-3 mb-2" onSubmit={handleSubmit}>
              <label className="form-control w-full ">
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email address"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                />
              </label>
              <label className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="firstname"
                  placeholder="First Name"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                />
              </label>
              <label className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="lastname"
                  placeholder="Last Name"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                />
              </label>
              <label className="form-control w-full ">
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Username"
                  className="input input-bordered w-full "
                  onChange={handleChange}
                />
              </label>
              <label className="form-control w-full ">
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full "
                  onChange={handleChange}                
                />
              </label>
              <button
                type="submit"
                className="btn btn-info text-white font-semibold bg-blue-600"
              >
                Register
              </button>
            </form>
            <button className="btn w-full font-semibold shadow-md bg-white text-black " onClick={handleGoogleSignUp}>
              <FcGoogle />
              <span>Sign Up with Google</span>
            </button>
            <span className="mt-4 text-sm">
              Already have a Connexa account?{" "}
              <a href="/login" className="text-blue-600">
                Login now
              </a>
            </span>
          </div>
        </div>
        <div className={`w-[45%] hidden lg:block overflow-hidden relative`}>
          <img
            src={Img2}
            alt=""
            className="absolute w-full h-full object-cover"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

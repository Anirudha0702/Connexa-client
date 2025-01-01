import Logo from "../assets/logo.png";
import { Img1 } from "../assets";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";
const Login = () => {
  const dispatch =useAppDispatch();
  const handleLogin=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    dispatch(login({
      authToken:"1234",
      refreshToken:""
    }))
    
  }
  return (
    <div className="h-svh bg-white sm:bg-gray-200 w-svw flex justify-center sm:items-center">
      <div className=" flex gap-2 bg-white w-full s:w-[70%] sm:max-w-lg h-fit p-5 lg:max-w-4xl">
        <div className="w-full lg:w-[55%] ">
          <div className="mb-3">
            <nav>
              <img src={Logo} alt="" height={70} width={70} />
            </nav>
            <h1 className="text-2xl font-semibold">Sign In</h1>
            <span>to access connexa</span>
          </div>
          <div className="">
            <form action="" className="flex flex-col gap-3 mb-2">
              <label className="form-control w-full ">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="input input-bordered w-full "
                />
              </label>
              <label className="form-control w-full ">
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="input input-bordered w-full "
                />
              </label>
              <a href="#" className="text-blue-600 ">
                Forgot password?
              </a>
              <button
                type="submit"
                className="btn btn-info text-white font-semibold bg-blue-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
            <button className="btn w-full font-semibold shadow-md bg-white text-black ">
              <FcGoogle />
              <span>Sign In with Google</span>
            </button>
            <span className="mt-4 text-sm">
              Don't have a Connexa account?{" "}
              <a href="/signup" className="text-blue-600">
                Sign up now
              </a>
            </span>
          </div>
        </div>
        <div className={`w-[45%] hidden lg:block overflow-hidden relative`}>
          <img
            src={Img1}
            alt=""
            className="absolute w-full h-full object-cover"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Login;

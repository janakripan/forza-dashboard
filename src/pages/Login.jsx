import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Globe } from "lucide-react";

import sidebarLogo from "../assets/sidebarLogo.svg";
import logoText from "../assets/logoText.svg";
import leftImage from "../assets/loginPage/leftImage.png";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values, { setFieldError }) => {
      if (values.email === "fs@gmail.com" && values.password === "admin") {
        console.log("Login successful:", values);
        navigate("/select-branch");
      } else {
        setFieldError("email", "Invalid email or password");
        setFieldError("password", "Invalid email or password");
      }
    },
  });

  return (
    <div className="h-screen w-full flex font-inter bg-white overflow-hidden">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#F8FAFC] via-[#F3F0FF] to-[#E9E4FF] relative items-center justify-center">
        <div className="w-full h-full flex items-center justify-center p-10">
          <img
            src={leftImage}
            alt="Dashboard Illustration"
            className="w-full h-[85%] object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col relative bg-white items-center justify-between lg:justify-center h-full py-8 lg:py-0 overflow-y-auto lg:overflow-hidden">
        {/* Top Logo */}
        <div className="flex items-center gap-3.5 lg:absolute lg:top-[6%] z-10 shrink-0">
          <img
            src={sidebarLogo}
            alt="Forza Logo"
            className="h-[40px] w-[40px] lg:h-[52px] lg:w-[52px] object-contain"
          />
          <img
            src={logoText}
            alt="FORZA"
            className="h-[18px] lg:h-[22px] w-auto object-contain"
          />
        </div>

        {/* Form Container */}
        <div className="flex-1 flex w-full items-center justify-center px-4 sm:px-6 mt-8 lg:mt-0">
          <div className="w-full max-w-[480px] bg-white rounded-[24px] p-8 sm:p-10 lg:p-[48px] shadow-[0px_4px_60px_rgba(111,87,222,0.12)]">
            <h1 className="text-[28px] font-bold text-[#111827] mb-2 font-inter tracking-tight">
              Log in to your account
            </h1>
            <p className="text-[#6B7280] text-[15px] mb-8 font-inter">
              Welcome back! Please enter your details.
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-[22px]"
            >
              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#374151] font-inter">
                  Email<span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-[11px] rounded-[10px] border bg-white text-[15px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all duration-200 font-inter
                      ${
                        formik.touched.email && formik.errors.email
                          ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[3px] focus:ring-[#EF4444]/20"
                          : "border-[#E5E7EB] focus:border-[#6F57DE] focus:ring-[3px] focus:ring-[#6F57DE]/20"
                      }
                    `}
                    {...formik.getFieldProps("email")}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-[#EF4444] text-[13px] font-medium mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-[#374151] font-inter">
                  Password<span className="text-[#EF4444]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className={`w-full pl-4 pr-11 py-[11px] rounded-[10px] border bg-white text-[15px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all duration-200 font-inter
                      ${
                        formik.touched.password && formik.errors.password
                          ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[3px] focus:ring-[#EF4444]/20"
                          : "border-[#E5E7EB] focus:border-[#6F57DE] focus:ring-[3px] focus:ring-[#6F57DE]/20"
                      }
                    `}
                    {...formik.getFieldProps("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors p-1"
                  >
                    {showPassword ? (
                      <EyeOff size={18} strokeWidth={2} />
                    ) : (
                      <Eye size={18} strokeWidth={2} />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-[#EF4444] text-[13px] font-medium mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="peer appearance-none w-[18px] h-[18px] border border-[#D1D5DB] rounded-[5px] bg-white checked:bg-[#6F57DE] checked:border-[#6F57DE] transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#6F57DE]/30 focus-visible:ring-offset-2"
                      {...formik.getFieldProps("rememberMe")}
                    />
                    <svg
                      className="absolute w-3 h-3 pointer-events-none hidden peer-checked:block text-white"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 9L13 1"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] text-[#4B5563] font-medium group-hover:text-[#374151] transition-colors">
                    Remember for 30 days
                  </span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[14px] font-semibold text-[#6F57DE] hover:text-[#5949BE] transition-colors"
                >
                  Forgot password
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#6F57DE] hover:bg-[#5949BE] text-white py-[11px] rounded-[10px] font-semibold text-[15px] mt-2 transition-all duration-200 active:scale-[0.98]"
              >
                Sign in
              </button>

              {/* Register Link */}
              <div className="text-center mt-3 text-[14px] text-[#6B7280] font-medium">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#6F57DE] hover:text-[#5949BE] transition-colors"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 text-[#6B7280] text-[13px] font-medium lg:absolute lg:bottom-[4%] shrink-0 mt-8 lg:mt-0">
          <Globe size={15} strokeWidth={2} />
          <span>www.Sacrosys.com</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

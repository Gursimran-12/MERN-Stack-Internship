import { useState } from "react";
import Heading from "../components/ui/Heading";
import Breadcrumb from "../components/ui/Breadcrumb";

export default function Accountcomp() {
  const [isLogin, setIsLogin] = useState(true); 

  return (

    <main className="py-10">

      <Breadcrumb
        paths={[
          { label: "Home", to: "/" },
          { label: "My Account" }
        ]}
      />

      <header>
        <Heading title={"My Account"} description={"Manage your profile, track orders, and easily update your personal details anytime, all in one convenient place."} />
      </header>



      <section className="max-w-[1450px] mx-auto flex justify-center py-14 px-4 bg-black">
        <article className="w-full max-w-[550px] bg-white rounded-3xl p-10 shadow-lg">

          {/* Top title */}
          <h1 className="text-center text-4xl font-semibold">
            {isLogin ? "Sign In" : "Create Account"}
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8 text-[16px]">
            {isLogin
              ? "Sign in to access your personalized experience."
              : "Be part of our growing family of new customers!"}
          </p>

          {/* Form */}
          <form
            className="space-y-6"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;

              if (!form.checkValidity()) {
                form.reportValidity();
                return;
              }

              form.reset();
            }}
          >
            {/* Email */}
            <div>
              <label className="font-medium text-gray-800">
                Username or email address <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                required
                placeholder="Username or email address*"
                className="w-full border rounded-xl p-3 mt-2 text-gray-900 bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-medium text-gray-800">
                Password <span className="text-red-500">*</span>
              </label>

              <input
                type="password"
                required
                placeholder="Password*"
                className="w-full border rounded-xl p-3 mt-2 text-gray-900 bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* confirm password for create account */}
            {!isLogin && (
              <div>
                <label className="font-medium text-gray-800">
                  Confirm Password <span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  required
                  placeholder="Confirm Password*"
                  className="w-full border rounded-xl p-3 mt-2 text-gray-900 bg-gray-50
                  focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            )}

            {/* Remember me */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-black" />
                  <span className="text-gray-700">Remember me</span>
                </label>

                <button className="hover:underline font-medium hover:text-black">
                  Forgot Your Password?
                </button>
              </div>
            )}

            {/* Main Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-800"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

           
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full border border-black py-3 rounded-full text-lg font-medium hover:bg-gray-100"
            >
              {isLogin ? "Create Account" : "Login"}
            </button>
          </form>

        </article>
      </section>

    </main>
  );
}
// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// const Signin = () => {
//   const [email, setEmail] = useState(""); // State for email input
//   const [password, setPassword] = useState(""); // State for password input
//   const navigate = useNavigate(); // Hook for navigation

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form behavior

//     // Validate credentials
//     if (email === "johndoe@example.com" && password === "password") {
//       navigate("/userspage"); // Navigate to UsersPage on success
//     } else {
//       alert("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <StyledWrapper>
//       <div className="to">
//         <form className="form" onSubmit={handleSubmit}>
//           <div className="title">
//             <h1>
//               <center>Sign In</center>
//             </h1>
//           </div>
//           <div className="flex-column">
//             <label>Email</label>
//           </div>
//           <div className="inputForm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={20}
//               viewBox="0 0 32 32"
//               height={20}
//             >
//               <g data-name="Layer 3" id="Layer_3">
//                 <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
//               </g>
//             </svg>
//             <input
//               placeholder="Enter your Email"
//               className="input"
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} // Update email state
//             />
//           </div>
//           <div className="flex-column">
//             <label>Password</label>
//           </div>
//           <div className="inputForm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={20}
//               viewBox="-64 0 512 512"
//               height={20}
//             >
//               <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
//               <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
//             </svg>
//             <input
//               placeholder="Enter your Password"
//               className="input"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} // Update password state
//             />
//           </div>
//           <div className="flex-row">
//             <div>
//               <input type="radio" />
//               <label>Remember me</label>
//             </div>
//             <span className="span">Forgot password?</span>
//           </div>
//           <button className="button-submit" type="submit">
//             Sign In
//           </button>
//           <p className="p">
//             Don't have an account?{" "}
//             <span className="span">
//               <a href="/signup">Sign Up</a>
//             </span>
//           </p>
//           <p className="p line">Or With</p>
//           <div className="flex-row">
//             <button className="btn google">
//               <svg
//                 xmlSpace="preserve"
//                 style={{ enableBackground: "new 0 0 512 512" }}
//                 viewBox="0 0 512 512"
//                 y="0px"
//                 x="0px"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 xmlns="http://www.w3.org/2000/svg"
//                 id="Layer_1"
//                 width={20}
//                 version="1.1"
//               >
//                 <path
//                   d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
//           c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
//           C103.821,274.792,107.225,292.797,113.47,309.408z"
//                   style={{ fill: "#FBBB00" }}
//                 />
//                 <path
//                   d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
//           c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
//           c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
//                   style={{ fill: "#518EF8" }}
//                 />
//                 <path
//                   d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
//           c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
//           c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
//                   style={{ fill: "#28B446" }}
//                 />
//                 <path
//                   d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
//           c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
//           C318.115,0,375.068,22.126,419.404,58.936z"
//                   style={{ fill: "#F14336" }}
//                 />
//               </svg>
//               Google
//             </button>
//             <button className="btn apple">
//               <svg
//                 xmlSpace="preserve"
//                 style={{ enableBackground: "new 0 0 22.773 22.773" }}
//                 viewBox="0 0 22.773 22.773"
//                 y="0px"
//                 x="0px"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 xmlns="http://www.w3.org/2000/svg"
//                 id="Capa_1"
//                 width={20}
//                 height={20}
//                 version="1.1"
//               >
//                 <g>
//                   <g>
//                     <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
//                     <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
//                   </g>
//                 </g>
//               </svg>
//               Apple
//             </button>
//           </div>
//         </form>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     background: linear-gradient(45deg, red, yellow);
//     padding: 30px;
//     width: 450px;
//     border-radius: 20px;
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//     transition: background 0.3s ease;
//   }

//   .form:hover {
//     background: linear-gradient(45deg, yellow, red);
//   }
// .to{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh; /* Full viewport height */
//     width: 100vw; /* Full viewport width */
//     background-color: #f5f5f5; /
// }
//   ::placeholder {
//     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//       Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   }

//   .form button {
//     align-self: flex-end;
//   }

//   .flex-column > label {
//     color: #151717;
//     font-weight: 600;
//   }

//   .inputForm {
//     border: 1.5px solid #ecedec;
//     border-radius: 10em;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     padding-left: 10px;
//     transition: 0.2s ease-in-out;
//     background-color: white;
//   }

//   .input {
//     margin-left: 10px;
//     border-radius: 10rem;
//     border: none;
//     width: 100%;
//     height: 100%;
//   }

//   .input:focus {
//     outline: none;
//   }

//   .inputForm:focus-within {
//     border: 1.5px solid #2d79f3;
//   }

//   .flex-row {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 10px;
//     justify-content: space-between;
//   }

//   .flex-row > div > label {
//     font-size: 14px;
//     color: black;
//     font-weight: 400;
//   }

//   .span {
//     font-size: 14px;
//     margin-left: 5px;
//     color: white;
//     font-weight: 500;
//     cursor: pointer;
//   }

//   .button-submit {
//     position: relative;
//     display: inline-block;
//     padding: 15px 30px;
//     text-align: center;
//     letter-spacing: 1px;
//     text-decoration: none;
//     background: transparent;
//     transition: ease-out 0.5s;
//     border: 2px solid;
//     border-radius: 10em;
//     box-shadow: inset 0 0 0 0 red;
//     margin: 20px 0 10px 0;
//     color: white;
//     font-size: 15px;
//     font-weight: 500;
//     height: 50px;
//     width: 100%;
//     cursor: pointer;
//   }

//   .button-submit:hover {
//     color: white;
//     box-shadow: inset 0 -100px 0 0 darkorange;
//   }

//   .button-submit:active {
//     transform: scale(0.9);
//   }

//   .p {
//     text-align: center;
//     color: black;
//     font-size: 14px;
//     margin: 5px 0;
//   }

//   .btn {
//     margin-top: 10px;
//     width: 100%;
//     height: 50px;
//     border-radius: 10em;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 500;
//     gap: 10px;
//     border: 1px solid #ededef;
//     background-color: white;
//     cursor: pointer;
//     transition: 0.2s ease-in-out;
//   }
// @media screen and (max-width: 600px) {
//     .form {
//         width: 95%; /* Adjust form width for small screens */
//         padding: 20px;
//     }
// }
// .title{
// justify-content: center;
// }
// @media screen and (max-width: 400px) {
//     .form {
//         padding: 15px;
//     }
    
//     .button-submit {
//         font-size: 14px;
//         padding: 12px 25px;
//     }
// }
//   .btn:hover {
//     border: 1px solid #2d79f3;
//   }`;

// export default Signin;






import React from "react";
import "../styles/Signin.css";

const Signin = () => {
  return (
    <div className="container">
      <div className="breadcrumb">
        <a href="#">Home</a> &gt; <a href="#">Account</a>&gt; {" "}
        <span>Login</span>
      </div>
      <div className="grid">
        <div className="card">
          <h2>New Customer</h2>
          <h3>Register Account</h3>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <a href="/Signup"><button className="btn">Continue</button></a>
        </div>
        <div className="card">
          <h2>Returning Customer</h2>
          <h3>I am a returning customer</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" placeholder="E-Mail Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="forgot-password">
              <a href="#">Forgotten Password</a>
            </div>
            <button className="btn">Login</button>
          </form>
          <div className="social-buttons">
            <button className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="social-btn twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="social-btn google">
              <i className="fab fa-google"></i>
            </button>
            <button className="social-btn linkedin">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
        </div>
        <div className="card">
          <h2>Account</h2>
          <ul>
            <li>
              <a href="#">Login / Register</a>
            </li><hr />
            <li>
              <a href="/ForgotPassword">Forgotten Password</a>
            </li><hr />
            <li>
              <a href="#">My Account</a>
            </li><hr />
            <li>
              <a href="#">Address Book</a>
            </li><hr />
            <li>
              <a href="#">Wish List</a>
            </li><hr />
            <li>
              <a href="#">Order History</a>
            </li><hr />
            <li>
              <a href="#">Downloads</a>
            </li><hr />
            <li>
              <a href="#">Recurring payments</a>
            </li><hr />
            <li>
              <a href="#">Reward Points</a>
            </li><hr />
            <li>
              <a href="#">Returns</a>
            </li><hr />
            <li>
              <a href="#">Transactions</a>
            </li><hr />
            <li>
              <a href="#">Newsletter</a>
            </li><hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signin;
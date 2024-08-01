import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";
import SignupIllustration from "../assets/mixkit-i-love-you-hand-gesture-419-original.png";
import {UserAuth} from "../firebase/FBconfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Register() {

  const initialValues = {
    Name: "",
    Email: "",
    Password: "",
  };

  const navigate = useNavigate();

  const validateSchema = Yup.object({
    Name: Yup.string().required("user name is required"),
    Email: Yup.string()
      .required("email is required")
      .email("Email is not valid"),
    Password: Yup.string()
      .required("password is required")
      .min(8, "password must be 8 characters long"),
  });

  const onFormSubmit = async(values) => {
    try{
      return await createUserWithEmailAndPassword(UserAuth, values.Email, values.Password)
      .then((credentials) => {
        localStorage.setItem('user_name', JSON.stringify(values.Name));
        localStorage.setItem('user_credentials', JSON.stringify(credentials.user));
        alert("Let's productive");
        navigate('/');
      })
    }
    catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className="Signup font-Inter flex items-center justify-evenly m-0 p-0">
      <div className="signup-illustration">
        <img src={SignupIllustration} className="w-96 rounded-md shadow-2xl" />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onFormSubmit(values)}
        validationSchema={validateSchema}
      >
        {
          () => (
            <div className="Signup-container">
              <div className="signup-header">
                <h2>Create account</h2>
                <p>Let a To-do list be your guide to success. 🚀</p>
              </div>
              <div className="signup-user-form">
                <Form className="signup-input-form">
                  <div className="signup-form">
                    <label htmlFor="name">name</label>
                    <Field
                      name="Name"
                      type="text"
                      placeholder="e.g: george"
                      className="signup-input"
                    />
                    <ErrorMessage
                      name="Name"
                      className="error"
                      component="span"
                    />
                    <label htmlFor="email">Email</label>
                    <Field
                      name="Email"
                      type="email"
                      placeholder="e.g: georgesam1976@gmail.com"
                      className="signup-input"
                    />
                    <ErrorMessage
                      name="Email"
                      className="error"
                      component="span"
                    />
                  </div>
                  <div className="signup-form">
                    <label htmlFor="password">Create Password</label>
                    <Field
                      name="Password"
                      type="password"
                      placeholder="create password"
                      className="signup-input"
                    />
                    <ErrorMessage
                      name="Password"
                      className="error"
                      component="span"
                    />
                  </div>
                  <button type="submit" className="submit-btn">Create account </button>
                </Form>
              </div>
            </div>
          )}
      </Formik>
    </div>
  );
}

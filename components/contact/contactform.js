import React, { useCallback, useState, Controller } from "react";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'



export default function Contactform() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const [errmessage, setErrMessage] = useState("");

    const router = useRouter()

   

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const validateCaptcha = (response_key) => {
        return new Promise((resolve, reject) => {
          const secret_key = '6LeeNQ4iAAAAANgHJxIcT2dqDPDKHoPyi0sW2cLI'
      
          const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`
      
          fetch(url, {
            method: 'post'
          })
            .then((response) => response.json())
            .then((google_response) => {
              if (google_response.success == true) {
                resolve(true)
              } else {
                resolve(false)
              }
            })
            .catch((err) => {
              console.log(err)
              resolve(false)
            })
        })
      }
    const onSubmit = async(data)=>{
        if (grecaptcha.getResponse() === '') {
            setErrMessage('Please Click on Recaptcha')
          }
          else
          {
            const contactInfo = {
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
            };
            console.log(contactInfo); 
            
            const add = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/contactus-lead`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ data: contactInfo }),
                }
            );
            const addResponse = await add.text();
            console.log(addResponse);
            if(addResponse){
                router.push('/thankyou')
            }
          }
        
        
    }

    return (
        <>
            
                    <div className="contact-us-form">
                        <span>Contact us</span>
                        <h2>Get in touch</h2>
                        <p>We’d love to hear from you. Please fill out this form.</p>
                        
                        <div className="form-box row">
                            <div className="col-lg-6 col-md-9 col-sm-12 col-12">

                                <form onSubmit={handleSubmit(onSubmit)}
                                    action="#"
                                    method="POST"
                                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                                >
                                    <div className='d-flex flex-direction-row justify-content-between gap-4'>
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium text-warm-gray-900"
                                            >
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    {...register("firstName", { required: true })}
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    autoComplete="given-name"
                                                    placeholder='First name'
                                                    className={`form-control ${errors.firstName ? 'is-invalid px-4 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md' : 'py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}`}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    value={firstName}

                                                />

                                                {errors.firstName && <p className="error text-red-500">This field is required.</p>}
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-warm-gray-900"
                                            >
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    {...register("lastName", { required: true })}

                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    autoComplete="family-name"
                                                    placeholder='Last name'
                                                    className={`form-control ${errors.lastName ? 'is-invalid px-4 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md' : 'py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}`}
                                                    onChange={(e) => setLastName(e.target.value)}

                                                    value={lastName}
                                                />
                                                {errors.lastName && <p className="error text-red-500">This field is required.</p>}

                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-3'>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-warm-gray-900"
                                        >
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                {...register("email", { required: true })}
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder='you@compnay.com'
                                                className={`form-control ${errors.email ? 'is-invalid px-4 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md' : 'py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}`}
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                            />
                                            {errors.email && <p className="error text-red-500">This field is required.</p>}
                                        </div>
                                    </div>

                                    <div className='mt-3'>
                                        <div className="flex justify-between">
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-warm-gray-900"
                                            >
                                                Phone number
                                            </label>

                                        </div>
                                        <div className="mt-1">
                                            <div className='d-flex flex-direction-row is-invalid px-4 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md'>
                                                {/* <select {...register("US")} className="border-0">
                                                    <option value="US">US</option>
                                                    <option value="India">India</option>
                                                    <option value="UK">UK</option>
                                                    <option value="AUS">AUS</option>
                                                </select> */}
                                                <input
                                                    {...register("phone", { required: true })}
                                                    id="phone"
                                                    name="phone"
                                                    type="phone"
                                                    autoComplete="phone"
                                                    placeholder='+1 (555) 000-0000'
                                                    className='is-invalid border-0 block w-full text-warm-gray-900 rounded-md : py-2 text-warm-gray-900  rounded-md'
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    value={phone}
                                                />
                                                 {errors.phone && <p className="error text-red-500">This field is required.</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-3'>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-warm-gray-900"
                                        >
                                            Subject
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                {...register("subject", { required: true })}
                                                id="subject"
                                                name="subject"
                                                type="subject"
                                                autoComplete="subject"
                                                placeholder='Subject'
                                                className={`form-control ${errors.subject ? 'is-invalid px-4 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md' : 'py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md'}`}
                                                onChange={(e) => setSubject(e.target.value)}
                                                value={subject}
                                            />
                                            {errors.subject && <p className="error text-red-500">This field is required.</p>}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 mt-3">
                                        <div className="flex justify-between">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-warm-gray-900"
                                            >
                                                Message
                                            </label>

                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                {...register("message", { required: true })}
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                                                aria-describedby="message-max"
                                                // defaultValue={""}
                                                onChange={(e) => setMessage(e.target.value)}
                                                value={message}
                                                placeholder='Leave us a message...'
                                            />
                                            {errors.message && <p className="error text-red-500">This field is required.</p>}
                                        </div>
                                        <div className="form-check mt-2">
                                            <input
                                                name="acceptTerms"
                                                type="checkbox"
                                                {...register('acceptTerms', { required: true })}
                                                id="acceptTerms"
                                                className="form-check-input"
                                                />
                                            {/* <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckDefault"
                                            /> */}
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                You agree to our friendly <Link href="/privacy-policy"><a>privacy policy</a></Link>.
                                            </label>
                                            {errors.acceptTerms && <p className="error text-red-500">Please accept Terms & Conditions</p>}
                                        </div>
                                    </div>
                                    <ReCAPTCHA size="normal" sitekey="6LeeNQ4iAAAAAOm4Jr1-0BOYihIiDUFb1XKmfghR" />
                                    {errmessage && <div className="alert alert-danger" role="alert">{errmessage}</div>}
                                    <div className="sm:col-span-2 sm:flex sm:justify-end mb-3 mt-4">
                                        <button
                                            type="submit"
                                            className="formsubmit"
                                            onClick={handleSubmit}
                                        >
                                            Send message
                                        </button>
                                    </div>
                                    {success && <div className="alert alert-success text-center" role="alert">{success}</div>}
                                </form>

                            </div>
                        </div>
                    </div>
                
                   
                
        </>

    )

}
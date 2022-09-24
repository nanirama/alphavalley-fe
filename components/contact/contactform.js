import React, { useState } from "react";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'



export default function Contactform() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errmessage, setErrMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const countries = [ 
        {name: 'United States', code: 'US'}, 
        {name: 'Afghanistan', code: 'AF'}, 
        {name: 'Åland Islands', code: 'AX'}, 
        {name: 'Albania', code: 'AL'}, 
        {name: 'Algeria', code: 'DZ'}, 
        {name: 'American Samoa', code: 'AS'}, 
        {name: 'AndorrA', code: 'AD'}, 
        {name: 'Angola', code: 'AO'}, 
        {name: 'Anguilla', code: 'AI'}, 
        {name: 'Antarctica', code: 'AQ'}, 
        {name: 'Antigua and Barbuda', code: 'AG'}, 
        {name: 'Argentina', code: 'AR'}, 
        {name: 'Armenia', code: 'AM'}, 
        {name: 'Aruba', code: 'AW'}, 
        {name: 'Australia', code: 'AU'}, 
        {name: 'Austria', code: 'AT'}, 
        {name: 'Azerbaijan', code: 'AZ'}, 
        {name: 'Bahamas', code: 'BS'}, 
        {name: 'Bahrain', code: 'BH'}, 
        {name: 'Bangladesh', code: 'BD'}, 
        {name: 'Barbados', code: 'BB'}, 
        {name: 'Belarus', code: 'BY'}, 
        {name: 'Belgium', code: 'BE'}, 
        {name: 'Belize', code: 'BZ'}, 
        {name: 'Benin', code: 'BJ'}, 
        {name: 'Bermuda', code: 'BM'}, 
        {name: 'Bhutan', code: 'BT'}, 
        {name: 'Bolivia', code: 'BO'}, 
        {name: 'Bosnia and Herzegovina', code: 'BA'}, 
        {name: 'Botswana', code: 'BW'}, 
        {name: 'Bouvet Island', code: 'BV'}, 
        {name: 'Brazil', code: 'BR'}, 
        {name: 'British Indian Ocean Territory', code: 'IO'}, 
        {name: 'Brunei Darussalam', code: 'BN'}, 
        {name: 'Bulgaria', code: 'BG'}, 
        {name: 'Burkina Faso', code: 'BF'}, 
        {name: 'Burundi', code: 'BI'}, 
        {name: 'Cambodia', code: 'KH'}, 
        {name: 'Cameroon', code: 'CM'}, 
        {name: 'Canada', code: 'CA'}, 
        {name: 'Cape Verde', code: 'CV'}, 
        {name: 'Cayman Islands', code: 'KY'}, 
        {name: 'Central African Republic', code: 'CF'}, 
        {name: 'Chad', code: 'TD'}, 
        {name: 'Chile', code: 'CL'}, 
        {name: 'China', code: 'CN'}, 
        {name: 'Christmas Island', code: 'CX'}, 
        {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {name: 'Colombia', code: 'CO'}, 
        {name: 'Comoros', code: 'KM'}, 
        {name: 'Congo', code: 'CG'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {name: 'Cook Islands', code: 'CK'}, 
        {name: 'Costa Rica', code: 'CR'}, 
        {name: 'Cote D\'Ivoire', code: 'CI'}, 
        {name: 'Croatia', code: 'HR'}, 
        {name: 'Cuba', code: 'CU'}, 
        {name: 'Cyprus', code: 'CY'}, 
        {name: 'Czech Republic', code: 'CZ'}, 
        {name: 'Denmark', code: 'DK'}, 
        {name: 'Djibouti', code: 'DJ'}, 
        {name: 'Dominica', code: 'DM'}, 
        {name: 'Dominican Republic', code: 'DO'}, 
        {name: 'Ecuador', code: 'EC'}, 
        {name: 'Egypt', code: 'EG'}, 
        {name: 'El Salvador', code: 'SV'}, 
        {name: 'Equatorial Guinea', code: 'GQ'}, 
        {name: 'Eritrea', code: 'ER'}, 
        {name: 'Estonia', code: 'EE'}, 
        {name: 'Ethiopia', code: 'ET'}, 
        {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {name: 'Faroe Islands', code: 'FO'}, 
        {name: 'Fiji', code: 'FJ'}, 
        {name: 'Finland', code: 'FI'}, 
        {name: 'France', code: 'FR'}, 
        {name: 'French Guiana', code: 'GF'}, 
        {name: 'French Polynesia', code: 'PF'}, 
        {name: 'French Southern Territories', code: 'TF'}, 
        {name: 'Gabon', code: 'GA'}, 
        {name: 'Gambia', code: 'GM'}, 
        {name: 'Georgia', code: 'GE'}, 
        {name: 'Germany', code: 'DE'}, 
        {name: 'Ghana', code: 'GH'}, 
        {name: 'Gibraltar', code: 'GI'}, 
        {name: 'Greece', code: 'GR'}, 
        {name: 'Greenland', code: 'GL'}, 
        {name: 'Grenada', code: 'GD'}, 
        {name: 'Guadeloupe', code: 'GP'}, 
        {name: 'Guam', code: 'GU'}, 
        {name: 'Guatemala', code: 'GT'}, 
        {name: 'Guernsey', code: 'GG'}, 
        {name: 'Guinea', code: 'GN'}, 
        {name: 'Guinea-Bissau', code: 'GW'}, 
        {name: 'Guyana', code: 'GY'}, 
        {name: 'Haiti', code: 'HT'}, 
        {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {name: 'Holy See (Vatican City State)', code: 'VA'}, 
        {name: 'Honduras', code: 'HN'}, 
        {name: 'Hong Kong', code: 'HK'}, 
        {name: 'Hungary', code: 'HU'}, 
        {name: 'Iceland', code: 'IS'}, 
        {name: 'India', code: 'IN'}, 
        {name: 'Indonesia', code: 'ID'}, 
        {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {name: 'Iraq', code: 'IQ'}, 
        {name: 'Ireland', code: 'IE'}, 
        {name: 'Isle of Man', code: 'IM'}, 
        {name: 'Israel', code: 'IL'}, 
        {name: 'Italy', code: 'IT'}, 
        {name: 'Jamaica', code: 'JM'}, 
        {name: 'Japan', code: 'JP'}, 
        {name: 'Jersey', code: 'JE'}, 
        {name: 'Jordan', code: 'JO'}, 
        {name: 'Kazakhstan', code: 'KZ'}, 
        {name: 'Kenya', code: 'KE'}, 
        {name: 'Kiribati', code: 'KI'}, 
        {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {name: 'Korea, Republic of', code: 'KR'}, 
        {name: 'Kuwait', code: 'KW'}, 
        {name: 'Kyrgyzstan', code: 'KG'}, 
        {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {name: 'Latvia', code: 'LV'}, 
        {name: 'Lebanon', code: 'LB'}, 
        {name: 'Lesotho', code: 'LS'}, 
        {name: 'Liberia', code: 'LR'}, 
        {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {name: 'Liechtenstein', code: 'LI'}, 
        {name: 'Lithuania', code: 'LT'}, 
        {name: 'Luxembourg', code: 'LU'}, 
        {name: 'Macao', code: 'MO'}, 
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {name: 'Madagascar', code: 'MG'}, 
        {name: 'Malawi', code: 'MW'}, 
        {name: 'Malaysia', code: 'MY'}, 
        {name: 'Maldives', code: 'MV'}, 
        {name: 'Mali', code: 'ML'}, 
        {name: 'Malta', code: 'MT'}, 
        {name: 'Marshall Islands', code: 'MH'}, 
        {name: 'Martinique', code: 'MQ'}, 
        {name: 'Mauritania', code: 'MR'}, 
        {name: 'Mauritius', code: 'MU'}, 
        {name: 'Mayotte', code: 'YT'}, 
        {name: 'Mexico', code: 'MX'}, 
        {name: 'Micronesia, Federated States of', code: 'FM'}, 
        {name: 'Moldova, Republic of', code: 'MD'}, 
        {name: 'Monaco', code: 'MC'}, 
        {name: 'Mongolia', code: 'MN'}, 
        {name: 'Montserrat', code: 'MS'}, 
        {name: 'Morocco', code: 'MA'}, 
        {name: 'Mozambique', code: 'MZ'}, 
        {name: 'Myanmar', code: 'MM'}, 
        {name: 'Namibia', code: 'NA'}, 
        {name: 'Nauru', code: 'NR'}, 
        {name: 'Nepal', code: 'NP'}, 
        {name: 'Netherlands', code: 'NL'}, 
        {name: 'Netherlands Antilles', code: 'AN'}, 
        {name: 'New Caledonia', code: 'NC'}, 
        {name: 'New Zealand', code: 'NZ'}, 
        {name: 'Nicaragua', code: 'NI'}, 
        {name: 'Niger', code: 'NE'}, 
        {name: 'Nigeria', code: 'NG'}, 
        {name: 'Niue', code: 'NU'}, 
        {name: 'Norfolk Island', code: 'NF'}, 
        {name: 'Northern Mariana Islands', code: 'MP'}, 
        {name: 'Norway', code: 'NO'}, 
        {name: 'Oman', code: 'OM'}, 
        {name: 'Pakistan', code: 'PK'}, 
        {name: 'Palau', code: 'PW'}, 
        {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {name: 'Panama', code: 'PA'}, 
        {name: 'Papua New Guinea', code: 'PG'}, 
        {name: 'Paraguay', code: 'PY'}, 
        {name: 'Peru', code: 'PE'}, 
        {name: 'Philippines', code: 'PH'}, 
        {name: 'Pitcairn', code: 'PN'}, 
        {name: 'Poland', code: 'PL'}, 
        {name: 'Portugal', code: 'PT'}, 
        {name: 'Puerto Rico', code: 'PR'}, 
        {name: 'Qatar', code: 'QA'}, 
        {name: 'Reunion', code: 'RE'}, 
        {name: 'Romania', code: 'RO'}, 
        {name: 'Russian Federation', code: 'RU'}, 
        {name: 'RWANDA', code: 'RW'}, 
        {name: 'Saint Helena', code: 'SH'}, 
        {name: 'Saint Kitts and Nevis', code: 'KN'}, 
        {name: 'Saint Lucia', code: 'LC'}, 
        {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {name: 'Samoa', code: 'WS'}, 
        {name: 'San Marino', code: 'SM'}, 
        {name: 'Sao Tome and Principe', code: 'ST'}, 
        {name: 'Saudi Arabia', code: 'SA'}, 
        {name: 'Senegal', code: 'SN'}, 
        {name: 'Serbia and Montenegro', code: 'CS'}, 
        {name: 'Seychelles', code: 'SC'}, 
        {name: 'Sierra Leone', code: 'SL'}, 
        {name: 'Singapore', code: 'SG'}, 
        {name: 'Slovakia', code: 'SK'}, 
        {name: 'Slovenia', code: 'SI'}, 
        {name: 'Solomon Islands', code: 'SB'}, 
        {name: 'Somalia', code: 'SO'}, 
        {name: 'South Africa', code: 'ZA'}, 
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {name: 'Spain', code: 'ES'}, 
        {name: 'Sri Lanka', code: 'LK'}, 
        {name: 'Sudan', code: 'SD'}, 
        {name: 'Suriname', code: 'SR'}, 
        {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {name: 'Swaziland', code: 'SZ'}, 
        {name: 'Sweden', code: 'SE'}, 
        {name: 'Switzerland', code: 'CH'}, 
        {name: 'Syrian Arab Republic', code: 'SY'}, 
        {name: 'Taiwan, Province of China', code: 'TW'}, 
        {name: 'Tajikistan', code: 'TJ'}, 
        {name: 'Tanzania, United Republic of', code: 'TZ'}, 
        {name: 'Thailand', code: 'TH'}, 
        {name: 'Timor-Leste', code: 'TL'}, 
        {name: 'Togo', code: 'TG'}, 
        {name: 'Tokelau', code: 'TK'}, 
        {name: 'Tonga', code: 'TO'}, 
        {name: 'Trinidad and Tobago', code: 'TT'}, 
        {name: 'Tunisia', code: 'TN'}, 
        {name: 'Turkey', code: 'TR'}, 
        {name: 'Turkmenistan', code: 'TM'}, 
        {name: 'Turks and Caicos Islands', code: 'TC'}, 
        {name: 'Tuvalu', code: 'TV'}, 
        {name: 'Uganda', code: 'UG'}, 
        {name: 'Ukraine', code: 'UA'}, 
        {name: 'United Arab Emirates', code: 'AE'}, 
        {name: 'United Kingdom', code: 'GB'},         
        {name: 'United States Minor Outlying Islands', code: 'UM'}, 
        {name: 'Uruguay', code: 'UY'}, 
        {name: 'Uzbekistan', code: 'UZ'}, 
        {name: 'Vanuatu', code: 'VU'}, 
        {name: 'Venezuela', code: 'VE'}, 
        {name: 'Viet Nam', code: 'VN'}, 
        {name: 'Virgin Islands, British', code: 'VG'}, 
        {name: 'Virgin Islands, U.S.', code: 'VI'}, 
        {name: 'Wallis and Futuna', code: 'WF'}, 
        {name: 'Western Sahara', code: 'EH'}, 
        {name: 'Yemen', code: 'YE'}, 
        {name: 'Zambia', code: 'ZM'}, 
        {name: 'Zimbabwe', code: 'ZW'} 
      ];

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
            setIsSubmitting(true)
            const contactInfo = {
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                phone: data.phone,
                subject: 'Pitch Deck Enquiry - Contact Us',
                message: data.message,
                country_code: data.country_code
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
                                            <div className='d-flex flex-direction-row is-invalid px-2 block w-full shadow-sm text-warm-gray-900 border-red-500 border rounded-md'>
                                                <select {...register("country_code")} className="border-0" name="country_code">
                                                    {countries.map((item,index)=>(
                                                        <option value={item.code} key={index}>{item.code}</option>
                                                    ))}
                                                    
                                                </select>
                                                <input
                                                    {...register("phone", { required: true })}
                                                    id="phone"
                                                    name="phone"
                                                    type="phone"
                                                    autoComplete="phone"
                                                    placeholder='(555) 000-0000'
                                                    className='is-invalid border-0 block px-3 w-full text-warm-gray-900 rounded-md : py-2 text-warm-gray-900  rounded-md'
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    value={phone}
                                                />
                                                 {errors.phone && <p className="error text-red-500">This field is required.</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='mt-3'>
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
                                    </div> */}

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
                                    {errmessage && <div className="alert alert-danger mb-3" role="alert">{errmessage}</div>}
                                    <div className="sm:col-span-2 sm:flex sm:justify-end mb-3 mt-4">
                                        <button
                                            type="submit"
                                            className="formsubmit"
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                        >
                                            Send message
                                        </button>
                                    </div>                                   
                                </form>

                            </div>
                        </div>
                    </div>
                
                   
                
        </>

    )

}
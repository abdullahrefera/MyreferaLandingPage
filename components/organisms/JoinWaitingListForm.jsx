import React, { useState } from 'react';
import axios from 'axios';
import "@/app/globals.css";
import { RiCheckDoubleFill } from "react-icons/ri";

const countries = [
    { name: '🇦🇫', code: '+93' },
    { name: '🇦🇱', code: '+355' },
    { name: '🇩🇿', code: '+213' },
    { name: '🇦🇸', code: '+1-684' },
    { name: '🇦🇩', code: '+376' },
    { name: '🇦🇴', code: '+244' },
    { name: '🇦🇮', code: '+1-264' },
    { name: '🇦🇶', code: '+672' },
    { name: '🇦🇬', code: '+1-268' },
    { name: '🇦🇷', code: '+54' },
    { name: '🇦🇲', code: '+374' },
    { name: '🇦🇼', code: '+297' },
    { name: '🇦🇺', code: '+61' },
    { name: '🇦🇹', code: '+43' },
    { name: '🇦🇿', code: '+994' },
    { name: '🇧🇸', code: '+1-242' },
    { name: '🇧🇭', code: '+973' },
    { name: '🇧🇩', code: '+880' },
    { name: '🇧🇧', code: '+1-246' },
    { name: '🇧🇾', code: '+375' },
    { name: '🇧🇪', code: '+32' },
    { name: '🇧🇿', code: '+501' },
    { name: '🇧🇯', code: '+229' },
    { name: '🇧🇲', code: '+1-441' },
    { name: '🇧🇹', code: '+975' },
    { name: '🇧🇴', code: '+591' },
    { name: '🇧🇦', code: '+387' },
    { name: '🇧🇼', code: '+267' },
    { name: '🇧🇷', code: '+55' },
    { name: '🇻🇬', code: '+1-284' },
    { name: '🇧🇳', code: '+673' },
    { name: '🇧🇬', code: '+359' },
    { name: '🇧🇫', code: '+226' },
    { name: '🇧🇮', code: '+257' },
    { name: '🇰🇭', code: '+855' },
    { name: '🇨🇦', code: '+1' },
    { name: '🇨🇩', code: '+236' },
    { name: '🇹🇩', code: '+235' },
    { name: '🇨🇳', code: '+86' },
    { name: '🇨🇴', code: '+57' },
    { name: '🇰🇲', code: '+269' },
    { name: '🇨🇬', code: '+242' },
    { name: '🇨🇩', code: '+243' },
    { name: '🇭🇷', code: '+385' },
    { name: '🇨🇺', code: '+53' },
    { name: '🇨🇾', code: '+357' },
    { name: '🇨🇿', code: '+420' },
    { name: '🇩🇰', code: '+45' },
    { name: '🇩🇯', code: '+253' },
    { name: '🇩🇲', code: '+1-767' },
    { name: '🇩🇴', code: '+1-809' },
    { name: '🇪🇨', code: '+593' },
    { name: '🇪🇬', code: '+20' },
    { name: '🇸🇻', code: '+503' },
    { name: '🇬🇶', code: '+240' },
    { name: '🇪🇷', code: '+291' },
    { name: '🇪🇪', code: '+372' },
    { name: '🇸🇴', code: '+268' },
    { name: '🇪🇺', code: '+32' },
    { name: '🇫🇷', code: '+33' },
    { name: '🇬🇦', code: '+241' },
    { name: '🇬🇲', code: '+220' },
    { name: '🇬🇪', code: '+995' },
    { name: '🇩🇪', code: '+49' },
    { name: '🇬🇭', code: '+233' },
    { name: '🇬🇷', code: '+30' },
    { name: '🇬🇩', code: '+1-473' },
    { name: '🇬🇺', code: '+1-671' },
    { name: '🇬🇹', code: '+502' },
    { name: '🇬🇼', code: '+224' },
    { name: '🇬🇬', code: '+44' },
    { name: '🇬🇳', code: '+245' },
    { name: '🇭🇹', code: '+509' },
    { name: '🇭🇲', code: '+672' },
    { name: '🇭🇺', code: '+36' },
    { name: '🇮🇸', code: '+354' },
    { name: '🇮🇳', code: '+91' },
    { name: '🇮🇩', code: '+62' },
    { name: '🇮🇷', code: '+98' },
    { name: '🇮🇶', code: '+964' },
    { name: '🇮🇪', code: '+353' },
    { name: '🇮🇱', code: '+972' },
    { name: '🇮🇹', code: '+39' },
    { name: '🇯🇲', code: '+1-876' },
    { name: '🇯🇵', code: '+81' },
    { name: '🇯🇪', code: '+44' },
    { name: '🇯🇴', code: '+962' },
    { name: '🇰🇿', code: '+7' },
    { name: '🇰🇪', code: '+254' },
    { name: '🇰🇮', code: '+686' },
    { name: '🇰🇵', code: '+850' },
    { name: '🇰🇷', code: '+82' },
    { name: '🇰🇼', code: '+965' },
    { name: '🇰🇬', code: '+996' },
    { name: '🇱🇦', code: '+856' },
    { name: '🇱🇺', code: '+352' },
    { name: '🇲🇰', code: '+389' },
    { name: '🇲🇬', code: '+261' },
    { name: '🇲🇼', code: '+265' },
    { name: '🇲🇱', code: '+223' },
    { name: '🇲🇹', code: '+356' },
    { name: '🇲🇭', code: '+692' },
    { name: '🇲🇶', code: '+596' },
    { name: '🇲🇽', code: '+52' },
    { name: '🇲🇩', code: '+373' },
    { name: '🇲🇨', code: '+377' },
    { name: '🇲🇦', code: '+212' },
    { name: '🇲🇿', code: '+258' },
    { name: '🇲🇲', code: '+95' },
    { name: '🇳🇦', code: '+264' },
    { name: '🇳🇵', code: '+977' },
    { name: '🇳🇷', code: '+674' },
    { name: '🇳🇱', code: '+31' },
    { name: '🇳🇿', code: '+64' },
    { name: '🇲🇲', code: '+505' },
    { name: '🇳🇴', code: '+47' },
    { name: '🇴🇲', code: '+968' },
    { name: '🇵🇰', code: '+92' },
    { name: '🇵🇬', code: '+675' },
    { name: '🇵🇾', code: '+595' },
    { name: '🇵🇪', code: '+51' },
    { name: '🇵🇭', code: '+63' },
    { name: '🇵🇱', code: '+48' },
    { name: '🇵🇹', code: '+351' },
    { name: '🇶🇦', code: '+974' },
    { name: '🇷🇴', code: '+40' },
    { name: '🇷🇸', code: '+381' },
    { name: '🇷🇺', code: '+7' },
    { name: '🇷🇼', code: '+250' },
    { name: '🇸🇦', code: '+966' },
    { name: '🇸🇬', code: '+65' },
    { name: '🇸🇰', code: '+421' },
    { name: '🇸🇮', code: '+386' },
    { name: '🇸🇧', code: '+677' },
    { name: '🇸🇴', code: '+252' },
    { name: '🇿🇦', code: '+27' },
    { name: '🇬🇸', code: '+1-876' },
    { name: '🇸🇲', code: '+378' },
    { name: '🇸🇧', code: '+378' },
    { name: '🇸🇱', code: '+232' },
    { name: '🇸🇬', code: '+65' },
    { name: '🇸🇭', code: '+290' },
    { name: '🇱🇰', code: '+94' },
    { name: '🇸🇹', code: '+239' },
    { name: '🇸🇴', code: '+252' },
    { name: '🇹🇲', code: '+993' },
    { name: '🇹🇬', code: '+228' },
    { name: '🇹🇭', code: '+66' },
    { name: '🇹🇬', code: '+228' },
    { name: '🇹🇷', code: '+90' },
    { name: '🇹🇹', code: '+1-868' },
    { name: '🇺🇬', code: '+256' },
    { name: '🇺🇦', code: '+380' },
    { name: '🇦🇪', code: '+971' },
    { name: '🇬🇧', code: '+44' },
    { name: '🇺🇸', code: '+1' },
    { name: '🇺🇾', code: '+598' },
    { name: '🇺🇿', code: '+998' },
    { name: '🇻🇺', code: '+678' },
    { name: '🇻🇦', code: '+379' },
    { name: '🇻🇪', code: '+58' },
    { name: '🇻🇳', code: '+84' },
    { name: '🇼🇫', code: '+681' },
    { name: '🇾🇹', code: '+262' },
    { name: '🇿🇦', code: '+27' },
    { name: '🇿🇲', code: '+260' },
    { name: '🇿🇼', code: '+263' },
];


const JoinWaitingListForm = () => {
    const [formData, setFormData] = useState({
        userType: '',
        name: '',
        websiteUrl: '',
        whatsappNumber: '',
        email: '',
        countryCode: '+971', // Default to UAE
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
    const [loading, setLoading] = useState(false);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullWhatsAppNumber = `${formData.countryCode}${formData.whatsappNumber}`;

        const dataToSubmit = {
            ...formData,
            whatsappNumber: fullWhatsAppNumber, // Use the concatenated number
        };

        setLoading(true);

        try {
            const response = await axios.post('/api/submit', dataToSubmit);

            if (response.status === 200) {
                console.log('Form data submitted successfully!');
                setIsSubmitted(true);
                setFormData({
                    userType: '',
                    name: '',
                    websiteUrl: '',
                    whatsappNumber: '',
                    email: '',
                    countryCode: '+971', 
                });
            } else {
                console.error('Error submitting form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        } finally {
            setLoading(true);
        }
    };

    return (
        <div className="sm:w-[669px] flex flex-col gap-[12px] pt-[36px] sm:pb-[48px] pb-[28px] px-[20px] sm:px-[51px] bg-white shadow-lg rounded-[24px]">
            {!isSubmitted ? ( 
                <form onSubmit={handleSubmit}>
                    <h3 className="gradient-text text-[24px] pb-[23px] font-[500] leading-[36px] border-b-[1px] mb-6 text-center">First step in unlocking exclusive access...</h3>

                    <div className="mb-4">
                        <p className="text-[14px] font-[500] text-[#111827] leading-[22.4px] mb-4 ">Who are you?<span className='text-[#E03137] font-[500] text-[14px] ml-[3px]' >*</span></p>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="checkbox"
                                name="userType"
                                value="Brand"
                                checked={formData.userType === 'Brand'}
                                onChange={handleChange}
                                className="ml-[30px] form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-[14px] font-[500] text-[#111827] leading-[22.4px] ">I am a Brand</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="userType"
                                value="Content Creator"
                                checked={formData.userType === 'Content Creator'}
                                onChange={handleChange}
                                className="ml-[30px] form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-[14px] font-[500] text-[#111827] leading-[22.4px]">I am a Content Creator</span>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-[14px] font-[500] text-[#111827] leading-[22.4px]" htmlFor="name">
                            Name <span className='text-[#E03137] font-[500] text-[14px] ml-[3px]' >*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-[14px] font-[500] text-[#111827] leading-[22.4px]" htmlFor="websiteUrl">
                            Website or Social Media URL<span className='text-[#E03137] font-[500] text-[14px] ml-[3px]' >*</span>
                        </label>
                        <input
                            type="text"
                            id="websiteUrl"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your website or social media URL"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-[14px] font-[500] text-[#111827] leading-[22.4px]" htmlFor="whatsappNumber">
                            WhatsApp Contact Number<span className='text-[#E03137] font-[500] text-[14px] ml-[3px]' >*</span>
                        </label>
                        <div className="flex items-center">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleChange}
                                className=" border bg-white rounded-tl-lg rounded-bl-lg px-3 py-[9.5px]"
                            >
                                {countries.map((country, index) => (
                                    <option key={index} value={country.code}>
                                        {country.name} ({country.code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="whatsappNumber"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-tr-lg rounded-br-lg "
                                placeholder="Enter your WhatsApp number"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-[14px] font-[500] text-[#111827] leading-[22.4px]" htmlFor="email">
                            Email<span className='text-[#E03137] font-[500] text-[14px] ml-[3px]' >*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {loading ? "In Progress" : "Join waiting list"}
                        {loading && <span className="animate-ping">...</span>}
                    </button>
                </form>
            ) : (
                <div className="text-center flex flex-col items-center ">
                    <h2 className="text-[32px] font-500 border-b-[1px] pb-[25px] gradient-text sm:w-[669px] ">Thank You!</h2>
                    <div className=" flex flex-col w-[150px] mt-[36px] border-[3px] mb-[30px] text-[#0DD639] text-[50px] border-[#0DD639] rounded-[100%] justify-center h-[150px] items-center "><RiCheckDoubleFill /></div>
                    <div className="flex flex-col">
                        <p className="text-[24px] font-[500] leading-[36px] text-black  ">You successfully joined the waitlist.</p>
                        <p className="text-[24px] font-[500] leading-[36px] max-w-[500px] text-[#AFAFAF] ">Invitations will be sent within 2 weeks. Please check your inbox and junk folder regularly.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JoinWaitingListForm;

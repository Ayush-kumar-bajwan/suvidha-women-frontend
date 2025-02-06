import Footer from "../Components/Footer1";
import Header from "../Components/Header";
import { IoMdArrowDropright } from "react-icons/io";

const Aboutpage=()=>{
    return (
        <div>
            <Header />
            <div>
                <img className="h-[50vh] mx-auto mt-20 rounded-2xl " src="https://s3-alpha-sig.figma.com/img/6566/8561/9f2b216eb7149431b9e36b447c35ce4d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JEkdOKRz4QG4fujxZB9afNAiPyxL5hVxf4TuzXpqUfw0~vOxHrKuxkNha4I6wFtu~PWuyew0YGDPiM9qQLDHO9pdXESiD3RRVYZPd6JDyWm0EvIhfSnjJWhu~Ud5AKUCCxOM0r9YprHpkCVHUK5pDuu6nBc5-yRcaTUPMGxG0yNUP~GK7LldoegPXG2B0-IN2uQbcV87lB2aFzYltqy7Y09MmFwUzdgESXibqV~oWlEu2JaCHgJ3FHOVRtOH8KWl~XfWwAGs28Hu-q2zw1z42rLmIdVW22oSxJMzQB2zlL~2YA40Fh3Wjg2i7d~UNibL7rNvAyq8ZU2qhdj3ZAdPWQ__" alt="AboutUs" />
            </div>
            <div className="w-[60%] mx-auto">
                <h1 className="text-4xl text-[#DE3163] text-center my-10 font-bold">Our Story</h1>
                <h1 className="text-lg ">Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future.</h1>
            </div>
            <div className="w-[60%] mx-auto">
                <h1 className="text-4xl text-[#DE3163] text-center my-10 font-bold">Our Reach and Impact</h1>
                <h1 className="text-lg">Suvidha is currently active in multiple rural districts, conducting: <br /><br />
                <IoMdArrowDropright className="inline text-3xl"/>Regular workshops & community health programs in villages. <br />
                <IoMdArrowDropright className="inline text-3xl"/>Collaborations with local doctors & NGOs to provide medical assistance. <br />
                <IoMdArrowDropright className="inline text-3xl"/>Engagements with schools & self-help groups to educate young girls and women.</h1>
            </div>
            <Footer />
        </div>
    );
}
export default Aboutpage
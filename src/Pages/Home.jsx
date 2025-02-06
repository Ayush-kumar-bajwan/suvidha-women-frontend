import { IoMdArrowDropright } from "react-icons/io";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Homepage=()=>{
    return (
        <div>
              <Header />
                <div className="flex w-full justify-around mt-5">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold leading-18 bg-[#DE3163] inline-block text-transparent bg-clip-text">
                      Empowering the <br />
                      Rural Women for a<br /> Healthier Tomorrow
                    </h1>
                    <button className="mt-5 hover:animate-none animate-bounce text-2xl font-semibold h-[10vh] bg-[#DE3163] rounded-2xl text-white ">
                      Register For Workshop
                    </button>
                  </div>
                  <div>
                    <img
                      className="h-[50vh] w-[80vh] rounded-3xl"
                      src="https://s3-alpha-sig.figma.com/img/ae33/22d7/dc557d7ae429220cce730b9a54f5e0f4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BoENqnlR2Ag1DrzqjncZbcf4fDRyUD61IOq-iokj6bJnjWGLoPg0vXXl9Mb-hYOeI6vDp1d6tcPwv~s~-sRwfsVl8JZuiW7j8S70phH9hbvdaZH-OYcEhVnBglx-U1Lm7WL7Jmwz497WfRNJWqM7WZcrzjNkLOGgMqvpLtCN03VOhoMGrMZ-rMGElCgQ3cE3pdeQcEEqyEBdkS6ogBT0LxCjbMbBTAi9GY0NAzak9Spb7y~0-HNv~YTr7l9G6ao4YdkyOuJIE06fhrfXHw5szLwOscZVC0L0EAIKQMYFuKDBV5XRdtV79VX3ciLpHBkANfdkKIqgBBmJOqrm1sLO7g__"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="my-20">
                  <div className="flex flex-col justify-center mx-auto items-center gap-10 w-[80%]">
                    <h1 className="text-4xl font-semibold text-[#DE3163]">Introduction - About Suvidha Womens Health & Wellness Initiative</h1>
                    <h1 className="text-xl"><IoMdArrowDropright className="inline text-3xl"/>  At Suvidha Womens Health & Wellness Initiative, we are dedicated to empowering rural women by providing access to essential health education, wellness resources, and community support. <br />
                    <IoMdArrowDropright className="inline text-3xl"/>  Millions of women in rural areas face challenges like limited healthcare access, lack of awareness, and social taboos around women’s health. Suvidha was founded to break these barriers and create a safe, supportive space where women can learn, grow, and take control of their well-being. <br />
                    <IoMdArrowDropright className="inline text-3xl"/>  Through workshops, health camps, and educational resources, we aim to spread awareness about menstrual hygiene, pregnancy care, birth control, and overall well-being—ensuring that every woman, no matter where she lives, has the knowledge and support she needs.
                    </h1>
                  </div> 
                </div>
                <div className="mb-20">
                  <div className="flex flex-col justify-center mx-auto items-center gap-10 w-[80%]">
                    <h1 className="text-4xl font-semibold text-[#DE3163]">🎯 Our Mission </h1>
                    <h1 className="text-xl">  Our mission is to empower rural women with knowledge and access to healthcare so they can lead healthier, more confident lives. 
                    To bridge the healthcare gap for women in rural regions by spreading awareness, providing education, and facilitating access to necessary health and wellness resources. We strive to bring lasting change by engaging with communities, advocating for better healthcare access, and ensuring that every woman receives the support she needs.
                    <br /><br />
                      We strive to : <br /><br />
                      ✅Educate: Provide accessible, easy-to-understand health information. <br />
                      ✅ Empower: Encourage women to make informed choices about their health. <br />
                      ✅ Support: Build a strong community where women uplift and help each other.
                    </h1>
                  </div>
                </div>
                <Footer />
              </div>
    );
}
export default Homepage
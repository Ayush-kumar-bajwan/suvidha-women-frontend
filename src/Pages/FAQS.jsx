import Footer from "../Components/Footer1";
import Header from "../Components/Header";
import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const FAQS = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="h-[40vh] mx-auto"
          src="https://s3-alpha-sig.figma.com/img/011b/744a/b70edfefee4463d228bde10e424ed1d8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=reWDXbJ9SKtstbLlzPdDO7Mj4C6JSSp3HFcfyWry~a~vaw74Le9bCSsoCr-l7fHNeBCz8LEcjFgYcNPbvU9OHvDfuBP32ngaQ7SFJTOAx~71rY3SXZjEb5zzOeGn2WJNKwb1~8RtTSh0-abIceFxBPlodL1yWgyoMaqOMcuhVzQ8sBZDEeTzNJO4SdNWuvgmK6pIsasJZghXNxz4m4J-btq12qeWM5I7UBaAFntqnF-lprMDlhjXkF6E438L~thbX2ImwkaFGlrzciZNBQObc9qMP7XAYA9egg6WaP34uV~h~3YR6Cn2-px1KkOeKqQp90dsnxc793yOzmftYzLWnA__"
          alt="FAQs"
        />
      </div>
      <div className="w-[70%]  mx-auto">
        <div>
          <h1 className="text-3xl text-[#DE3163] mb-10 font-semibold">
            Frequently asked Questions(FAQ’s)-Donation to Suvidha Foundation
          </h1>

          <div>
            <Accordion
            className="mb-5"
              expanded={expanded}
              onChange={handleExpansion}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                expanded
                  ? {
                      [`& .${accordionClasses.region}`]: {
                        height: "auto",
                      },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: "block",
                      },
                    }
                  : {
                      [`& .${accordionClasses.region}`]: {
                        height: 0,
                      },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                <span className="text-xl font-normal" >Why should I donate to Suvidha Foundation ?</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Donating to Suvidha Foundation empowers rural women with essential healthcare, wellness programs, and education, creating a lasting impact on their lives.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                <span className="text-xl font-normal">How will be my donation utilized ?</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Your donation will be used to fund health workshops, medical resources, menstrual hygiene programs, and maternal care initiatives for rural women, ensuring direct community impact.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                <span className="text-xl font-normal">Is my donation tax-deductible ?</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Yes, Suvidha Foundation is a registered initiative, and your donation may be eligible for tax deductions as per government regulations.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                <span className="text-xl font-normal">Are there different ways to donate ?</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Yes, you can donate online via our website, bank transfer, UPI, or in-kind contributions such as medical supplies and wellness kits.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                <span className="text-xl font-normal">Can I get information on the impact of my donation ?</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Yes, we provide regular updates, reports, and success stories to show how your donation is making a difference in the lives of rural women.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FAQS;

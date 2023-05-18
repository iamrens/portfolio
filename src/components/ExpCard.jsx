import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { experienceDetails } from "../data";

const ExpCard = () => {
  const { themeColor, theme } = useContext(ThemeContext);

  return (
    <div className="pt-5 pb-[50px]">
      <VerticalTimeline lineColor={themeColor}>
        {experienceDetails.map(({title, where, when, icon, description}, index) => (
            <VerticalTimelineElement
                key={index}
                contentStyle={{
                    background: theme === "dark" ? "#404040" : "#d1d5db",
                    // color: theme === "dark" ? "#E0E0E0" : "#666666",
                }}
                contentArrowStyle={{ borderRight: `10px solid ${theme === "dark" ? "#262626" : "#d1d5db"}` }}
                date={when}
                iconStyle={{ 
                    background: themeColor,
                    color: 'white',
                }}
                icon={icon}
            >
                <h1 className="text-titleLight dark:text-titleDark font-poppins font-bold text-[20px] sm:text-[24px]">
                    {title}
                </h1>
                <h1 className="text-gray-500 dark:text-neutral-500 font-open text-[16px] font-semibold">
                    {where}
                </h1>
                
                <ul className="list-disc ml-8 space-y-2 mt-5">
                    {description.map(({title}, index) => (
                        <li key={index} className="text-neutral-800 dark:text-neutral-300 tracking-wider font-poppins text-[14px]">
                            {title}
                        </li>    
                    ))}
                </ul>
            </VerticalTimelineElement>
        ))}
        
      </VerticalTimeline>
    </div>
  );
};

export default ExpCard;

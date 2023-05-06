import * as dateFns from "date-fns";

export const schedule = {
  Monday: [
    {
      className: "Insanity Bootcamp",
      time: "5:00am",
      instructor: "Juanita",
      men: true,
    },
    {
      className: "Spin",
      time: "5:30pm",
      instructor: "Brandi",
      men: true,
    },
    {
      className: "Xtreme Hip-Hop",
      time: "5:30pm",
      instructor: "LaNique",
      men: true,
    },
    {
      className: "Funk Fusion",
      time: "6:30pm",
      instructor: "Chanda",
      men: false,
    },
  ],
  Tuesday: [
    {
      className: "Core + More",
      time: "6:00pm",
      instructor: "Chanda",
      men: false,
    },
    {
      className: "Kickbox & Step",
      time: "6:30pm",
      instructor: "Chanda",
      men: false,
    },
  ],
  Wednesday: [
    {
      className: "Insanity Bootcamp",
      time: "5:00am",
      instructor: "Juanita",
      men: true,
    },
    {
      className: "Power Shred",
      time: "6:00pm",
      instructor: "Chanda",
      men: false,
    },
    {
      className: "Zumba Fitness",
      time: "6:30pm",
      instructor: "Maria",
      men: true,
    },
  ],
  Thursday: [
    {
      className: "Zumba & Shred",
      time: "10:00am",
      instructor: "Chanda",
      men: false,
    },
    {
      className: "Spin",
      time: "5:30pm",
      instructor: "Brandi",
      men: true,
    },
    {
      className: "Xtreme Hip-Hop Step",
      time: "6:00pm",
      instructor: "LaNique",
      men: false,
    },
    {
      className: "Yoga",
      time: "7:00pm",
      instructor: "Kiesha",
      men: true,
    },
  ],
  Friday: [
    {
      className: "Insanity Bootcamp",
      time: "5:00am",
      instructor: "Juanita",
      men: true,
    },
  ],
};

type Rotating = { instructor: string; instructorDate: string };

const SatSchedule: Rotating[] = [
  {
    instructor: "Maria G. - Zumba",
    instructorDate: "5/6",
  },
  {
    instructor: "LaNique - Xtreme Hip-Hop",
    instructorDate: "5/13",
  },
  {
    instructor: "Chanda - Zumba",
    instructorDate: "5/20",
  },
  {
    instructor: "Closed",
    instructorDate: "5/27",
  },
];

const ClassBoxList = () => {
  return (
    <div className="class-container column-start">
      <div className="class-box-wrapper column-start">
        {Object.entries(schedule).map(([key, value]) => {
          return (
            <div className="class-box-container column-start" key={key}>
              <h1 className="header-small">{key}</h1>
              {value.map((x, index) => {
                return (
                  <ClassBox
                    key={index}
                    className={x.className}
                    time={x.time}
                    instructor={x.instructor}
                    men={x.men}
                  />
                );
              })}
            </div>
          );
        })}
        <div className="class-box-container column-start">
          <h1 className="header-small">Saturday</h1>
          <SatClassBox
            className="Zumba Fitness/Xtreme Hip-Hop Step"
            time="9:15am"
            instructors={SatSchedule}
          />
        </div>
      </div>
    </div>
  );
};

interface ClassBoxProps {
  className: string;
  time: string | null;
  instructor: string | null;
  men?: boolean;
}

const ClassBox = ({ className, time, instructor, men }: ClassBoxProps) => {
  return (
    <div className="class-box column-start">
      <h1 className="class-name para-med">
        {className ? className : ""} {time ? " - " + time : ""}
        {instructor ? " - " + instructor : ""}
      </h1>
      {men ? <h2 className="para-small men">**Men may attend</h2> : null}
      <br />
    </div>
  );
};

interface SatClassBoxProps {
  className: string;
  time: string;
  instructors: Rotating[];
}

const SatClassBox = ({ className, time, instructors }: SatClassBoxProps) => {
  return (
    <div className="class-box column-start">
      <h1 className="class-name para-med">
        {className} - {time}
      </h1>
      <div className="class-dates column-start">
        {instructors.map((x, index) => {
          return (
            <h1 className="class-instructor para-med" key={index}>
              {x.instructor} - {x.instructorDate}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

const month = dateFns.format(new Date(), "LLLL");

const Calendar = () => {
  return (
    <div className="calendar-box container column-start">
      <div className="calendar-header column-start">
        <h1 className="header-large">{month} group fitness schedule:</h1>
        <br />
        {/* <p className="para-med monthly-msg">
          Don’t walk, MARCH to CMA and try this month’s classes!!
        </p> */}
        <br />
        <br />
        <h1 className="header-med monthly-msg">Special events:</h1>
        <p className="para-med monthly-msg">No staff/class 5/27 - 5/29</p>
        <p className="para-med monthly-msg">No Spin 5/17 - 5/21</p>
        <p className="para-med monthly-msg">No Xtreme Hip-Hop 5/21 - 6/3</p>
      </div>

      <ClassBoxList />
    </div>
  );
};
export default Calendar;

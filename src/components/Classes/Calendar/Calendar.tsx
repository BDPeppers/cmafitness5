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
      className: "Booty Blast",
      time: "6:00pm",
      instructor: "Chanda",
      men: false,
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
      className: "Zumba Fitness",
      time: "9:15am",
      instructor: "Yoana",
      men: false,
    },
    {
      className: "Yoga",
      time: "10:15am",
      instructor: "Kiesha",
      men: false,
    },
    { className: "Spin", time: "5:30pm", instructor: "Brandi", men: true },
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
      instructor: "Deana",
      men: false,
    },
    {
      className: "Zumba Fitness",
      time: "6:30pm",
      instructor: "Maria G.",
      men: false,
    },
  ],
  Thursday: [
    {
      className: "Zumba Fitness",
      time: "9:15am",
      instructor: "Chanda",
      men: false,
    },
    {
      className: "Rip & Ride",
      time: "5:30pm",
      instructor: "Brandi",
      men: true,
    },
    {
      className: "Yoga",
      time: "6:30pm",
      instructor: "Tori",
      men: false,
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
    instructor: "Yoana",
    instructorDate: "10/1",
  },
  {
    instructor: "Chanda",
    instructorDate: "10/8",
  },
  {
    instructor: "Shy",
    instructorDate: "10/15",
  },
  {
    instructor: "Maria",
    instructorDate: "10/22",
  },
  {
    instructor: "Yoana",
    instructorDate: "10/29",
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
            className="Zumba Fitness"
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
        <h1 className="header-large">{month} group fitness schedule</h1>
        <br />
        <h1 className="para-med monthly-msg">
          The schedule is filling back up, now with SPIN and YOGA!! Come support
          our new instructors and keep working with your favs!!
        </h1>
      </div>

      <ClassBoxList />
    </div>
  );
};
export default Calendar;

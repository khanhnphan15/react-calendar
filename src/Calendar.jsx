import "./Calendar.css";

// export default function Calendar({ days, dates }) {
//   let dayEls = dates.map((d) => {
//     let dayIndex = d % 7 === 0 ? days.length : (d % 7);
//     return <div className="calendar-day">{days[dayIndex - 1].name}</div>
//   });
//   return <div className="calendar">{dayEls}</div>;
// }
export default function Calendar({ days, dates }) {
  let cellEls = dates.map((date, index) => {
    let dayIndex = date % 7 === 0 ? days.length : (date % 7);
    return (
      <div key={index} className="calendar-day">
        <div className="day">{days[dayIndex - 1].name}</div>
        <div className="date">{date}</div>
      </div>
    );
  });

  return <div className="calendar">{cellEls}</div>;
}

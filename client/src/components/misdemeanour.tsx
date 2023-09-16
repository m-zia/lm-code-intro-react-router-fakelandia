import React, { useEffect, useState } from "react";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";

const TableHeader: React.FC = () => {
  return (
    <tr>
      <th>Citizen ID</th>
      <th>Date</th>
      <th>Misdemeanour</th>
      <th>Punishment Idea</th>
    </tr>
  );
};

const MisdemeanourDetail = (props: { misdemeanour: MisdemeanourKind }) => {
  let detail: string = '';
  switch (props.misdemeanour) {
    case "united":
      detail = "Supporting Manchester United 😈";
      break;
    case "vegetables":
      detail = "Not Eating Your Vegetables 🥗";
      break;
    case "lift":
      detail = "Speaking in a Lift 🗣";
      break;
    case "rudeness":
      detail = "Mild Public Rudeness 🤪";
      break;
  }
  return (
    <td>{detail}</td>
  )
};

const TableRow = ({ citizenId, misdemeanour, date }: Misdemeanour) => {
  return (
    <tr>
      <td>{citizenId}</td>
      <td>{date}</td>
      <MisdemeanourDetail misdemeanour={misdemeanour} />
      <td><img src='https://picsum.photos/40/40' /></td>
    </tr>
  );
};

export const Misdemeanours: React.FC = () => {

  const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
  const getMisdemeanours = async (number : number) => {
    const response = await fetch(`http://localhost:8080/api/misdemeanours/${number}`);
    const data = await response.json();
    if (data.hasOwnProperty('misdemeanours')) {
      setMisdemeanours(data.misdemeanours);
    }
  }
  useEffect(() => {
    getMisdemeanours(5);
  }, []);

  return (
    <article className="body">
      <pre>{/*JSON.stringify(misdemeanours, null, 2)*/}</pre>
      <table>
        <TableHeader />
        {misdemeanours.map((misdemeanour) => {
          return <TableRow citizenId={misdemeanour.citizenId} misdemeanour={misdemeanour.misdemeanour} date={misdemeanour.date} />
        })}
      </table>
    </article>
  );
};
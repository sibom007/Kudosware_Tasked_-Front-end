import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

type Iprops = {
  name: string;
  email: string;
  address: string;
  number: string;
  collageName: string;
  collageAddress: string;
  resume: string;
};

const Dashbord = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://kudosware-tasked-backend.vercel.app/api/candidates")
      .then((Response) => {
        setdata(Response.data.data);
      });
  }, []);

  console.log(data);

  return (
    <div className="px-10 py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Collage Name</TableHead>
            <TableHead>Collage Address</TableHead>
            <TableHead>Resume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: Iprops) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.number}</TableCell>
              <TableCell>{item.collageName}</TableCell>
              <TableCell>{item.collageAddress}</TableCell>
              <TableCell>
                <a
                  href={`${item.resume}`}
                  className="bg-cyan-500 p-2 rounded-xl">
                  Open
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashbord;

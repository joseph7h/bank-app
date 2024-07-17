import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from "axios";
import { useEffect, useState } from "react";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const TableDatas = (data: any) => {
  return (
    <TableRow key={data.transId}>
      <TableCell>{data.transDatetime}</TableCell>
      <TableCell>{data.transDescription}</TableCell>
      <TableCell>{data.transType}</TableCell>
      <TableCell align="right">{data.transAmount}</TableCell>
    </TableRow>
  );
};

export default function Transactions() {
  const url = "http://localhost:8000/users";

  // let { index } = useParams();

  const [transaction, setTransaction] = useState([]);

  const transactions = async () => {
    const datas = await axios.get(url);
    const userTransactions = datas.data[0].customerTransactions;
    setTransaction(userTransactions);
  };

  useEffect(() => {
    transactions();
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map((data) => (
            <TableDatas data={data}/>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}

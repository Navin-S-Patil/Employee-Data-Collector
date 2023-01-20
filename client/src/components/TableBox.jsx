import React from 'react'
import styled from 'styled-components'



const Table = styled.table`
  color: #f2f2f2;
  background-color: #222831;
  font-size: 1rem;
  text-align: left;
  margin: 2rem auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
  width: 50%;
`;

const TableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: #f2f2f2;
  } */
  color: #222831;
  background-color: #eeeeee;
  font-size: 1.2rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const TableHeadling = styled.th`
  padding: 0.4rem 0.4rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 1.5rem;
`;

const TableNormalRow = styled.tr`
  color: #eeeeee;
  background-color: #222831;
  font-size: 1.2rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const TableData = styled.td`
  padding: 0.4rem 0.4rem;
  text-align: center;
  margin: auto auto;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  font-size: 1.4rem;
`;

function TableBox(props) {
  return (
    <Table>
          <TableRow>
            <TableHeadling style={{ borderRadius: "0.3rem 0rem 0rem 0.3rem" }}>
              Emoloyee ID
            </TableHeadling>
            <TableHeadling style={{ borderRadius: "0rem 0rem 0rem 0rem" }}>
              Name
            </TableHeadling>
            <TableHeadling style={{ borderRadius: "0rem 0.3rem 0.3rem 0rem" }}>
              Mobile No.
            </TableHeadling>
          </TableRow>

          {props.data.map((item) => {
            return (
              <TableNormalRow>
                <TableData>{item.employeeID}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.number}</TableData>
              </TableNormalRow>
            );
          })}
        </Table>
  )
}

export default TableBox;
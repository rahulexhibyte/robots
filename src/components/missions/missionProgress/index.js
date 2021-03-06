import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
export function MissionProgress({ progresses }) {
  return (
    <div>
      <h3>Mission Progress</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {progresses.map((progress, index) => {
              console.log(progress);
              const bgColor =
                progress.status === "success"
                  ? "green"
                  : progress.status === "warning"
                  ? "yellow"
                  : "red";
              return (
                <TableRow key={index} style={{ backgroundColor: `${bgColor}` }}>
                  <TableCell>{progress.time}</TableCell>
                  <TableCell>{progress.action}</TableCell>
                  <TableCell>{progress.result}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

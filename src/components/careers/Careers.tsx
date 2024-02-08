import React from "react";
import Navbar from "../Navbar/Navbar";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"

  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../@/components/ui/table"


function Careers(){


    type Payment = {
        id: string
        amount: number
        status: "pending" | "processing" | "success" | "failed"
        email: string
      }
      
       const payments: Payment[] = [
        {
          id: "728ed52f",
          amount: 100,
          status: "pending",
          email: "m@example.com",
        },
        {
          id: "489e1d42",
          amount: 125,
          status: "processing",
          email: "example@gmail.com",
        },
        // ...
      ]
      
      const columns: ColumnDef<Payment>[] = [
        {
          accessorKey: "status",
          header: "Status",
        },
        {
          accessorKey: "email",
          header: "Email",
        },
        {
          accessorKey: "amount",
          header: "Amount",
        },
      ]

     


    return(
        <div>
                  <Navbar color="black" button_color="#507A56" button_text="white" />

<div className="flex flex-col">
    <h1 className="text-xl">We’re Hiring!</h1>
    <h1 className="font-medium text-4xl">Open Positions</h1>

</div>
        </div>
    );
}

export default Careers;
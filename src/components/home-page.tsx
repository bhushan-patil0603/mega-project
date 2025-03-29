"use client";

import { Toaster } from "@/components/ui/sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Member {
  id: string;
  name?: string;
  reg_no: number | string;
  start_date?: string;
  end_date?: string;
  token: number;
  createdAt?: string;
}

export default function HomePage() {
  const [apiData, setApiData] = useState<Member[]>([]);
  const [isOnline, setIsOnline] = useState<boolean>(true); // Default to true

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOnline(navigator.onLine);

      const handleOnline = () => {
        setIsOnline(true);
        toast("Back to Online!");
      };

      const handleOffline = () => {
        setIsOnline(false);
        toast("Oops! You are Offline!");
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await fetch(
        "https://pm-backend-au7h.onrender.com/members"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Member[] = await response.json();
      setApiData(data.sort((a, b) => Number(a.reg_no) - Number(b.reg_no)));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getData();
  }, []);

  // Reduce token logic
  const reduceToken = async (id: string) => {
    const member = apiData.find((obj) => obj.id === id);

    if (!member || member.token <= 0) {
      toast.error("Out of tokens");
      return;
    }

    const result = confirm(
      `Do you want to reduce token of register number ${member.reg_no} ${member.name}`
    );
    if (!result) return;

    try {
      const response = await fetch(
        "https://pm-backend-au7h.onrender.com/update_token",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: member.id, token: member.token }),
        }
      );

      if (response.ok) {
        toast.success("Token reduced successfully!");
        getData();
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || "Error reducing token.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="p-10">
      {isOnline ? (
        <div>
          <Link href={"/newuser"}>
            <button
              type="button"
              className="mb-5 rounded-md bg-blue-700 p-2 font-medium text-black hover:bg-blue-800 active:bg-blue-900"
            >
              Add new member +
            </button>
          </Link>

          <Table className="border border-accent">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">
                  Reg. No.
                </TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Start Date</TableHead>
                <TableHead className="text-center">End Date</TableHead>
                <TableHead className="text-center">Token</TableHead>
                <TableHead className="text-center">
                  Reduce Lunch Token
                </TableHead>
                <TableHead className="text-center">
                  Reduce Dinner Token
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-black">
              {apiData.map((row) => (
                <TableRow
                  key={row.id}
                  className={
                    row.token < 1
                      ? "bg-red-500 hover:bg-red-500"
                      : row.token < 5
                        ? "bg-orange-500 hover:bg-orange-500"
                        : "bg-white hover:bg-gray-100"
                  }
                >
                  <TableCell className="text-center font-medium">
                    {row.reg_no}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {row.name || "N/A"}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.start_date || "N/A"}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.end_date || "N/A"}
                  </TableCell>
                  <TableCell className="text-center">{row.token}</TableCell>
                  <TableCell className="text-center">
                    <button
                      className="rounded-md bg-blue-700 p-2 font-semibold text-white hover:bg-blue-800 active:bg-blue-900"
                      type="button"
                      onClick={() => reduceToken(row.id)}
                    >
                      Lunch
                    </button>
                  </TableCell>
                  <TableCell className="text-center">
                    <button
                      className="rounded-md bg-blue-700 p-2 font-semibold text-white hover:bg-blue-800 active:bg-blue-900"
                      type="button"
                      onClick={() => reduceToken(row.id)}
                    >
                      Dinner
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center">
          <p>🔴 You Are Offline! Connect To Internet...</p>
        </div>
      )}
      <Toaster position="top-center" />
    </div>
  );
}

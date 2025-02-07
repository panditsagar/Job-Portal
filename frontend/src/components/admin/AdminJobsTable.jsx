import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Delete, DeleteIcon, Eye, MoreHorizontal } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { setDeleteJob } from "@/redux/jobSlice";

const AdminJobsTable = () => {
  const { allAdminJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const res = await axios.delete(`${JOB_API_END_POINT}/delete/${jobId}`,{withCredentials:true});
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setDeleteJob(jobId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs?.map((job) => (
            <tr>
              <TableCell>{job?.company?.name}</TableCell>
              <TableCell>{job?.title}</TableCell>
              <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    <div
                       onClick={() => handleDeleteJob(job._id)} 
                      className="flex items-center gap-2 w-fit cursor-pointer"
                    >
                      <Delete className="w-4" />
                      <span>Delete</span>
                    </div>
                    <div
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                    >
                      <Eye className="w-4" />
                      <span>Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.res.data.message);
    }finally{
      setLoading(false)
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center  ">
                <Label htmlFor="name" className="text-left">
                  Name
                </Label>
                <Input
                  id="name"
                  name="fullname"
                  type="text"
                  className="col-span-3"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center ">
                <Label htmlFor="email" className="text-left">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="col-span-3"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center ">
                <Label htmlFor="number" className="text-left">
                  Number
                </Label>
                <Input
                  id="number"
                  name="phoneNumber"
                  className="col-span-3"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center  ">
                <Label htmlFor="bio" className="text-left">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  className="col-span-3"
                  value={input.bio}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center  ">
                <Label htmlFor="skills" className="text-left">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  className="col-span-3"
                  value={input.skills}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center  ">
                <Label htmlFor="file" className="text-left">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  {" "}
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
                </Button>
              ) : (
                <Button className="w-full my-4">Update</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import Demo from "./Demo";
import { FieldValues } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { DialogTitle } from "@radix-ui/react-dialog";

const Hr = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handlelogin = async (data: FieldValues) => {
    try {
      const res = await axios.post(`${API_URL}Login`, data);

      if (res.data.data && res.data.data.email) {
        localStorage.setItem("userEmail", res.data.data.email);
        toast.success("Login successfully");
        navigate("/dashbord");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <div className="flex justify-end items-end h-full w-full mr-20">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-cyan-500 p-3 rounded-2xl">Only for HR</div>
        </DialogTrigger>
        <DialogContent className="bg-white/80">
          <DialogTitle>Only for Hr Login Please</DialogTitle>
          <CForm resetAfterSubmit={false} onSubmit={handlelogin}>
            <CInput name="email" type="text" placeholder="Email" />
            <CInput name="hashpassword" type="text" placeholder="Password" />

            <div className="flex items-center">
              <div className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-xl w-14 mr-2">
                <Demo />
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-xl ">
                Login
              </button>
            </div>
          </CForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hr;

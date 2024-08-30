import { storage } from "@/lib/firebase";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import CSelectField from "@/shared/CSelectField";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { toast } from "sonner";

import { v4 } from "uuid";
import Hr from "../HR/Hr";
import axios from "axios";

const SignUp = () => {
  const [file, setFile] = useState(String);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const imageRef = ref(storage, `image/${file?.name + v4()}`);
    uploadBytes(imageRef, file as File)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setFile(url);
          toast.success("File Uploaded");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    const Info = {
      name: data.name,
      email: data.Email,
      number: data.number,
      address: data.address,
      collageName: data.collageName,
      collageAddress: data.collageAddress,
      resume: file,
    };
    console.log(Info);
    try {
      const res = await axios.post(`${API}register`, Info);

      if (res.status === 201) {
        toast.success(res.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-damion text-white/80">
      <div
        style={{ borderRadius: "10px" }}
        className=" bg-cyan-800 rounded-lg shadow-lg w-[50vw] p-10 mt-5 md:mt-20 ">
        <div className="text-center mb-4 md:mb-6">
          <h1 className="text-xl md:text-3xl">Sign Up</h1>
          <p className="text-sm md:text-xl">
            Sign up with the given Information
          </p>
        </div>

        <div className="space-x-2">
          <CForm onSubmit={handleSubmit} resetAfterSubmit={true}>
            <div className="md:flex space-y-2.5 md:space-y-0 gap-2">
              <CInput name="name" placeholder="Name" />
              <CInput name="Email" placeholder="Email" />
            </div>
            <div className="md:flex space-y-2.5 md:space-y-0 gap-2">
              <CInput name="number" placeholder="Phone Number" label="Name" />
              <CInput name="address" placeholder="Address" label="Name" />
            </div>
            <div className="md:flex space-y-2.5 md:space-y-0 gap-2">
              <CInput name="collageName" placeholder="Collage Name" />
              <CInput
                name="collageAddress"
                placeholder="Collage Address"
                label="Name"
              />
            </div>
            <div className="md:flex space-y-2.5 md:space-y-0 gap-2">
              <CSelectField
                items={["Yes", "No"]}
                className="bg-transparent w-full outline-none border-2 border-white/90"
                name="isGraduated"
              />
              <div className="flex justify-center items-center gap-2">
                {" "}
                <label htmlFor="">Resume</label>
                <input
                  type="file"
                  className=" border-2 p-1 w-[18.2vw]"
                  placeholder="Resume"
                  style={{
                    borderRadius: "7px ",
                  }}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                style={{ borderRadius: "7px" }}
                className="bg-cyan-400 duration-200 hover:bg-cyan-500 text-white w-full p-2">
                Submit
              </button>
            </div>
          </CForm>
        </div>
      </div>
      <Hr />
    </div>
  );
};
export default SignUp;

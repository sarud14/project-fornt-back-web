import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const hdlSubmit = async (value) => {
    await new Promise ((resolve)=> setTimeout(resolve, 2000) )
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      console.log(res);
      createAlert("success", res.data.msg);
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.msg);
    }
  };

  return (
    <div className="flex h-screen justify-end pr-5 pt-5">
      <form onSubmit={handleSubmit(hdlSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-8 flex flex-col gap-4">
          <legend className="fieldset-legend text-2xl">Register</legend>
          <FormInput register={register} name="email" />
          <FormInput register={register} name="name" />
          <FormInput register={register} name="password" />
          <FormInput register={register} name="confirmPassword" />
          <button className="btn btn-neutral mt-4">
            {
            isSubmitting ? "Loading" : "Register"
            }
            </button>
        </fieldset>
      </form>
    </div>
  );
}

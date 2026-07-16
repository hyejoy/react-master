import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInputs {
  firstName: string;
  email: string;
  age: number;
}

export default function SmartForm() {
  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(" 최종 데이터 : ", data);
  };
  return (
    <div>
      <h1>SmartForm Component</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="성함" {...register("firstName")} />
        <input placeholder="이메일" {...register("email")} />
        <input placeholder="나이" {...register("age")} />
        <button type="submit"> 데이터 제출</button>
      </form>
    </div>
  );
}

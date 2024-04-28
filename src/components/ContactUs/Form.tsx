import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx";
import emailjs from "@emailjs/browser";

import Input from "@/components/ContactUs/Field/Input";
import Textarea from "@/components/ContactUs/Field/Textarea";
import SubmitButton from "@/components/ContactUs/Field/SubmitButton";
import FormMessage from "@/components/ContactUs/FormMessage";

import FormSchema from "@/components/ContactUs/data/schema";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const eService: string = import.meta.env.VITE_EMAIL_SERVICE;
const eTemplate: string = import.meta.env.VITE_EMAIL_TEMPLATE;
const ePublicKey: string = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

function ContactUsForm() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error">(
    "success",
  );
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [seccussSending, setSeccussSending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(FormSchema),
  });

  const successSubmit = () => {
    setSubmitStatus("success");
    setSubmitMessage("Message was sent successfully!");
    setSeccussSending(true);
  };

  const errorSubmit = () => {
    setSubmitStatus("error");
    setSubmitMessage("Something goes wrong, try again!");
  };

  const onSubmit: SubmitHandler<IFormData> = (_, event) => {
    setShowLoader(true);

    emailjs
      .sendForm(eService, eTemplate, event?.target, { publicKey: ePublicKey })
      .then(successSubmit, errorSubmit)
      .finally(() => {
        reset();
        setShowMessage(true);
        setShowLoader(false);
      });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (showMessage) {
      timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMessage]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "p-5 rounded-2xl border-2 border-white/50 bg-mr-main/80",
          "flex flex-col gap-5 min-w-full",
        )}
      >
        <Input
          inputName="name"
          inputLabel="Your name"
          placeholder="John Doe"
          register={register}
          errors={errors}
        />

        <Input
          inputName="email"
          inputLabel="Email"
          register={register}
          errors={errors}
        />

        <Input
          inputName="phone"
          inputLabel="Phone"
          register={register}
          errors={errors}
        />

        <Textarea
          inputName="message"
          inputLabel="Your message"
          rows={4}
          register={register}
          errors={errors}
        />

        <SubmitButton
          text="Send"
          loaderText="Sending..."
          loading={showLoader}
          success={seccussSending}
        />
      </form>

      <FormMessage
        status={submitStatus}
        message={submitMessage}
        show={showMessage}
      />
    </>
  );
}

export default ContactUsForm;

"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const contactFormSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

export default function FormSection() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  async function handleContactFormSubmit(
    values: z.infer<typeof contactFormSchema>
  ) {
    console.log("Contact Form", values);
    form.reset();
    try {
      await toast.promise(
        fetch("/api/send-contact-email", {
          method: "POST",
          body: JSON.stringify(values),
        }),
        {
          loading: "Sending...",
          success: "Details have been sent",
          error: "Error, please try again later",
        }
      );
    } catch (error) {
      console.log(
        "Error sending Contact Us Email notification to founder from client side",
        error
      );
    }
  }
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-10">
        {/* <div className="max-w-xl text-center space-y-4">
                <h2 className="text-4xl font-semibold">Send us An Email</h2>
                <p className="leading-8">We are here to assist you with your inquiries</p>
            </div> */}
        <div className="c">
          <section className="bg-teal-900 text-slate-100 rounded-md">
            <Form {...form}>
              {/* <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8 px-8 py-20 "> */}
              <div className="flex flex-col justify-evenly items-center gap-8 px-8 py-20 ">
                {/* <div className="w-full md:w-4/12 space-y-4">
            <p className="text-4xl font-bold">Get in Touch</p>
            <p className="text-lg">We&apos;d love to hear from vou!</p>
          </div> */}
                <div className="max-w-xl text-center space-y-4">
                  <h2 className="text-4xl font-semibold">Send us An Email</h2>
                  <p className="leading-8">
                    We are here to assist you with your inquiries
                  </p>
                </div>
                <div className="w-full md:w-6/12">
                  <form
                    onSubmit={form.handleSubmit(handleContactFormSubmit)}
                    className=" space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Imani Brown"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-wrap md:flex-nowrap justify-evenly items-start gap-8  ">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="youreamil@mail.com"
                                {...field}
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="0700 999 000 444"
                                {...field}
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Message Topic"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Imani Brown" {...field} /> */}
                            <Textarea
                              placeholder="your message..."
                              rows={6}
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="w-full grid place-content-center">
                      <Button
                        type="submit"
                        className="w-40 mx-auto bg-teal-600 hover:bg-teal-700 hover:scale-110"
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Form>
          </section>
        </div>
      </div>
    </section>
  );
}

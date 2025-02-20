"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { TextField } from "@/components/ui/textfield";
import { Icons } from "@/components/ui/icons";

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Seu nome completo só tem 2 letras?",
  }),
  email: z.string().email({ message: "Email inválido" }),
});

export default function SubscribeForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" space-y-6 flex flex-col justify-center items-center w-full"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-1">
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <TextField.Root className="w-96">
                  <TextField.Slot>
                    <Icons.UserHandsUp className="size-4" />
                  </TextField.Slot>
                  <TextField.Input
                    placeholder="Digite seu nome completo"
                    {...field}
                  />
                </TextField.Root>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-1">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <TextField.Root className=" w-96">
                  <TextField.Slot>
                    <Icons.Email className="size-4" />
                  </TextField.Slot>
                  <TextField.Input
                    placeholder="Digite seu melhor e-mail aqui :)"
                    {...field}
                  />
                </TextField.Root>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Inscrever-se</Button>
      </form>
    </Form>
  );
}

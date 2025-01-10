"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AddQuestionForm = () => {
  // Question Schema
  const QuestionSchema = z.object({
    questionTitle: z
      .string({
        required_error: "A Question Title is required",
      })
      .nonempty(),
    problemStatement: z
      .string({
        required_error: "Problem Statement is required",
      })
      .nonempty(),
    pattern: z
      .string({
        required_error: "A Problem Pattern is required",
      })
      .nonempty(),
    difficulty: z.enum(["easy", "medium", "hard"], {
      required_error: "A Difficulty is required",
    }),
    solutions: z.array(
      z.object({
        solutionTitle: z
          .string({
            required_error: "A Solution Title is Required",
          })
          .nonempty(),
        solutionBody: z
          .string({
            required_error: "A Solution Body is Required",
          })
          .nonempty(),
        isCode: z.boolean({
          required_error: "isCode is Required",
        }),
      }),
    ),
  });

  // Set default form values
  const questionForm = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      questionTitle: "",
      problemStatement: "",
      pattern: "",
      difficulty: "easy",
      solutions: [
        {
          isCode: false,
          solutionBody: "",
          solutionTitle: "",
        },
      ],
    },
  });

  // Handling form submission.
  function onSubmit(data: z.infer<typeof QuestionSchema>) {
    console.log(JSON.stringify(data));
    toast.info(JSON.stringify(data));
  }

  // Define Placeholders
  const placeholders = {
    questionTitle: "E.g: Trapping Rainwater",
    problemStatement:
      "E.g: Find the max water which can be stored in array of nums, where nums is the height of walls.",
    pattern: "E.g: Monotonic Stack",
    difficulty: "Select Difficulty",
    solutions: {
      title: "E.g: Bruteforce",
      body: "Write your solution here...",
    },
  };

  // Methods for dynamically adding/removing fields
  const { fields, append, remove } = useFieldArray({
    name: "solutions",
    control: questionForm.control,
  });

  return (
    <div className="p-4 text-sm">
      <Form {...questionForm}>
        <form onSubmit={questionForm.handleSubmit(onSubmit)}>
          <ScrollArea className="h-[50vh]">
            <div className="mb-4 grid gap-4 px-1">
              {/* Text Input - Question Title */}
              <FormField
                control={questionForm.control}
                name="questionTitle"
                render={({ field }) => (
                  <FormItem className="md:col-span-2 lg:col-span-1">
                    <FormLabel className="text-foreground">Question Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={placeholders.questionTitle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />

              {/* Text Input - Pattern */}
              <FormField
                control={questionForm.control}
                name="pattern"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel  className="text-foreground">Algorithm Pattern</FormLabel>
                    <FormControl>
                      <Input placeholder={placeholders.pattern} {...field} />
                    </FormControl>
                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />

              {/* Dropdown - Difficulty */}
              <FormField
                control={questionForm.control}
                name="difficulty"
                defaultValue="easy"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel  className="text-foreground">Difficulty</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={placeholders.difficulty} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />

              {/* Text Input - Problem Statement */}
              <FormField
                control={questionForm.control}
                name="problemStatement"
                render={({ field }) => (
                  <FormItem className="md:col-span-2 lg:col-span-3">
                    <FormLabel className="text-foreground">Problem Statement</FormLabel>
                    <FormControl>
                      {/* <Input placeholder="Problem Statement" {...field} /> */}
                      <Textarea
                        placeholder={placeholders.problemStatement}
                        className=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="dark:text-red-300" />
                  </FormItem>
                )}
              />

              {/* Solutions */}
              <p className="text-base font-bold">Solutions</p>

              <div className="grid gap-4 overflow-clip md:col-span-2 lg:col-span-3">
                {fields.map((field, idx) => (
                  <div
                    key={field.id}
                    className="grid gap-2 rounded-lg border border-neutral-500 bg-muted p-4 dark:border-neutral-700 dark:bg-muted/50"
                  >
                    {/* Text Input - Solution title */}
                    <FormField
                      control={questionForm.control}
                      name={`solutions.${idx}.solutionTitle`}
                      render={({ field }) => (
                        <FormItem className="md:col-span-2 lg:col-span-3">
                          <FormLabel className="text-foreground">Solution Title</FormLabel>
                          <FormControl>
                            {/* <Input placeholder="Problem Statement" {...field} /> */}
                            <Input
                              className="bg-background/75"
                              placeholder={placeholders.solutions.title}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="dark:text-red-300" />
                        </FormItem>
                      )}
                    />

                    {/* Textarea - Solution Body */}
                    <FormField
                      control={questionForm.control}
                      name={`solutions.${idx}.solutionBody`}
                      render={({ field }) => (
                        <FormItem className="md:col-span-2 lg:col-span-3">
                          <FormLabel className="text-foreground">Solution Body</FormLabel>
                          <FormControl>
                            <Textarea
                              className="h-auto overflow-hidden bg-background/75"
                              placeholder={placeholders.solutions.body}
                              {...field}
                              onInput={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.height = "auto"; // Reset height to auto to calculate new height
                                target.style.height = `${target.scrollHeight}px`; // Set height based on content
                              }}
                            />
                          </FormControl>
                          <FormMessage className="dark:text-red-300" />
                        </FormItem>
                      )}
                    />

                    {/* Checkbox - Is Code */}
                    <FormField
                      control={questionForm.control}
                      name={`solutions.${idx}.isCode`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center gap-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-foreground font-normal">
                            Contains only Code
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                {!fields.length && (
                  <div>Click on Add Solution to add a solution.</div>
                )}
              </div>
            </div>
          </ScrollArea>
          <div className="flex items-center gap-4 md:col-span-2 lg:col-span-3">
            <Button
              className="flex-1"
              variant={"ghost"}
              onClick={(e) => {
                e.preventDefault();
                append({
                  solutionTitle: "",
                  solutionBody: "",
                  isCode: false,
                });
              }}
            >
              Add Solution
            </Button>
            <Button className="button-primary flex-1 mt-4" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

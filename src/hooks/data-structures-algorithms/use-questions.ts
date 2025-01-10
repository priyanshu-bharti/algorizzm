import { useEffect, useState } from "react";
import { toast } from "sonner";

import { dsaQuestionsDatabase } from "@/db/idb";
import { DsaQuestion } from "@/lib/types";
import dsaJson from "@/populate/data-structures-algorithms/data.json";

export function useQuestions() {
  const [questions, setQuestions] = useState<DsaQuestion[]>([]);

  useEffect(() => {
    const USE_STATIC_JSON_DATA = process.env.NEXT_PUBLIC_SEED_DSA_QUESTIONS;

    const initializeQuestions = async () => {
      try {
        if (USE_STATIC_JSON_DATA) {
          setQuestions(dsaJson);
        } else {
          const dbQuestions = await dsaQuestionsDatabase.getAllQuestions();
          setQuestions(dbQuestions);
        }
        toast.success("Questions loaded successfully!");
      } catch (error) {
        console.error("Failed to load questions:", error);
        toast.error("Failed to load questions.");
      }
    };

    initializeQuestions();
  }, []);

  const createNewQuestion = async (question: DsaQuestion) => {
    try {
      setQuestions((prev) => [...prev, question]);
      await dsaQuestionsDatabase.saveQuestion(question);
      toast.success("Question added successfully!");
    } catch (error) {
      console.error("Failed to add question:", error);
      toast.error("Failed to add question.");
    }
  };

  const editQuestion = async (
    id: string,
    updatedQuestion: Partial<DsaQuestion>,
  ) => {
    try {
      setQuestions((prev) =>
        prev.map((question) =>
          question.id === id ? { ...question, ...updatedQuestion } : question,
        ),
      );
      const questionToUpdate = { id, ...updatedQuestion } as DsaQuestion;
      await dsaQuestionsDatabase.saveQuestion(questionToUpdate);
      toast.success("Question updated successfully!");
    } catch (error) {
      console.error("Failed to update question:", error);
      toast.error("Failed to update question.");
    }
  };

  const deleteQuestion = async (id: string) => {
    try {
      setQuestions((prev) => prev.filter((question) => question.id !== id));
      await dsaQuestionsDatabase.deleteQuestion(id);
      toast.success("Question deleted successfully!");
    } catch (error) {
      console.error("Failed to delete question:", error);
      toast.error("Failed to delete question.");
    }
  };

  return {
    questions,
    createNewQuestion,
    editQuestion,
    deleteQuestion,
  };
}

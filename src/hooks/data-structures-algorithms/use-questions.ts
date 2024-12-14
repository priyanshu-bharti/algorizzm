import { useEffect, useState } from "react";
import { toast } from "sonner";

import { dsaQuestionsDatabase } from "@/db/idb";
import { DsaQuestion } from "@/lib/types";
import dsaJson from "@/populate/data-structures-algorithms/data.json";

export function useQuestions() {
  const [questions, setQuestions] = useState<DsaQuestion[]>([]);

  useEffect(() => {
    const USE_JSON_DATA = true;
    const loadingToast = toast.info("Loading Questions...");

    const initializeQuestions = async () => {
      try {
        if (USE_JSON_DATA) {
          // Load from static JSON data
          setQuestions(dsaJson);
        } else {
          // Fetch questions from IndexedDB
          const dbQuestions = await dsaQuestionsDatabase.getAllQuestions();
          setQuestions(dbQuestions);
        }
        toast.dismiss(loadingToast);
        toast.success("Questions loaded successfully!");
      } catch (error) {
        console.error("Failed to load questions:", error);
        toast.dismiss(loadingToast);
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

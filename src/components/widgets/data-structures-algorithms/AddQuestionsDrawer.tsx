import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { AddQuestionForm } from "@/forms/addQuestion";

const AddQuestionsDrawer = () => {
  return (
    <DrawerContent>
      {/* Header */}
      <DrawerHeader>
        <DrawerTitle>Add Question</DrawerTitle>
        <DrawerDescription>
          Please enter the following information
        </DrawerDescription>
      </DrawerHeader>

      {/* Form */}
      <AddQuestionForm />
    </DrawerContent>
  );
};

export default AddQuestionsDrawer;

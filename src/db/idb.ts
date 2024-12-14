import Dexie, { Table } from "dexie";
import { DsaQuestion, AccordionState } from "@/lib/types";

class DsaQuestionsDatabase extends Dexie {
  questions!: Table<DsaQuestion, string>;
  expandedTileStates!: Table<AccordionState, string>;

  constructor() {
    super("DsaQuestionsDatabase");
    this.version(1).stores({
      questions: "id, questionName, pattern, difficulty",
      expandedTileStates:
        "id, isExpanded, questionName, pattern, difficulty, problemStatement, solutions",
    });
  }

  async getAllQuestions(): Promise<DsaQuestion[]> {
    return await this.questions.toArray();
  }

  async saveQuestion(question: DsaQuestion): Promise<void> {
    await this.questions.put(question);
  }

  async deleteQuestion(id: string): Promise<void> {
    await this.questions.delete(id);
  }

  async getTileStates(): Promise<AccordionState[]> {
    return await this.expandedTileStates.toArray();
  }

  async saveTileState(tileState: AccordionState): Promise<void> {
    await this.expandedTileStates.put(tileState);
  }

  async saveBulkTileStates(tileStates: AccordionState[]): Promise<void> {
    await this.expandedTileStates.bulkPut(tileStates);
  }
}

export const dsaQuestionsDatabase = new DsaQuestionsDatabase();

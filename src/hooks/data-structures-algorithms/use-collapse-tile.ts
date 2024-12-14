import { useState, useEffect } from "react";
import { AccordionState, DsaQuestion } from "@/lib/types";
import { dsaQuestionsDatabase } from "@/db/idb";

export function useCollapseTile() {
  const [expandedTiles, setExpndTiles] = useState<Map<string, boolean>>(
    new Map(),
  );

  // Load expansion states from IndexedDB
  useEffect(() => {
    const fetchTileStates = async () => {
      const states = await dsaQuestionsDatabase.getTileStates();
      const map = new Map<string, boolean>(
        states.map((state) => [state.id, state.isExpanded]),
      );
      setExpndTiles(map);
    };

    fetchTileStates();
  }, []);

  // Expand all tiles
  const handleExpandAll = async (questions: DsaQuestion[]) => {
    const updatedMap = new Map<string, boolean>(
      questions.map((question) => [question.id, true]),
    );
    setExpndTiles(updatedMap);

    const bulkStates: AccordionState[] = questions.map((question) => ({
      id: question.id,
      isExpanded: true,
    }));

    await dsaQuestionsDatabase.saveBulkTileStates(bulkStates);
  };

  // Collapse all tiles
  const handleCollapseAll = async (questions: DsaQuestion[]) => {
    const updatedMap = new Map<string, boolean>(
      questions.map((question) => [question.id, false]),
    );
    setExpndTiles(updatedMap);

    const bulkStates: AccordionState[] = questions.map((question) => ({
      id: question.id,
      isExpanded: false,
    }));

    await dsaQuestionsDatabase.saveBulkTileStates(bulkStates);
  };

  // Toggle a single tile
  const toggleQuestion = async (id: string) => {
    const newState = !expandedTiles.get(id);
    const updatedMap = new Map(expandedTiles).set(id, newState);
    setExpndTiles(updatedMap);

    await dsaQuestionsDatabase.saveTileState({ id, isExpanded: newState });
  };

  return {
    expandedTiles,
    handleExpandAll,
    handleCollapseAll,
    toggleQuestion,
  };
}

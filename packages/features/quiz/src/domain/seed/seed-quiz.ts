import { type UpsertQuizPayload } from "../quiz-rpc.js";
import artistTypeQuiz from "./data/artist-type-quiz.json" with { type: "json" };

/**
 * Creates the Artist Type quiz payload from seed data
 * This data can be used by external seed scripts to insert into the database
 */
export const getSeedPayload = (): UpsertQuizPayload => {
  return {
    title: artistTypeQuiz.title,
    subtitle: "Discover your unique creative personality",
    description:
      "Take this comprehensive quiz to understand your artist archetype and creative approach.",
    version: artistTypeQuiz.version,
    metadata: {
      ...artistTypeQuiz.settings,
    },
  };
};

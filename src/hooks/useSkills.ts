import { useState, useEffect } from "react";
import { getAllSkillCategories } from "@/services/skillService";
import type { SkillCategory } from "@/lib/skills";

export const useSkills = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllSkillCategories();
      setSkillCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch skills");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return {
    skillCategories,
    loading,
    error,
    fetchSkills,
  };
};

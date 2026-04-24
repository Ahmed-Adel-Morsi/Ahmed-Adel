import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { SkillCategory } from "@/lib/skills";

// const COLLECTION_NAME = "skillCategories";
const COLLECTION_NAME = "v2_skillCategories";

// Get all skill categories
export const getAllSkillCategories = async (): Promise<SkillCategory[]> => {
  try {
    const categoriesRef = collection(db, COLLECTION_NAME);
    const q = query(categoriesRef, orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as SkillCategory[];
  } catch (error) {
    console.error("Error fetching skill categories:", error);
    throw error;
  }
};

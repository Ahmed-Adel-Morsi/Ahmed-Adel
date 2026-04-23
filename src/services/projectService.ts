import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  type DocumentData,
  type DocumentSnapshot,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Project } from "@/lib/projects";

const COLLECTION_NAME = "v2_projects";

const mapDocToProject = (
  doc: DocumentSnapshot<DocumentData> | QueryDocumentSnapshot<DocumentData>,
): Project => {
  const data = doc.data() as Omit<Project, "id">;
  return { id: doc.id, ...data };
};

export const getAllProjects = async (): Promise<Project[]> => {
  const projectsRef = collection(db, COLLECTION_NAME);

  try {
    const q = query(
      projectsRef,
      orderBy("order", "asc"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(mapDocToProject);
  } catch (error) {
    // Fallback to single-field order if composite index is missing
    const message = error instanceof Error ? error.message : "";
    if (message.includes("requires an index")) {
      const qFallback = query(projectsRef, orderBy("order", "asc"));
      const snapshotFallback = await getDocs(qFallback);
      return snapshotFallback.docs.map(mapDocToProject);
    }
    throw error;
  }
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? mapDocToProject(docSnap) : null;
};

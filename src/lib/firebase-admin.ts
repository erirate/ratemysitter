import { initializeApp, getApps, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

// Uses Application Default Credentials locally (gcloud auth application-default login)
// On Vercel: set GOOGLE_APPLICATION_CREDENTIALS env var pointing to service account JSON
function getAdminApp(): App {
  if (getApps().length > 0) return getApps()[0];
  return initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export function getAdminAuth(): Auth {
  return getAuth(getAdminApp());
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}

export const adminAuth = {
  verifyIdToken: (token: string) => getAdminAuth().verifyIdToken(token),
};
export const adminDb = {
  collection: (path: string) => getAdminDb().collection(path),
};

import { collection, CollectionReference, DocumentData } from "firebase/firestore";
import { db } from "./firebase";

export interface SitterDoc {
  id?: string;
  name: string;
  last_name: string;
  city: string;
  state: string;
  bio: string;
  title: string;
  is_teen: boolean;
  verified: boolean;
  online: boolean;
  claimed: boolean;
  claimed_at?: Date;
  verification_level: 0 | 1 | 2;
  rating: number;
  reviewCount: number;
  photo?: string;
  contact_info?: string;
  metrics: {
    reliability: number;
    communication: number;
    professionalism: number;
    childEngagement: number;
    safety: number;
  };
  created_at: Date;
}

export interface ReviewDoc {
  id?: string;
  sitter_id: string;
  parent_id: string;
  ratings: {
    reliability: number;
    communication: number;
    professionalism: number;
    engagement: number;
    safety: number;
  };
  tags: string[];
  comment: string;
  display_name: string;
  created_at: Date;
}

export interface ParentDoc {
  id?: string;
  uid: string;
  email: string;
  created_at: Date;
}

export interface ReportDoc {
  id?: string;
  type: "wrong_sitter" | "harassment" | "fake_review" | "duplicate";
  review_id: string;
  reporter_uid: string;
  notes: string;
  created_at: Date;
  resolved: boolean;
}

export interface AuditLogDoc {
  id?: string;
  action: string;
  actor_uid: string;
  target_id: string;
  target_type: "sitter" | "review" | "report";
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

function typedCollection<T = DocumentData>(path: string) {
  return collection(db, path) as CollectionReference<T>;
}

export const sitterCollection = typedCollection<SitterDoc>("sitters");
export const reviewCollection = typedCollection<ReviewDoc>("reviews");
export const parentCollection = typedCollection<ParentDoc>("parents");
export const reportCollection = typedCollection<ReportDoc>("reports");
export const auditLogCollection = typedCollection<AuditLogDoc>("audit_logs");

from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import firebase_admin
from firebase_admin import credentials, firestore

# --------------------------
# Firebase Initialization
# --------------------------
cred = credentials.Certificate("hackathon-project-skillvault-firebase-adminsdk-fbsvc-7d8d176417.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# --------------------------
# FastAPI App
# --------------------------
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Skill Vault backend running 🚀"}

# --------------------------
# Student Model & Endpoints
# --------------------------
class Student(BaseModel):
    id: str
    name: str
    skills: List[str]
    projects: List[str]

@app.post("/students/")
def add_student(student: Student):
    db.collection("students").document(student.id).set(student.dict())
    return {"status": "added", "student": student}

@app.get("/students/{student_id}/recommendations")
def recommend_courses(student_id: str):
    doc = db.collection("students").document(student_id).get()
    if not doc.exists:
        return {"error": "student not found"}
    
    student = doc.to_dict()
    recs = []
    if "coding" in student.get("skills", []):
        recs.append("Python Basics Course")
    if "data" in student.get("skills", []):
        recs.append("Data Science Badge")

    return {"student": student["name"], "recommendations": recs}

# --------------------------
# Recruiter Model & Endpoints
# --------------------------
class Recruiter(BaseModel):
    id: str
    company: str
    needs: List[str]

@app.post("/recruiters/")
def add_recruiter(recruiter: Recruiter):
    db.collection("recruiters").document(recruiter.id).set(recruiter.dict())
    return {"status": "recruiter added", "recruiter": recruiter}

@app.get("/recruiters/{recruiter_id}/matches")
def match_students(recruiter_id: str):
    doc = db.collection("recruiters").document(recruiter_id).get()
    if not doc.exists:
        return {"error": "recruiter not found"}
    
    recruiter = doc.to_dict()
    matches = []
    students = db.collection("students").stream()
    
    for student_doc in students:
        student = student_doc.to_dict()
        if any(skill in recruiter["needs"] for skill in student.get("skills", [])):
            matches.append(student["name"])

    return {"recruiter": recruiter["company"], "matches": matches}

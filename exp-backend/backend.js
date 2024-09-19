import express from "express";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import cors from "cors";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig.js";
const serviceAccount = "./service-account-key.json";

const app = express();
app.use(bodyParser.json());
app.use(cors());

if (!serviceAccount) {
  console.error("Couldn't get firebase creds");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res.status(200).json({ token: userCredential.user.accessToken });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res
          .status(400)
          .json({ error: `Code ${errorCode}, message: ${errorMessage}` });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create a new user with Firebase
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    const token = await admin.auth().createCustomToken(userRecord.uid);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const snapshot = await db.collection("tasks").get();
    const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/tasks", async (req, res) => {
  const { name, completed } = req.body;
  try {
    const docRef = await db.collection("tasks").add({ name, completed });
    res.json({ id: docRef.id, name, completed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  const updateData = {};
  if (name !== undefined) updateData.name = name;
  if (completed !== undefined) updateData.completed = completed;

  try {
    await db.collection("tasks").doc(id).update(updateData);
    res.json({ id, ...updateData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection("tasks").doc(id).delete();
    res.json({ id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

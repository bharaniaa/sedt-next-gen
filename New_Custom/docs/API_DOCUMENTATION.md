# SEDT Backend API Documentation

> Sri Eshwar Drone Tech — Next-Gen Platform  
> Backend: Express + TypeScript | Frontend: React + Vite

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture & Workflow](#architecture--workflow)
3. [Authentication](#authentication)
4. [Base URL](#base-url)
5. [Endpoints](#endpoints)
   - [GET /](#get-)
   - [GET /api/info](#get-apiinfo)
   - [POST /api/contact](#post-apicontact)
   - [GET /api/contact](#get-apicontact)
   - [POST /api/enroll](#post-apienroll)
   - [GET /api/enroll](#get-apienroll)
6. [Error Reference](#error-reference)
7. [Frontend Integration](#frontend-integration)
8. [Running the Project](#running-the-project)

---

## Overview

The SEDT backend is a lightweight REST API built with **Express.js** and **TypeScript**. It provides three main resource routes for the Sri Eshwar Drone Tech website:

| Resource   | Purpose                                      |
|------------|----------------------------------------------|
| `info`     | Static organization details                  |
| `contact`  | Contact form submissions from website users  |
| `enroll`   | Course enrollment submissions                |

All resource routes are protected by an API key sent as a request header.

---

## Architecture & Workflow

```
┌─────────────────────────────────┐
│         React Frontend          │
│  (Vite, port 8080)              │
│                                 │
│  Contact.tsx  ──► submitContact()  ──► POST /api/contact
│  (enrollment) ──► Google Forms (external link)
│                                 │
│  src/lib/api.ts  (API utility)  │
└──────────────┬──────────────────┘
               │  HTTP + x-api-key header
               ▼
┌─────────────────────────────────┐
│         Express Backend         │
│  (ts-node-dev / node, port 4000)│
│                                 │
│  server/src/index.ts            │
│    │                            │
│    ├── cors()                   │
│    ├── express.json()           │
│    ├── apiKeyAuth middleware ◄── validates x-api-key
│    │                            │
│    ├── /api/contact  ─► contact.ts  (in-memory store)
│    ├── /api/enroll   ─► enroll.ts   (in-memory store)
│    └── /api/info     ─► info.ts     (static data)
└─────────────────────────────────┘
```

### Request Lifecycle

1. Frontend (React) calls `src/lib/api.ts` helper functions.
2. The helper attaches the `x-api-key` header and sends a `fetch` request to `http://localhost:4000/api/*`.
3. The Express server validates the API key via the `apiKeyAuth` middleware.
   - If the key is missing or wrong → **401 Unauthorized**.
   - If valid → request is passed to the route handler.
4. The route handler validates the request body fields.
   - If required fields are missing → **400 Bad Request**.
5. On success, the record is stored in an in-memory array and a **201 Created** response is returned.

> **Note:** Data is stored **in-memory only**. All submissions are lost when the server restarts. A persistent database (e.g., PostgreSQL, MongoDB) should be connected for production use.

---

## Authentication

All `/api/*` routes require an API key passed via a custom HTTP header.

| Header      | Value                    |
|-------------|--------------------------|
| `x-api-key` | Value of `API_KEY` env var (defaults to `changeme-secret-key`) |

The key is configured in `server/.env`:

```env
API_KEY=your-secret-key-here
PORT=4000
```

If the header is absent or incorrect, the server responds:

```json
HTTP/1.1 401 Unauthorized

{
  "error": "Invalid or missing API key"
}
```

> **Security notice:** Change `changeme-secret-key` before any production or public deployment. The same key must be updated in `src/lib/api.ts` on the frontend (or better, sourced from a Vite environment variable).

---

## Base URL

```
http://localhost:4000
```

---

## Endpoints

---

### GET /

Health check. Confirms the server is running.

**Auth required:** No

**Response `200 OK`**

```
SEDT Backend API Running
```

---

### GET /api/info

Returns static information about the Sri Eshwar Drone Tech organization.

**Auth required:** Yes (`x-api-key`)

**Request**

```http
GET /api/info
x-api-key: changeme-secret-key
```

**Response `200 OK`**

```json
{
  "organization": "Sri Eshwar Drone Tech",
  "address": "Kinathukadavu, Coimbatore-641202",
  "contact": "+91 7418245899",
  "email": "dronetech@sece.ac.in",
  "nextBatch": "June-11, 16 2025",
  "dgcaAuthorized": true
}
```

---

### POST /api/contact

Submits a contact form message. The submission is stored in a server-side in-memory list.

**Auth required:** Yes (`x-api-key`)

**Request Headers**

```
Content-Type: application/json
x-api-key: changeme-secret-key
```

**Request Body**

| Field     | Type   | Required | Description                  |
|-----------|--------|----------|------------------------------|
| `name`    | string | ✅ Yes   | Full name of the sender      |
| `email`   | string | ✅ Yes   | Email address of the sender  |
| `phone`   | string | ❌ No    | Phone number (optional)      |
| `message` | string | ✅ Yes   | Message content              |

**Example Request**

```json
{
  "name": "Arjun Kumar",
  "email": "arjun@example.com",
  "phone": "+91 9876543210",
  "message": "I want to know more about the drone pilot training program."
}
```

**Response `201 Created`**

```json
{
  "success": true,
  "submission": {
    "name": "Arjun Kumar",
    "email": "arjun@example.com",
    "phone": "+91 9876543210",
    "message": "I want to know more about the drone pilot training program.",
    "date": "2025-06-04T10:30:00.000Z"
  }
}
```

**Response `400 Bad Request`** — when required fields are missing

```json
{
  "error": "Missing required fields"
}
```

---

### GET /api/contact

Retrieves all stored contact form submissions.

**Auth required:** Yes (`x-api-key`)

**Request**

```http
GET /api/contact
x-api-key: changeme-secret-key
```

**Response `200 OK`**

```json
[
  {
    "name": "Arjun Kumar",
    "email": "arjun@example.com",
    "phone": "+91 9876543210",
    "message": "I want to know more about the drone pilot training program.",
    "date": "2025-06-04T10:30:00.000Z"
  }
]
```

Returns an empty array `[]` if no submissions exist yet.

---

### POST /api/enroll

Submits an enrollment request for a training batch.

**Auth required:** Yes (`x-api-key`)

**Request Headers**

```
Content-Type: application/json
x-api-key: changeme-secret-key
```

**Request Body**

| Field   | Type   | Required | Description                           |
|---------|--------|----------|---------------------------------------|
| `name`  | string | ✅ Yes   | Full name of the applicant            |
| `email` | string | ✅ Yes   | Email address                         |
| `phone` | string | ❌ No    | Phone number (optional)               |
| `batch` | string | ✅ Yes   | Requested batch identifier or date    |

**Example Request**

```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "+91 9123456789",
  "batch": "June-11 2025"
}
```

**Response `201 Created`**

```json
{
  "success": true,
  "enrollment": {
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+91 9123456789",
    "batch": "June-11 2025",
    "date": "2025-06-04T11:00:00.000Z"
  }
}
```

**Response `400 Bad Request`** — when required fields are missing

```json
{
  "error": "Missing required fields"
}
```

---

### GET /api/enroll

Retrieves all stored enrollment submissions.

**Auth required:** Yes (`x-api-key`)

**Request**

```http
GET /api/enroll
x-api-key: changeme-secret-key
```

**Response `200 OK`**

```json
[
  {
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "phone": "+91 9123456789",
    "batch": "June-11 2025",
    "date": "2025-06-04T11:00:00.000Z"
  }
]
```

Returns an empty array `[]` if no enrollments exist yet.

---

## Error Reference

| HTTP Status | Description                                  |
|-------------|----------------------------------------------|
| `200 OK`    | Request succeeded                            |
| `201 Created` | Resource created successfully              |
| `400 Bad Request` | Required fields missing in body        |
| `401 Unauthorized` | Missing or invalid `x-api-key` header |
| `404 Not Found` | Route does not exist                     |

---

## Frontend Integration

The frontend uses the helper module at `src/lib/api.ts` to communicate with the backend.

**Current implementation (`src/lib/api.ts`)**

```typescript
const API_URL = 'http://localhost:4000/api';
const API_KEY = 'changeme-secret-key';

export async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to submit contact');
  return res.json();
}
```

**Where it's used**

| Component | File | API call |
|-----------|------|----------|
| Contact form | `src/components/Contact.tsx` | `submitContact(form)` on form submit |

**Enrollment note:** The enrollment flow currently redirects users to an external Google Form. The `/api/enroll` endpoint is ready to be wired in as a replacement or supplement.

---

## Running the Project

**Development (both frontend and backend concurrently)**

```bash
# From the sedt-next-gen root
npm run dev
```

This runs:
- Frontend: `vite --port 8080` → `http://localhost:8080`
- Backend: `ts-node-dev src/index.ts` → `http://localhost:4000`

**Backend only**

```bash
cd server
npm run dev
```

**Build & production**

```bash
# Frontend
npm run build

# Backend
cd server
npm run build   # compiles TS to dist/
npm start       # runs node dist/index.js
```

**Environment variables (server/.env)**

```env
PORT=4000
API_KEY=your-secret-key-here
```

# ==========================================
# ARCH-013
# JOURNEY ENGINE
# Version: 1.0
# ==========================================

# SCOPO

Il Journey Engine è il custode del percorso del collaboratore.

È l'unico componente autorizzato a modificare lo stato del Journey.

Nessun altro Engine, Workflow, Service o componente UI può
modificare direttamente il Journey.

---

# MISSIONE

Garantire che ogni collaboratore si trovi sempre in uno
e un solo stato del proprio Journey.

Ogni cambiamento deve essere:

- valido
- verificabile
- tracciabile
- ripetibile

---

# RESPONSABILITÀ

Il Journey Engine deve:

- conoscere lo stato attuale del collaboratore
- verificare le transizioni
- autorizzare il cambio di stato
- aggiornare il Journey
- generare gli eventi conseguenti

---

# RESPONSABILITÀ NON CONSENTITE

Il Journey Engine NON deve:

- creare componenti grafici
- prendere decisioni commerciali
- leggere direttamente il database
- sostituire i Workflow
- sostituire i Service

---

# API PUBBLICHE

Il Journey Engine espone solamente le seguenti operazioni.

getCurrentState()

Restituisce lo stato attuale.

---

canTransition()

Verifica se una transizione è consentita.

---

moveTo()

Esegue una transizione valida.

---

getAvailableTransitions()

Restituisce gli stati raggiungibili.

---

getProgress()

Calcola il progresso del Journey.

---

reset()

Reinizializza il Journey.

Solo gli amministratori possono utilizzarla.

---

# FLUSSO

Workflow

↓

Journey Engine

↓

Journey Machine

↓

Journey Transitions

↓

Journey Context

---

# REGOLE

Una transizione può avvenire solamente se:

- è prevista nella mappa delle transizioni
- i requisiti sono soddisfatti
- il collaboratore possiede i permessi necessari

---

# EVENTI

Ogni cambio di stato genera automaticamente eventi.

Esempio

ASSESSMENT

↓

FIRST_MISSION

↓

Genera:

- nuova missione
- aggiornamento dashboard
- aggiornamento roadmap
- notifica
- log attività

---

# SINGLE SOURCE OF TRUTH

Lo stato del Journey rappresenta la fonte ufficiale della
posizione del collaboratore.

Ogni modulo del sistema dovrà interrogare il Journey
e non ricostruire lo stato autonomamente.

---

# INTEGRAZIONE

Dashboard

Legge il Journey.

---

Workflow

Richiede cambi di stato.

---

Service

Forniscono la logica necessaria.

---

AI

Analizza il Journey.

Non modifica mai il Journey.

---

# SICUREZZA

È vietato modificare direttamente il JourneyContext.

Qualsiasi modifica deve passare dal Journey Engine.

---

# OBIETTIVO

Qualunque punto del sistema deve poter rispondere
alla domanda:

"Dove si trova il collaboratore in questo momento?"

con una sola risposta ufficiale.

---

# PRINCIPIO FONDAMENTALE

Il Journey è il cuore di Unity OS.

Tutti gli altri moduli ruotano intorno ad esso.

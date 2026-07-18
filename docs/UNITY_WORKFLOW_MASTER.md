# ==========================================
# UNITY OS
# WORKFLOW MASTER
# Version: 1.0
# ==========================================

# Scopo

Questo documento descrive l'intero ciclo di vita di un collaboratore
all'interno di Unity OS.

Ogni Workflow, Service ed Engine dovrà rispettare questa sequenza.

---

# PRINCIPI FONDAMENTALI

Unity NON sostituisce M3NET.

Unity importa solamente:

- Numero Collaboratori
- Numero Utenze Attive

Dopo l'import iniziale tutto il percorso viene gestito da Unity.

---

# FLUSSO PRINCIPALE

LANDING

↓

Prenotazione Meeting

↓

Meeting

↓

Registrazione M3NET

↓

Ricezione Codice Unity

↓

Primo Accesso

↓

Assessment

↓

Dashboard

↓

Missione

↓

Azione

↓

Completamento

↓

Ricompensa

↓

Aggiornamento Dashboard

↓

Nuova Missione

↓

Crescita

↓

Leadership

---

# DESCRIZIONE DELLE FASI

## 1. Landing

Obiettivo:

Presentare Unity.

Azioni:

- visita sito
- scopre il progetto
- prenota un meeting

---

## 2. Meeting

Obiettivo:

Capire il progetto.

Possibili risultati:

- Interessato
- Non interessato

Solo gli interessati continuano.

---

## 3. Registrazione

L'utente si registra su M3NET.

Riceve il proprio codice collaboratore.

Successivamente ottiene il Codice Unity.

---

## 4. Primo Accesso

Unity crea il profilo.

Vengono inizializzati:

- dashboard
- roadmap
- missioni
- notifiche

---

## 5. Assessment

Unity importa solamente:

- collaboratori
- utenze

Calcola:

- livello iniziale
- esperienza
- percorso consigliato

---

## 6. Dashboard

Mostra:

- prossima missione
- prossima azione
- progressi
- stato

La Dashboard non prende decisioni.

Visualizza solamente.

---

## 7. Missione

Ogni missione contiene:

- obiettivo
- azioni
- ricompense
- requisiti

---

## 8. Azione

L'utente svolge un'attività.

Esempio:

- caricare una bolletta
- invitare una persona
- completare una guida

---

## 9. Completamento

Unity verifica.

Se corretto:

Missione aggiornata.

---

## 10. Ricompensa

Assegna:

- XP
- Badge
- Progressi

---

## 11. Aggiornamento Dashboard

Aggiorna automaticamente:

- statistiche
- avanzamento
- prossima missione

---

## 12. Crescita

Unity osserva:

- costanza
- velocità
- partecipazione

Adatta il percorso.

---

## 13. Leadership

Quando vengono soddisfatti i requisiti,
Unity abilita il percorso Leadership.

---

# ARCHITETTURA

Utente

↓

Workflow

↓

Service

↓

Repository

↓

Data

↓

Engine

↓

Dashboard

---

# RESPONSABILITÀ

Engine

- orchestrano

Workflow

- decidono la sequenza

Service

- eseguono la logica

Repository

- leggono e salvano dati

Dashboard

- visualizza

---

# EVENTI FUTURI

Ogni azione genererà eventi.

Esempio:

Upload completato

↓

Missione completata

↓

XP assegnati

↓

Dashboard aggiornata

↓

Nuova missione

↓

Notifica

---

# OBIETTIVO

Ogni collaboratore deve sapere sempre:

- dove si trova
- cosa deve fare
- perché deve farlo
- quale sarà il passo successivo

Unity deve eliminare ogni incertezza.

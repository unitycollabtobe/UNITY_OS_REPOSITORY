# ==========================================================
# ARCH-002
# ACTORS AND ROLES
# Version: 1.0
# ==========================================================

# SCOPO

Questo documento definisce tutti gli attori presenti
nell'ecosistema Unity.

Definisce inoltre la differenza tra:

- Attori
- Ruoli
- Relazioni
- Stati del Journey

Questi concetti non devono mai essere confusi.

---

# PRINCIPIO FONDAMENTALE

Una Persona può cambiare stato.

Può ottenere nuovi permessi.

Può crescere nel Journey.

Ma rimane sempre la stessa Persona.

---

# ATTORI

Gli attori rappresentano le persone
che interagiscono con Unity.

Sono:

- Persona
- Visitatore
- Collaboratore
- Admin
- AI

Gli attori esistono indipendentemente
dal Journey.

---

# PERSONA

La Persona rappresenta qualsiasi individuo
che entra in contatto con Unity.

È il punto di partenza del Life Cycle.

Una Persona può diventare:

- Visitatore
- Collaboratore

---

# VISITATORE

Il Visitatore utilizza esclusivamente
la Landing.

Può:

- vedere la Landing;
- prenotare i Meeting;
- partecipare ai Meeting;
- ricevere un Visitor ID.

Non può:

- accedere a Unity OS;
- avere un Journey;
- avere Missioni;
- invitare altre persone.

---

# COLLABORATORE

Il Collaboratore nasce
dopo la registrazione.

Possiede:

- Codice Unity;
- Dashboard;
- Journey;
- Missioni;
- Biblioteca;
- Meeting di accompagnamento.

Può:

- invitare nuove persone;
- condividere il proprio Codice Unity;
- accompagnare i Collaboratori della propria prima linea.

---

# ADMIN

L'Admin gestisce il sistema.

Può:

- correggere errori;
- modificare dati;
- intervenire sulla rete;
- gestire i permessi;
- amministrare Unity.

L'Admin non rappresenta
un livello del Journey.

---

# AI

L'AI accompagna il Collaboratore.

Può:

- analizzare il Journey;
- suggerire Missioni;
- proporre il passo successivo;
- fornire supporto.

L'AI non modifica direttamente:

- Journey;
- rete;
- permessi.

---

# RUOLI

I ruoli rappresentano
funzioni operative
all'interno di Unity.

I ruoli NON rappresentano
il livello del Journey.

I ruoli possono essere assegnati,
modificati o rimossi.

I ruoli attualmente previsti sono:

- Relatore
- Formatore
- Admin

Un Collaboratore può non avere
alcun ruolo operativo.

Oppure può ricevere uno o più ruoli
in base alle autorizzazioni del sistema.

---

# RELATORE

Il Relatore è un Collaboratore
autorizzato a organizzare
e condurre Meeting.

Non tutti i Collaboratori
sono Relatori.

---

# MENTORING

Mentoring NON è un ruolo.

Mentoring rappresenta
una fase del Journey.

Un Collaboratore può trovarsi
nella fase di Mentoring
indipendentemente
dal proprio ruolo operativo.

Ad esempio:

Journey:

Mentoring

Ruolo:

Formatore

oppure

Journey:

Mentoring

Ruolo:

Relatore
---

# RELAZIONI

Le relazioni descrivono
il collegamento tra due Collaboratori.

Le relazioni non sono ruoli.

---

# REFERENTE

Ogni Collaboratore possiede
un solo referente diretto.

Il referente è il Collaboratore
che ha condiviso il proprio Codice Unity.

Il referente:

- accompagna;
- supporta;
- aiuta il Collaboratore.

Il referente non controlla
il Journey.

Il Journey appartiene
al Collaboratore.

---

# INVITANTE

L'invitante è il Collaboratore
che condivide
il proprio Codice Unity.

Durante la registrazione
viene creato automaticamente
il collegamento nella rete.

---

# INVITATO

L'invitato è la Persona
che si registra
utilizzando un Codice Unity.

Dopo la registrazione
diventa Collaboratore.

---

# STATI

Gli stati descrivono
la posizione del Collaboratore
nel Journey.

Esempi:

- Onboarding
- Attivazione
- Operatività
- Costanza
- Crescita
- Leadership
- Mentoring

Gli stati NON rappresentano:

- ruoli;
- permessi;
- relazioni.

---

# DISTINZIONE FONDAMENTALE

Persona

↓

Attore

↓

Ruolo

↓

Relazioni

↓

Journey

Ogni livello descrive
un aspetto differente
del Collaboratore.

---

# ESEMPI

Simone

Attore:

Collaboratore

Ruolo:

Relatore

Referente:

Davide

Journey:

Operatività

----------------------------------------

Mario

Attore:

Collaboratore

Ruolo:

Nessuno

Referente:

Simone

Journey:

Attivazione

----------------------------------------

Luca

Attore:

Visitatore

Ruolo:

Nessuno

Referente:

Nessuno

Journey:

Nessuno

---

# REGOLE ARCHITETTURALI

Una Persona può avere
un solo referente diretto.

Un Collaboratore può avere
più ruoli.

I ruoli non modificano
la rete.

Le relazioni non modificano
il Journey.

Il Journey non modifica
i permessi.

Ogni concetto appartiene
ad un dominio specifico.

---

# OBIETTIVO

Separare chiaramente:

- chi è la Persona;
- cosa può fare;
- con chi è collegata;
- dove si trova nel Journey.

Questa separazione
garantisce un'architettura semplice,
coerente
e facilmente estendibile.
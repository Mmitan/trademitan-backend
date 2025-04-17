# TradeMitan Backend

Questo è il backend ufficiale dell'app **TradeMitan**, scritto in Node.js con Express e integrato con le API di OpenAI.

## Requisiti

- Node.js
- Una chiave API valida di OpenAI
- Render o altro hosting Node

## Installazione locale

```bash
git clone https://github.com/tuo-utente/trademitan-backend.git
cd trademitan-backend
npm install
```

## Esecuzione

```bash
npm start
```

## Variabili ambiente

Crea un file `.env` con la seguente variabile:

```
OPENAI_API_KEY=la-tua-api-key-openai
```

## Deploy su Render

1. Crea una nuova Web Service su [Render](https://render.com)
2. Collega questa repo
3. Build command: `npm install`
4. Start command: `npm start`
5. Aggiungi `OPENAI_API_KEY` come variabile ambiente

## Endpoint

`POST /api/admin/chatgpt`  
Corpo JSON:

```json
{
  "prompt": "Scrivimi del codice Flutter"
}
```

Risposta:

```json
{
  "reply": "Ecco il codice richiesto..."
}
```

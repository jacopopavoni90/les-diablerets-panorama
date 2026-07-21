# Les Diablerets Panorama

Sito statico trilingue (italiano, francese e inglese), pronto per GitHub Pages.

## 1. Personalizzazione obbligatoria

Apri `script.js` e sostituisci:

```js
const PHONE = '41790000000';
```

con il tuo numero WhatsApp completo di prefisso internazionale, senza `+`, spazi o trattini.

Esempio:

```js
const PHONE = '41791234567';
```

## 2. Sostituire le fotografie

Le immagini attuali sono dimostrative e vengono caricate da Unsplash. Per usare fotografie reali:

1. crea una cartella `images`;
2. inserisci le tue foto, per esempio `vista.jpg`, `terrazza.jpg`, `interno.jpg`;
3. in `styles.css`, sostituisci gli indirizzi `https://images.unsplash.com/...` con percorsi come `images/vista.jpg`.

## 3. Pubblicazione su GitHub Pages

1. Accedi a GitHub e crea un nuovo repository pubblico, per esempio `les-diablerets-panorama`.
2. Carica nella radice del repository questi file:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Apri `Settings` → `Pages`.
4. In `Build and deployment`, scegli `Deploy from a branch`.
5. Seleziona il branch `main` e la cartella `/ (root)`.
6. Salva.

Il sito sarà disponibile a un indirizzo simile a:

`https://TUO-USERNAME.github.io/les-diablerets-panorama/`

## Privacy

Il sito contiene `noindex,nofollow`, quindi chiede ai motori di ricerca di non indicizzarlo. Non è però protetto da password: chi riceve il link può aprirlo e condividerlo.

Non pubblicare nel sito codici di accesso, indirizzi completi o altre informazioni sensibili.

## Crediti immagini esterne

Le immagini panoramiche attualmente usate nelle sezioni principali provengono da fonti turistiche di Les Diablerets / Glacier 3000 e vengono caricate tramite URL esterni. Prima di una diffusione pubblica o commerciale, verificare le condizioni di utilizzo o sostituirle con fotografie personali.

- Hero e sezione inverno: Glacier 3000 / Alpes Vaudoises
- Sezione estate e contatti: The Glacier Hotel / Glacier 3000

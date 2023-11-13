### ESERCIZIO:

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

### PREPARAZIONE:
1. Tramite la destrutturazione degli oggetti, prendo l'oggetto di vue che mi serve (in questo caso createApp);
2. Lo assegno ad una costante e ne creo la struttura che andrò poi a compilare;
3. Creo un div e gli assegno un ID, in questo modo potrò collegarlo al mio Vue;
4. Abbino la mia costante al mio div tramite ID;

### DATI: 
1. Vado a creare le key return di cui ho bisogno:

    -Una rappresenterà il valore inserito nel mio input in pagina;
    -Una un collegamento ad un'immagine presa sul web;
    -L'ultima sarà rappresentativa di uno style-inline;

### SVOLGIMENTO:
1. Creo un tag img e tramite il v-bind gli assegno la mia key con il link all'immagine;
2. Creo un input e con il v-model faccio in modo di prendere il suo valore e assegnarlo alla key username;
3. Creo un tag h1, sempre con il v-bind gli do uno style-inline, e tramite l'interpolazione, faccio in modo che mi stampi il valore di username;




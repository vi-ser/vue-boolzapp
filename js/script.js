const { createApp } = Vue;

createApp({
    data() {
        return {

            activeIndex: 0,
            lastMessage: '',
            lastAccess: '',


            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Daria',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Pastoryus 🎵',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Domani la proviamo fr',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la odo',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao zia, novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ancora nulla zio',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Ok ok, ci sentiamo più tardi',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fulvio',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fr, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri fr, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Uhhhhhh va benissimo',
                            status: 'received'
                        }
                    ],
                }
            ],

            newMessageText: '',
            searchedName: '',

        }
    },

    methods: {

        // ottengo solo le ore dalla stringa "date"
        formatHours(dateString) {

            // controllo che la stringa sia valida
            if (typeof dateString !== 'string' || !dateString.trim()) {
                console.error('La data non è una stringa valida:', dateString);
                return '';
            }

            // splitto usando lo spazio
            const [date, time] = dateString.split(' ');

            // splitto usando i :
            const [hours, minutes, seconds] = time.split(':');

            // unisco ore e minuti con :
            const formattedTime = `${hours}:${minutes}`;

            return formattedTime;

        },

        changeContact(newIndex) {
            this.activeIndex = newIndex;
        },

        defaultLastAccess() {
            this.contacts.forEach(contact => {
                if (contact.messages.length > 0) {
                    lastMessage = contact.messages[contact.messages.length - 1];
                    lastAccess = `Ultimo accesso oggi alle ${this.formatHours(lastMessage.date)}`;
                    contact.lastAccess = lastAccess;
                }
            });
        },

        // invio e ricezione messaggi
        sendMessage() {

            if (this.newMessageText.trim() != '') {

                const answers = [
                    'Va bene zio.',
                    'Capito zio.',
                    'Grazie per l\'informazione zio.',
                    'Ok, ci sentiamo dopo zio.',
                    'Mi dispiace, non capisco zio.',
                    'Interessante zio!',
                    'Oh, davvero zio?',
                    'Perfetto zio!',
                    'Certo, nessun problema zio.',
                    'Grazie mille zio!',
                    'Non c\'è di che zio.',
                    'Beh, non lo so zio.',
                    'Mi sembra una buona idea zio.',
                    'Sembra interessante zio.',
                    'Posso chiederti di più su questo zio?',
                    'Non ho idea di cosa stai parlando zio.',
                    'Mi piacerebbe saperne di più zio.',
                    'In effetti zio.',
                    'Esatto zio!',
                    'Non sono sicuro, dovrò controllare zio.'
                ]

                let randomIndex = Math.floor(Math.random() * answers.length);

                // calcolo la data di invio del messaggio nel formato giusto
                // es. '10/01/2020 15:30:55'
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth()).padStart(2, '0');
                const day = String(now.getDay()).padStart(2, '0');
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                const messageTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

                const formattedTime = String(messageTime);

                // creo un nuovo oggetto messaggio con il testo e la data
                const newMessage = {
                    message: this.newMessageText,
                    date: formattedTime,
                    status: 'sent'
                };

                // aggiungo il nuovo oggetto all'array di messaggi
                this.contacts[this.activeIndex].messages.push(newMessage);

                // pulisco il campo del messaggio dopo l'invio
                this.newMessageText = '';

                // salvo l'indice attivo in una variabile
                let answerIndex = this.activeIndex;

                // salvo l'indice in una variabile
                let activeContact = this.contacts[this.activeIndex];

                // elimino il contatto con indice attivo dall'array
                this.contacts.splice(this.activeIndex, 1);

                // inserisco il contatto all'inizio dell'array
                this.contacts.unshift(activeContact);

                // attribuisco indici attivi alla prima posizione dell'array
                this.activeIndex = 0;
                answerIndex = 0;


                setTimeout(() => {
                    // mostro il contatto online (tempo di lettura del messaggio) 
                    activeContact.lastAccess = 'online';
                }, 2000);

                // mentre il contatto scrive mostro "sta scrivendo..."
                setTimeout(() => {
                    activeContact.lastAccess = 'Sta scrivendo...';
                }, 4000);

                // mostro nuovamente l'utente online per 2 secondi 
                setTimeout(() => {
                    activeContact.lastAccess = 'online';
                }, 6000);

                // reimposto l'ultimo accesso
                setTimeout(() => {
                    activeContact.lastAccess = `Ultimo accesso oggi alle ${this.formatHours(formattedTime)}`;
                }, 8000);


                // genero un messaggio random e lo pusho nell'array
                setTimeout(() => {
                    const receivedMessage = {
                        message: answers[randomIndex],
                        date: formattedTime,
                        status: 'received'
                    };

                    this.contacts[answerIndex].messages.push(receivedMessage);
                    ;
                }, 6000);

            }

        },

        searchContact() {

            // converto in minuscolo l'input della ricerca
            this.searchedName = this.searchedName.toLowerCase();

            // filtro i contatti
            const filteredContacts = this.contacts.filter(contact => {

                // converto in minuscolo i nomi dei contatti nell array
                const contactName = contact.name.toLowerCase();

                // restituisco solo i nomi che includono i caratteri ricercati
                return contactName.includes(this.searchedName);

            });

            // restituisco l'array filtrato
            return filteredContacts;

        },

        // eliminazione messaggio
        deleteMessage(index) {

            this.contacts[this.activeIndex].messages.splice(index, 1);

        },

        // eliminazione conversazione
        deleteConversation(index) {
            this.contacts.splice(index, 1);


            if (this.activeIndex >= this.contacts.length) {
                // se l'activeIndex è maggiore o uguale alla lunghezza dell'array dei contatti lo decremento
                this.activeIndex--;
            }
        },

        loader() {
            setTimeout(() => {

            }, 2000);

        },
    },

    mounted() {
        // chiamo il metodo nel mounted per caricare di default l'ultimo accesso del contatto
        this.defaultLastAccess();

    }
}).mount("#app");
const { createApp } = Vue;

createApp({
    data() {
        return {

            activeIndex: 0,

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
                            message: 'Domani la proviamo, Viselloooo',
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

        // invio e ricezione messaggi
        sendMessage() {

            if (this.newMessageText.trim() != '') {

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


                // quando invio un messaggio ricevo un messaggio dopo un secondo
                setTimeout(() => {
                    const receivedMessage = {
                        message: 'Grazie a te!',
                        date: formattedTime,
                        status: 'received'
                    };

                    this.contacts[this.activeIndex].messages.push(receivedMessage);
                    ;
                }, 1000);

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

        deleteMessage(index) {

            this.contacts[this.activeIndex].messages.splice(index, 1);

        }

    }
}).mount("#app");
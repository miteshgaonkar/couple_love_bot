const { Client, GatewayIntentBits } = require("discord.js");

const lines = [
    "I love you",
    "I love so much",
    "I love you a lot",
    "I love you forever",
    "I love you unconditionally",
    "I love you to the moon and back",
    "I love you with all my heart",
    "I love you more than life itself",
    "I love you more than anything",
    "I love you more than I love myself",
    "I love you from the bottom of my heart",
    "I love you from the bottom of my soul",
    "I love you more than any word can say",
    "I'm nothing without you",
    "I'm lost without you",
    "I'm crazy about you",
    "I'm head over heels for you",
    "I'm head over heels in love with you",
    "I adore you",
    "I've fallen for you",
    "I'm falling in love with you",
    "I'm yours",
    "You fill my heart",
    "You're the love of my life",
    "I can't live without you",
    "I need you",
    "I care about you",
    "You're my everything",
    "You're the one for me",
    "You're my one and only",
    "You're my sunshine",
    "You rock my world",
    "I want to spend my life with you",
    "You mean so much to me",
    "I've got a crush on you",
    "You're the light of my life",
    "I will always love you",
    "I'm mad about you",
    "I'm nuts about you",
    "I cherish you",
    "You're my angel",
    "You stole my heart",
    "You give me wings to fly",
    "You mean the world to me",
    "You mean so much to me",
    "I'm fond of you",
    "You make my heart skip a beat",
    "There isn't a word in the dictionary for how much I love you",
    "My heart is where you are",
    "It's so easy to love you",
    "I'm so lucky to have you by my side",
    "My heart is yours forever",
    "I love you more each day",
    "I love you more than coffee, and that's saying a lot",
    "I'm head over heels for you",
    "Te amo (Spanish)",
    "I love you so matcha",
    "You're the LOL to my OMG",
    "You're the peanut butter to my jelly",
    "You're the peanut to my butter",
    "You're the crayons to my coloring book",
    "You're the guacamole to my taco",
    "You guac my world",
    "We fit together like puzzle pieces",
    "I love you from your toes to your nose to where your hair grows!",
    "I've fallen for you… and I can't get up",
    "We go together like biscuits and gravy",
    "My heart is full of emotional emojis right now",
    "I love you more than chocolate, pumpkin spice lattes, and sweatpants combined",
    "You're my favorite person to fall asleep next to",
    "I love you more than pumpkin pie",
    "I love you more than coffee, and that's saying a lot",
    "I love you a bushel and a peck, and a hug around the neck",
    "I do love nothing in the world so well as you (Much Ado About Nothing)",
    "As you are mine, I am yours. I give away myself for you and dote upon the exchange (Much Ado About Nothing)",
    "I love you with so much of my heart that none is left to protest (Much Ado About Nothing)",
    "An angel is like you, and you are like an angel (Henry V)",
    "I know no ways to mince it in love, but directly to say, 'I love you' (Henry V)",
    "O beauty, Till now I never knew thee (Henry VIII)",
    "I humbly do beseech of your pardon, For too much loving you (Othello)",
    "Hear my soul speak, Of the very instant that I saw you, Did my heart fly at your service (Twelfth Night)",
    "I love you more than words can wield the matter (King Lear)",
    "To me, you are perfect",
    "What did the volcano say to the mountain? I lava you!",
    "I've fallen for you and I can't get up",
    "You take my breath away",
    "Since you've been around I smile a lot more than I used to",
    "I never knew what love was until I met you.",
    "I cherish every moment we spend together.",
    "My love for you grows stronger every day.",
    "You are the missing piece of my puzzle.",
    "I never get tired of being with you.",
    "You are the best thing that ever happened to me.",
    "You are my happily ever after.",
    "You make my heart sing.",
];


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Allows the bot to receive information about guilds (servers) it is a member of.
    GatewayIntentBits.GuildMessages, // Allows the bot to receive messages sent in guilds.
    GatewayIntentBits.MessageContent, // Allows the bot to receive message content along with message events.
  ],
});

client.on("messageCreate", (message) => {
    const limit = lines.length;
    const a = Math.floor(Math.random() * limit);
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("hi") || message.content.toLowerCase().includes("hello") || message.content.toLowerCase().includes("hey")) {
        message.reply({
          content: "Hi <Your Gf or Bf Names>, <Your name> at your service !",
        });
      }
    
      if (!(message.content.toLowerCase().includes("hi") || message.content.toLowerCase().includes("hello") || message.content.toLowerCase().includes("hey"))) {
        message.reply({
            content: '<Your name> says: "' + lines[a] +' "' ,
          });
      }
});

client.login(
  "<Your bot key>"
);
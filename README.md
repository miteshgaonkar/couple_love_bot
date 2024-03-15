# Romantic Discord Bot

This Discord bot is designed to express love and affection towards your significant other. It responds to greeting messages with a personalized greeting and sends random romantic messages when triggered.

## Features

- Responds to greetings like "hi", "hello", or "hey" with a custom greeting mentioning your partner's name.
- Sends random romantic messages from a predefined list of loving phrases and quotes.
- Customizable with your name, your partner's name, and your Discord bot token.

## Prerequisites

- Node.js (version 16 or higher)
- A Discord bot token (obtain one from the [Discord Developer Portal](https://discord.com/developers/applications))

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/romantic-discord-bot.git`

2. Navigate to the project directory: `cd romantic-discord-bot`

3. Install the required dependencies: `npm install discord.js`

4. Rename the `.env.example` file to `.env` and replace the placeholders with your Discord bot token, your name, and your partner's name.

5. Start the bot: `node index.js` or `npm start`

Your bot should now be online and ready to spread love and affection in the servers it has been added to.

## Customization

You can modify the `lines` array in the `index.js` file to include your own romantic messages, quotes, or phrases. Additionally, you can customize the greeting message and the bot's responses by modifying the code within the `messageCreate` event handler.

## Dependencies

- [discord.js](https://github.com/discordjs/discord.js) - A powerful library for interacting with the Discord API.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

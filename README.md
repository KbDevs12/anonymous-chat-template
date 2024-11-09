# 🌟 Anonymous Chat App Template with Socket.IO & Next.js

> note: Don`t deploy anywhere, just for fun.
> if you want to deploy, put this on vps because hosting platform like vercel, etc. Only support >serverless
> A modern, real-time anonymous chat application template built with Next.js 13+, Socket.IO, and TailwindCSS. This template provides a secure and seamless way to create chat rooms without requiring user registration.

![Anonymous Chat Banner](https://via.placeholder.com/800x400)

## ✨ Features

- 🚀 **Real-time Communication** - Instant messaging using Socket.IO
- 🔒 **Anonymous Access** - No registration required
- 🌐 **Multiple Chat Rooms** - Create or join existing rooms
- 🌍 **Internationalization** - Built-in support for multiple languages
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Clean and intuitive interface with TailwindCSS
- ⌨️ **Enhanced UX** - Press Enter to send messages
- 🔄 **Real-time Updates** - Messages appear instantly

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+
- **Backend**: Node.js with Express
- **Real-time**: Socket.IO
- **Styling**: TailwindCSS
- **Internationalization**: next-intl
- **Development**: nodemon (dev environment)

## 📋 Prerequisites

- Node.js 14.0 or later
- NPM or Yarn package manager
- Basic knowledge of React and Socket.IO

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/KbDevs12/anonymous-chat-template.git
cd anonymous-chat
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application in action!

## 📁 Project Structure

```
your-app/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalization routes
│   │   ├────── chat/
│   │   │         │
│   │   │         └── [room]/
│   │   │               │
    │   ├── layout.js   └── page.js
│   │   └── page.js
│   └── layout.js
│
├── components/            # React components
│   └── chat.js           # Main chat component
├── messages/             # i18n messages
│   ├── en.json
│   └── id.json
├── middleware.js         # Next.js middleware
└── server.js            # Integrated Socket.IO server
```

## 💡 Usage

1. **Start a Chat Room**

   - Visit the homepage
   - Enter a room name
   - Share the room URL with others

2. **Join a Chat Room**

   - Use a shared room URL
   - Or enter the room name on the homepage

3. **Send Messages**
   - Type your message
   - Click Send or press Enter
   - Messages appear in real-time

## 🌍 Internationalization

Currently supported languages:

- 🇺🇸 English (en)
- 🇮🇩 Indonesian (id)

To add a new language:

1. Create a new translation file in `messages/`
2. Add the locale to middleware.js
3. Access via `/{locale}/chat/{room}`

## 🎨 Customization

### Styling

The template uses TailwindCSS for styling. Customize the look by:

1. Modifying the TailwindCSS classes
2. Updating the color scheme in `tailwind.config.js`
3. Adding custom CSS in your components

## 📜 Available Scripts

```bash
# Development
npm run dev       # Start development server

# Production
npm run build     # Build the application
npm start         # Start production server

# Linting
npm run lint      # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

Need help? Feel free to:

- Open an issue
- Send a pull request
- Contact the maintainers

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [KbDevs12]

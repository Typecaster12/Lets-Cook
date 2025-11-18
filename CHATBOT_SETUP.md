# Guggi Chatbot Setup Guide 🤖

This guide will help you set up and configure Guggi, the AI-powered chatbot for Let's Cook.

## 📋 Prerequisites

1. Node.js installed (v14 or higher)
2. Google Gemini API key

## 🔑 Getting Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## ⚙️ Configuration Steps

### Step 1: Install Dependencies

The required package `@google/generative-ai` is already included in package.json. If you need to reinstall:

```bash
npm install @google/generative-ai
```

### Step 2: Set Up Environment Variables

1. Create a `.env` file in the root directory of the project:

```bash
# Windows
type nul > .env

# Mac/Linux
touch .env
```

2. Open the `.env` file and add your API key:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with your real Gemini API key.

### Step 3: Verify Setup

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:5173`

3. Look for the floating orange chat button in the bottom-right corner

4. Click the button to open Guggi

5. You should see a greeting message from Guggi

## 🎨 Chatbot Features

### User Interface
- **Floating Button:** Orange circular button with "Guggi" badge
- **Chat Window:** 380px × 550px responsive window
- **Header:** Shows Guggi's name and online status
- **Messages Area:** Scrollable chat history with timestamps
- **Input Field:** Type messages with Enter key support
- **Send Button:** Click to send messages

### Functionality
- **Auto-greeting:** Guggi greets users on first interaction
- **Context-aware:** Knows about Let's Cook app features
- **Real-time responses:** Powered by Gemini Pro AI
- **Typing indicator:** Shows when Guggi is thinking
- **Error handling:** Graceful error messages if API fails
- **Responsive design:** Works on desktop, tablet, and mobile

## 🔧 Customization

### Changing Guggi's Personality

Edit `src/API/geminiApi.jsx` and modify the `APP_CONTEXT` constant:

```javascript
const APP_CONTEXT = `
You are Guggi, a friendly and helpful chatbot...
// Modify personality traits here
`;
```

### Adjusting Response Length

In `geminiApi.jsx`, modify the `generationConfig`:

```javascript
generationConfig: {
  maxOutputTokens: 500,  // Change this number
  temperature: 0.7,      // 0.0 = focused, 1.0 = creative
},
```

### Styling Changes

All chatbot styles are in `src/App.css` under the "CHATBOT STYLES - GUGGI" section.

**Key CSS classes:**
- `.chatbot-toggle` - Floating button
- `.chatbot-container` - Main chat window
- `.chatbot-header` - Header section
- `.chatbot-messages` - Messages area
- `.message.user` - User messages
- `.message.bot` - Guggi's messages
- `.chatbot-input-container` - Input area

## 🐛 Troubleshooting

### Issue: "API key is not configured" error

**Solution:**
1. Check that `.env` file exists in root directory
2. Verify the variable name is exactly `VITE_GEMINI_API_KEY`
3. Ensure no spaces around the `=` sign
4. Restart the development server after changing `.env`

### Issue: Chatbot button not appearing

**Solution:**
1. Check that `Chatbot` component is imported in `AppLayout.jsx`
2. Clear browser cache and reload
3. Check browser console for errors

### Issue: No response from Guggi

**Solution:**
1. Verify your API key is valid
2. Check your internet connection
3. Look for error messages in browser console
4. Ensure you haven't exceeded Gemini API rate limits

### Issue: Styling looks broken

**Solution:**
1. Verify `App.css` includes chatbot styles
2. Clear browser cache
3. Check for CSS conflicts with other components

## 📱 Mobile Responsiveness

Guggi automatically adapts to different screen sizes:

- **Desktop (>768px):** 380px × 550px window in bottom-right
- **Tablet (480-768px):** Full-width window with margins
- **Mobile (<480px):** Full-screen chat interface

## 🔒 Security Best Practices

1. **Never commit `.env` file** - Already in `.gitignore`
2. **Don't share API keys** - Keep them private
3. **Use environment variables** - Never hardcode keys
4. **Rotate keys regularly** - Generate new keys periodically
5. **Monitor usage** - Check Google AI Studio for API usage

## 🚀 Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - Heroku: Settings → Config Vars

2. Use the same variable name: `VITE_GEMINI_API_KEY`

3. Rebuild your application after setting variables

## 📊 API Usage Limits

Google Gemini API free tier includes:
- 60 requests per minute
- 1,500 requests per day
- Rate limits may vary

Monitor your usage at [Google AI Studio](https://makersuite.google.com/)

## 💡 Tips for Best Experience

1. **Be specific:** Ask clear questions for better responses
2. **Use context:** Guggi knows about the app, so ask app-related questions
3. **Try different queries:** Guggi can help with recipes, navigation, and cooking tips
4. **Provide feedback:** If responses aren't helpful, rephrase your question

## 🎯 Example Conversations

**Navigation Help:**
- "How do I search for Italian recipes?"
- "What features does this app have?"
- "How do I find recipes by ingredient?"

**Cooking Questions:**
- "What's a good substitute for eggs?"
- "How do I make pasta from scratch?"
- "Tips for cooking chicken?"

**App Information:**
- "Who created this app?"
- "What API does this use?"
- "Tell me about Let's Cook"

## 📞 Support

If you encounter issues:
1. Check this guide first
2. Review browser console for errors
3. Verify API key configuration
4. Check Google AI Studio status page

---

**Enjoy chatting with Guggi!** 🍳🤖

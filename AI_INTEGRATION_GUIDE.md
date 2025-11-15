# AI Integration Guide

This application now supports multiple AI providers for enhanced data analysis capabilities. You can use ChatGPT (OpenAI) and Google Gemini to get intelligent insights about your data.

## Features

- **Multi-Provider Support**: Choose between ChatGPT, Gemini, or Auto-selection
- **Intelligent Fallback**: Automatically switches to available providers if one fails
- **Real-time Analysis**: Get instant AI-powered insights about your data
- **Provider Selection**: Users can choose their preferred AI model
- **Performance Metrics**: See processing time, token usage, and confidence scores

## Setup Instructions

### 1. Get API Keys

#### OpenAI ChatGPT
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy the key (starts with `sk-`)

#### Google Gemini
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key

### 2. Configure Environment Variables

Create a `.env` file in your project root and add your API keys:

```env
# AI Service Configuration
VITE_OPENAI_API_KEY=sk-your_openai_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Other existing variables...
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id_here
VITE_SERVER_URL=http://localhost:3001
```

### 3. Restart Your Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## Usage

### Provider Selection

1. Click the **Settings** icon (⚙️) in the AI query section
2. Choose your preferred AI provider:
   - **Auto**: Automatically selects the best available provider
   - **ChatGPT**: Uses OpenAI's GPT models
   - **Gemini**: Uses Google's Gemini model

### Asking Questions

You can ask natural language questions about your data:

- "What's the average sales value?"
- "Show me the highest performing products"
- "Are there any trends in the data?"
- "What's the correlation between price and sales?"
- "Find outliers in the revenue column"

### Response Information

Each AI response includes:
- **Provider**: Which AI model was used
- **Processing Time**: How long the request took
- **Token Usage**: Number of tokens consumed (ChatGPT only)
- **Confidence**: AI's confidence in the response

## AI Provider Comparison

| Feature | ChatGPT | Gemini |
|---------|---------|--------|
| **Model** | GPT-4 | Gemini Pro |
| **Strengths** | Excellent reasoning, detailed analysis | Fast responses, good for analytics |
| **Token Tracking** | ✅ Yes | ❌ No |
| **Fallback Support** | ✅ Yes | ✅ Yes |
| **Cost** | Pay per token | Free tier available |

## Troubleshooting

### No AI Providers Available
- Check that your API keys are correctly set in the `.env` file
- Ensure the environment variables start with `VITE_`
- Restart your development server after adding keys

### API Errors
- Verify your API keys are valid and have sufficient credits
- Check your internet connection
- Try switching to a different provider

### Rate Limiting
- If you hit rate limits, the system will automatically try the fallback provider
- Consider upgrading your API plan for higher limits

## Security Notes

- Never commit your `.env` file to version control
- API keys are only used client-side for direct API calls
- Consider implementing server-side proxy for production use

## Advanced Configuration

You can customize AI behavior by modifying the `aiService` configuration:

```typescript
// In src/lib/aiService.ts
aiService.updateProviderConfig('chatgpt', {
  model: 'gpt-4-turbo', // Use different model
  temperature: 0.5,     // Lower temperature for more focused responses
  maxTokens: 3000        // Increase token limit
});
```

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API keys are valid
3. Try switching between providers
4. Check the provider status in the settings panel

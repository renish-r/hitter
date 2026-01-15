# Server Hitter - Keep Your Render Server Alive 24/7 🚀

A lightweight keep-alive service that pings your Render backend server every few minutes to prevent it from going to sleep due to inactivity.

## 🎯 Problem

Render's free tier puts servers to sleep after 15 minutes of inactivity. This tool solves that by sending periodic pings to keep your server alive 24/7.

## 💡 Solution Options

This project provides **TWO** ways to keep your server alive:

### Option 1: GitHub Actions (Recommended - FREE & Automated) ✨

GitHub Actions will automatically ping your server every 10 minutes, completely free and requires no local setup.

**Setup:**
1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to **Actions** → **General**
4. Enable "Read and write permissions" for workflows
5. The workflow will start automatically!

**Features:**
- ✅ Completely free
- ✅ Runs in the cloud (no local machine needed)
- ✅ Pings every 10 minutes
- ✅ No maintenance required

### Option 2: Local Node.js Script

Run the hitter on your local machine or deploy it to a cloud service.

**Setup:**
```bash
# Install dependencies
npm install

# Run the hitter
npm start
```

**Configuration:**
Edit [.env](.env) to customize:
- `SERVER_URL`: Your Render server URL
- `PING_INTERVAL`: How often to ping (in minutes)

## 📊 How It Works

```
┌─────────────┐         Every 5-10 min        ┌──────────────────┐
│   Hitter    │  ────────────────────────────> │  Render Server   │
│  (GitHub    │         HTTP GET Request       │ (Your Backend)   │
│  Actions)   │  <──────────────────────────── │                  │
└─────────────┘         200 OK Response        └──────────────────┘
                                                        │
                                                        │
                                                   Stays Awake!
```

## 🔧 Configuration

### GitHub Actions Configuration

Edit [.github/workflows/keep-alive.yml](.github/workflows/keep-alive.yml):

```yaml
on:
  schedule:
    - cron: '*/10 * * * *'  # Every 10 minutes
```

Cron schedule options:
- `*/5 * * * *` - Every 5 minutes
- `*/10 * * * *` - Every 10 minutes (recommended)
- `*/15 * * * *` - Every 15 minutes

### Local Script Configuration

Edit [.env](.env):
```env
SERVER_URL=https://server.com
PING_INTERVAL=5  # minutes
```

## 📝 Logs

### GitHub Actions Logs
- Go to your repository → **Actions** tab
- Click on any workflow run to see ping logs

### Local Script Logs
```
🚀 Server Hitter Started
📡 Target Server: https://server.com
⏰ Ping Interval: 5 minutes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[1/15/2026, 10:30:00 AM] 🔄 Pinging server...
[1/15/2026, 10:30:01 AM] ✅ Server is alive! (Status: 200, Response time: 342ms)

[1/15/2026, 10:35:00 AM] 🔄 Pinging server...
[1/15/2026, 10:35:01 AM] ✅ Server is alive! (Status: 200, Response time: 298ms)
```

## 🚀 Quick Start

### For GitHub Actions (Recommended):
1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Add server hitter"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/server-hitter.git
   git branch -M main
   git push -u origin main
   ```

4. Done! GitHub Actions will automatically start pinging your server.

### For Local Running:
```bash
npm install
npm start
```

## 🌐 Deploy to Other Services (Optional)

You can also deploy this to:

- **Render Cron Jobs**: Deploy as a cron job on Render itself
- **Vercel Cron**: Use Vercel's cron jobs feature
- **Railway**: Deploy with scheduled tasks
- **Your Local Machine**: Just run `npm start`

## 📊 Why This Works

Render's free tier policy:
- Servers sleep after **15 minutes** of inactivity
- Any HTTP request wakes them up
- This tool pings every **5-10 minutes** to prevent sleep

## ⚠️ Important Notes

- The hitter makes a simple GET request to your server
- No special endpoint needed on your server
- Works with any server URL
- GitHub Actions has a monthly limit of 2,000 minutes (more than enough for this)

## 🛠️ Troubleshooting

**GitHub Actions not running?**
- Check if Actions are enabled in repository settings
- Verify the workflow file is in `.github/workflows/` directory

**Server still sleeping?**
- Reduce the ping interval (try 5 minutes)
- Check GitHub Actions logs to ensure pings are successful

**Local script not working?**
- Run `npm install` to install dependencies
- Check your `.env` file has the correct SERVER_URL

## 📄 License

MIT

---

**Made to keep your Render server alive! 🎯**

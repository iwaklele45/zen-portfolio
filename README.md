# 🌙 Zen Portfolio

Personal portfolio website of **Muhammad Rafi Putra Hidayat** (Zen) — a Flutter Developer based in Surabaya, Indonesia.

🌐 **Live:** [zen.ktik.me](https://zen.ktik.me)

## ⚡ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** Docker + Caddy (reverse proxy)
- **CI/CD:** GitHub Actions
- **Server:** Google Cloud VM (zen-server)
- **SSL:** Let's Encrypt (auto-renew via Caddy)

## 🚀 Features

- 🌑 Dark mode design with subtle grid background
- ✨ Smooth animations (fade-in, floating elements)
- 📱 Fully responsive (mobile-first)
- ⚡ Static site generation (fast loading)
- 🔒 HTTPS with auto-renewing SSL certificate
- 🔄 Auto-deploy on push to `main` branch

## 📂 Project Structure

```
zen-portfolio/
├── .github/workflows/
│   └── deploy.yml          # CI/CD pipeline
├── src/app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (Hero, About, Skills, Projects, Contact)
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Portfolio + Caddy reverse proxy
├── Caddyfile                # Caddy config (auto HTTPS)
├── next.config.ts           # Next.js config (standalone output)
└── tailwind.config.ts       # Tailwind CSS config
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🐳 Deployment

Deployment is automated via GitHub Actions. Every push to `main` triggers:

1. SSH into zen-server
2. Pull latest code
3. Rebuild Docker containers
4. Restart services

```bash
# Manual deploy (on server)
cd ~/zen-portfolio
git pull origin main
sudo docker compose up -d --build
```

## 📬 Contact

- **GitHub:** [@iwaklele45](https://github.com/iwaklele45)
- **Email:** rafirutra027@gmail.com

---

Made with ❤️ in Surabaya

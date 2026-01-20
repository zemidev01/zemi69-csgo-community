# ZEMI69.RO - CS:GO Community Website

🎮 Site-ul oficial al comunității ZEMI69.RO de Counter-Strike: Global Offensive din România.

## 📋 Descriere

ZEMI69.RO este o comunitate pasionată de CS:GO care oferă:
- Servere dedicate cu 128 tick rate
- Turnee și competiții regulate
- Comunitate prietenoasă și activă
- Suport pentru jucători noi

## 🚀 Instalare și Rulare

### Cerințe
- [Node.js](https://nodejs.org/) (versiunea 16 sau mai nouă)
- npm (instalat odată cu Node.js)

### Pași de instalare

1. **Clonează repository-ul:**
```bash
git clone https://github.com/[username]/zemi69-csgo-community.git
cd zemi69-csgo-community
```

2. **Instalează dependențele:**
```bash
npm install
```

3. **Rulează aplicația:**
```bash
npm start
```

4. **Accesează site-ul:**
Deschide [http://localhost:3000](http://localhost:3000) în browser.

## 📁 Structura Proiectului

```
zemi69-csgo-community/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Community.js
│   │   ├── Events.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Funcționalități

### Componente Principale
- **Header** - Navigație cu logo și indicator membri online
- **Hero** - Secțiune de bun venit cu statistici live
- **About** - Informații despre comunitate
- **Community** - Top jucători, meciuri recente, statistici
- **Events** - Evenimente viitoare și trecute
- **Contact** - Formulare și informații server
- **Footer** - Linkuri sociale și informații

### Caracteristici Tehnice
- Design responsive pentru toate device-urile
- Sistem de navigație prin pagini
- Actualizare automată membri online
- Tab-uri interactive
- Formulare funcționale
- Animații CSS moderne

## 🎮 Informații Server

- **IP:** 192.168.1.100:27015
- **Password:** zemi69
- **Tip:** Competitive 128 tick
- **Location:** București, România

## 🔧 Comenzi Disponibile

- `npm start` - Rulează aplicația în modul dezvoltare
- `npm run build` - Creează versiunea de producție
- `npm test` - Rulează testele
- `npm run eject` - Eject din Create React App (ATENȚIE!)

## 🌐 Deploy

### Netlify (Recomandat)
1. Fă push pe GitHub
2. Conectează repository-ul la [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel
1. Fă push pe GitHub
2. Importă proiectul pe [Vercel](https://vercel.com)
3. Deploy automat

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Adaugă în package.json:
```json
"homepage": "https://[username].github.io/zemi69-csgo-community",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Apoi rulează:
```bash
npm run deploy
```

## 🤝 Contribuții

1. Fork repository-ul
2. Creează o ramură nouă (`git checkout -b feature/amazing-feature`)
3. Commit schimbările (`git commit -m 'Add amazing feature'`)
4. Push pe ramură (`git push origin feature/amazing-feature`)
5. Deschide un Pull Request

## 📞 Contact

- **Discord:** discord.gg/zemi69
- **Steam:** steamcommunity.com/groups/zemi69ro
- **Email:** admin@zemi69.ro
- **Facebook:** facebook.com/zemi69ro

## 📄 Licență

Acest proiect este licențiat sub licența MIT - vezi fișierul [LICENSE](LICENSE) pentru detalii.

## 🎯 Roadmap

- [ ] Integrare API Steam
- [ ] Sistem de autentificare
- [ ] Chat în timp real
- [ ] Mobile app
- [ ] Statistici avansate jucători

---

**Made with ❤️ for the CS:GO community**
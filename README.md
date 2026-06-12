# Parenthèses d'Hiver — Site Vitrine

Site statique pour les week-ends bibliothérapie de Célie Adamczyk en Normandie.

## 📋 Vue d'ensemble

- **Stack** : Astro 4.x + Tailwind CSS 3.x + GSAP 3.x
- **Déploiement** : Site statique (SSG) sur Hetzner VPS avec Nginx
- **Pages** : 4 pages (Accueil, Séjour Écriture, Séjour Lecture, CGV)
- **Paiements** : Stripe Payment Links (Option 1)

## 🚀 Démarrage rapide

```bash
npm install          # Installation
npm run dev          # Développement (http://localhost:4321)
npm run build        # Build production (génère dist/)
npm run preview      # Prévisualisation du build
```

## 📁 Structure du projet

```
SiteWeb/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Accueil
│   │   ├── sejour-ecriture.astro    # Séjour Écriture (23-25 oct, 380€/440€)
│   │   ├── sejour-lecture.astro     # Séjour Lecture (20-22 nov, 380€)
│   │   └── cgv.astro                # Conditions générales de vente
│   ├── layouts/
│   │   └── Layout.astro             # Layout principal
│   ├── components/
│   │   ├── Nav.astro                # Navigation + menu mobile
│   │   ├── Footer.astro             # Pied de page + réseaux
│   │   └── Icon.astro               # Icônes réutilisables
│   ├── styles/
│   │   └── global.css               # Styles globaux
│   ├── scripts/
│   │   └── animations.ts            # GSAP animations
│   └── env.d.ts
├── public/
│   └── images/                      # 22 images (PNG/JPG)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Design

**Palette** : wb-ink, wb-cream, wb-bordeaux, wb-gold, wb-sage, wb-charcoal  
**Typo** : Playfair Display (titres) + Lora (corps) + Montserrat (nav/boutons)  
**Images** : 22 images sémantiquement nommées dans `public/images/`

## 🔗 Pages

### Accueil (index.astro)
- Hero + Présentation Célie (2 piliers)
- Cards séjours cliquables
- Section Gourmandise

### Séjour Écriture (sejour-ecriture.astro)
- 23–25 oct | Monceaux en Bessin | 7 places
- Tarifs : 380€ double / 440€ single (ou 130€/150€ × 3)
- Sections : Accroche + Infos + "Ce que vous gagnez" + Programme + "Pourquoi" + "Pour qui" + CTA

### Séjour Lecture (sejour-lecture.astro)
- 20–22 nov | Carcagny | 9 places
- Tarif : 380€ (ou 130€ × 3)
- Structure identique à Écriture

### CGV (cgv.astro)
- Légal : paiement, annulation, rétractation

## 💳 Paiements Stripe (Option 1)

**Important** : Les boutons "Je réserve ma parenthèse" redirigent actuellement vers Calendly. Ils doivent pointer vers les Stripe Payment Links une fois créés.

Voir `SETUP_STRIPE.md` pour :
- Créer les Payment Links dans Stripe Dashboard
- Générer les URLs de paiement
- Mettre à jour les boutons

**Contact** : Celie.octopuscreatio@gmail.com

## 📝 Tâches restantes

Voir `TODO.md` pour :
- [ ] Configurer Stripe Payment Links (2 liens : écriture + lecture)
- [ ] Mettre à jour les boutons "Je réserve ma parenthèse" avec les URLs Stripe
- [ ] Configurer l'appel découverte gratuit (Calendly)
- [ ] Tester les paiements en mode sandbox

## 🆘 Reprendre le développement

1. Clone le repo
2. `npm install`
3. Lire `TODO.md` (tâches restantes)
4. Lire `SETUP_STRIPE.md` (paiements)
5. Lire `DEPLOYMENT_HETZNER.md` (serveur)
6. `npm run dev` pour démarrer


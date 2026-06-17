# Workflow Versionning & Déploiement — Séjours Littéraires

Guide complet pour une session Claude reprenant le projet.

---

## 📋 Vue d'ensemble

Ce site Astro statique est hébergé sur **Hetzner VPS** et versionné via **GitHub**.

| Composant | Détail |
|-----------|--------|
| **Dépôt** | https://github.com/Massetho/sejours-litteraires-normandie |
| **Branche principale** | `main` (déploiement automatique sur push) |
| **Serveur** | Hetzner CX23 (178.105.41.254) |
| **Domaine** | sejours-litteraires.fr |
| **Répertoire web** | `/var/www/sejours-litteraires/` |
| **Stack** | Astro 4.x + Tailwind CSS 3.x + GSAP 3.x |

---

## 🔧 Environnement local

### Installation

```bash
cd "C:\Users\Promadmin\OneDrive\Graphisme\WeekEnd_bookclub\SiteWeb"
npm install
```

### Commandes essentielles

```bash
# Développement (reload automatique, http://localhost:4321)
npm run dev

# Build production (génère dist/)
npm run build

# Prévisualisation du build (http://localhost:3000)
npm run preview

# Vérifier les erreurs TypeScript
npm run check
```

---

## 📝 Workflow développement → production

### 1️⃣ Faire les changements

Les fichiers source à modifier :

```
src/
├── pages/
│   ├── index.astro              # Accueil
│   ├── sejour-ecriture.astro    # Retreat écriture
│   ├── sejour-lecture.astro     # Retreat lecture
│   └── cgv.astro                # Conditions générales
├── components/
│   ├── Nav.astro                # Navigation
│   ├── Footer.astro             # Pied de page
│   └── Icon.astro               # Icônes réutilisables
├── layouts/
│   └── Layout.astro             # Layout général
├── styles/
│   └── global.css               # Styles globaux
└── scripts/
    └── animations.ts            # Animations GSAP
```

**Images** : Ajouter à `public/images/` (vont dans dist/ automatiquement)

### 2️⃣ Builder localement

```bash
npm run build
# Génère dist/ avec site statique optimisé
```

### 3️⃣ Prévisualiser

```bash
npm run preview
# Ouvre http://localhost:3000 (site final)
```

### 4️⃣ Tester

- Navigation entre pages
- Responsivité mobile
- Animations GSAP
- Tous les liens externes
- Formulaires et CTAs

### 5️⃣ Commiter

```bash
# Étape 1 : Ajouter les changements
git add src/ public/images/ dist/
# Ou sélectif :
git add src/pages/index.astro

# Étape 2 : Commiter
git commit -m "Description claire des changements

- Détail 1
- Détail 2

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

**Guidelines commit** :
- Ligne 1 : Titre court (< 70 caractères)
- Ligne 2 : Vide
- Lignes 3+ : Détails (bulleted)
- Toujours finir par : `Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>`

### 6️⃣ Pusher

```bash
git push
# Envoie vers https://github.com/Massetho/sejours-litteraises-normandie
```

---

## 🚀 Déploiement sur Hetzner

### Prérequis

- SSH key privée à `~/.ssh/sejours-litteraires` ✓
- SSH key enregistrée sur le serveur ✓
- Accès à root@178.105.41.254 ✓

### Commande de déploiement

```bash
# Depuis le répertoire du projet
scp -i ~/.ssh/sejours-litteraires -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/
```

**Explication** :
- `-i ~/.ssh/sejours-litteraires` : Utilise la bonne clé SSH
- `-r` : Récursif (copie toutes les images, fichiers)
- `dist/*` : Contenu du build (tout ce qui doit être en ligne)
- `root@178.105.41.254:/var/www/sejours-litteraires/` : Destination sur le serveur

### Étapes complètes (commandes groupées)

```bash
# 1. Build
npm run build

# 2. Déployer
scp -i ~/.ssh/sejours-litteraires -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/

# 3. Vérifier (curl le site)
curl -s https://sejours-litteraires.fr/ | head -20

# 4. Commiter et pusher
git add src/ public/images/ dist/
git commit -m "Description"
git push
```

---

## ✅ Checklist avant chaque déploiement

- [ ] `npm run build` sans erreurs
- [ ] `npm run preview` et tester manuellement (au moins 2-3 pages)
- [ ] Images chargent correctement
- [ ] Liens externes fonctionnent
- [ ] Pas de console.log() inutiles
- [ ] Pas de fichiers temporaires dans dist/
- [ ] Git status propre (pas de changements non committés)
- [ ] Commit message clair et complet

---

## 🔄 Workflow complet (exemple)

### Scénario : Changer la date du séjour

```bash
# 1. Ouvrir l'éditeur et modifier src/pages/sejour-lecture.astro
# Remplacer "20-22 novembre" par "27-29 novembre"

# 2. Builder
cd SiteWeb
npm run build

# 3. Vérifier localement
npm run preview
# Aller à http://localhost:3000/sejour-lecture et vérifier les dates

# 4. Déployer
scp -i ~/.ssh/sejours-litteraires -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/

# 5. Vérifier en ligne
curl -s https://sejours-litteraires.fr/sejour-lecture/ | grep "27-29"

# 6. Commiter
git add src/pages/sejour-lecture.astro dist/
git commit -m "Update reading retreat dates: 27–29 November instead of 20–22"
git push
```

---

## 🎯 Tâches fréquentes

### Ajouter une image

```
1. Placer l'image dans public/images/
2. Utiliser dans .astro : <img src="/images/nom.jpg" alt="..." />
3. Builder : npm run build
4. Tester : npm run preview
5. Déployer : scp ...
6. Commiter
```

### Changer du texte

```
1. Modifier src/pages/*.astro (le texte est en HTML direct)
2. Builder
3. Tester localement
4. Déployer
5. Commiter
```

### Ajouter un lien ou CTA

```
1. Ajouter dans la page .astro correspondante
2. Utiliser les classes Tailwind existantes :
   - bg-wb-bordeaux (bouton principal)
   - bg-wb-gold (hover)
   - text-wb-cream, text-wb-ink (couleurs texte)
3. Builder + tester
4. Déployer
5. Commiter
```

### Modifier les styles globaux

```
1. Éditer src/styles/global.css ou tailwind.config.mjs
2. Builder
3. Tester (reload automatique en npm run dev)
4. Déployer
5. Commiter
```

---

## 🔐 Credentials & Secrets

### SSH Key

- **Localisation** : `~/.ssh/sejours-litteraires`
- **Type** : Ed25519 private key
- **Usage** : `scp -i ~/.ssh/sejours-litteraires ...`
- **Sécurité** : ✓ Jamais commit dans le repo

### GitHub Access

- **Dépôt** : https://github.com/Massetho/sejours-litteraires-normandie
- **Authentification** : Git SSH (public key enregistrée)
- **Branch** : `main` (déploiement)

### Stripe API Keys

- **Statut** : Non dans le code (Payment Links pré-générées)
- **URLs Payment Links** : Hardcodées dans les pages

Voir `SETUP_STRIPE.md` pour régénérer si besoin.

---

## 🛠️ Troubleshooting

### Le build échoue

```bash
npm run check  # Cherche les erreurs TypeScript
npm run build  # Regarde le message d'erreur complet
```

### L'image ne s'affiche pas après déploiement

```bash
# Vérifier que l'image est dans public/images/
ls public/images/nom.jpg

# Vérifier qu'elle est dans le build
ls dist/images/nom.jpg

# Si absent, reconstruire
rm -rf dist/
npm run build

# Redéployer
scp -i ~/.ssh/sejours-litteraires -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/
```

### SSH key ne fonctionne pas

```bash
# Vérifier que la clé existe
ls -la ~/.ssh/sejours-litteraires

# Vérifier les permissions
chmod 600 ~/.ssh/sejours-litteraires
chmod 700 ~/.ssh/

# Tester la connexion
ssh -i ~/.ssh/sejours-litteraires root@178.105.41.254 "echo OK"
```

### Site en ligne mais ancien contenu visible

```bash
# Forcer le reload serveur
ssh -i ~/.ssh/sejours-litteraires root@178.105.41.254 systemctl restart nginx

# Vider les caches du navigateur (Ctrl+Shift+R)
```

---

## 📚 Fichiers de référence

| Fichier | Contenu |
|---------|---------|
| **README.md** | Vue d'ensemble du projet |
| **DEPLOYMENT_HETZNER.md** | Configuration serveur détaillée |
| **SETUP_STRIPE.md** | Configuration paiements Stripe |
| **TODO.md** | Tâches restantes |
| **NEXT_STEPS.md** | Prochaines étapes |
| **astro.config.mjs** | Configuration Astro |
| **tailwind.config.mjs** | Configuration Tailwind (palette de couleurs) |

---

## 🎓 Ressources

- **Astro docs** : https://docs.astro.build
- **Tailwind CSS** : https://tailwindcss.com/docs
- **GSAP** : https://gsap.com/docs
- **GitHub repo** : https://github.com/Massetho/sejours-litteraires-normandie

---

## 💡 Notes importantes

1. **Toujours builder avant de déployer** (`npm run build`)
2. **Prévisualiser localement** (`npm run preview`) pour les changements visuels
3. **Commiter après chaque déploiement** pour tracer les changements
4. **Ne jamais commiter** les fichiers sensibles (clés SSH, .env)
5. **Messages de commit clairs** — aident à retrouver les changements
6. **Tester mobile** — le site doit être responsive sur iPhone/Android
7. **Vérifier les animations** — GSAP peut avoir des bugs sur certains navigateurs

---

**Dernière mise à jour** : 17 juin 2026  
**Dernière modification** : Changement dates séjour lecture (27-29 novembre)

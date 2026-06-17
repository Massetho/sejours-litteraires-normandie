# Instructions pour Claude — Séjours Littéraires

Ce fichier contient les instructions pour une session Claude reprenant ce projet.

---

## 🎯 Avant de commencer

1. **Lire WORKFLOW.md** dans le répertoire racine — c'est ton guide principal
2. **Lire la plan file** si elle existe : `.claude/plans/`
3. **Vérifier la branche** : `git status` — tu dois être sur `main`

---

## 📍 Working directories

Le projet peut être dans plusieurs emplacements :

```
C:\Users\Promadmin\OneDrive\Graphisme\WeekEnd_bookclub\SiteWeb\
```

C'est le répertoire de travail principal. Tous les chemins de fichiers sont relatifs à celui-ci.

---

## 🔄 Workflow court (pour une session rapide)

```bash
# 1. Faire les changements (src/ ou public/images/)

# 2. Builder et tester
npm run build
npm run preview

# 3. Déployer
scp -i ~/.ssh/sejours-litteraises -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/

# 4. Commiter
git add src/ public/images/ dist/
git commit -m "Description claire des changements
Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
git push
```

---

## 📂 Structure clé

```
SiteWeb/
├── src/
│   ├── pages/          # Pages principales (.astro) — éditer ici
│   ├── components/     # Composants réutilisables (Nav, Footer)
│   ├── layouts/        # Layout général
│   ├── styles/         # Styles globaux
│   └── scripts/        # Scripts (animations GSAP)
│
├── public/images/      # Images → copier ici avant npm run build
├── dist/               # Build output (généré par npm run build)
│
├── WORKFLOW.md         # Guide complet (lire en premier)
├── README.md           # Vue d'ensemble projet
├── DEPLOYMENT_HETZNER.md  # Config serveur
└── TODO.md             # Tâches restantes
```

---

## 🎨 Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| Astro | 4.x | SSG (Static Site Generator) |
| Tailwind CSS | 3.x | Styling |
| GSAP | 3.x | Animations |
| TypeScript | 5.x | Type checking |

---

## 🔑 Credentials

**SSH Key** : `~/.ssh/sejours-litteraires` (Ed25519)

```bash
# Tester la connexion
ssh -i ~/.ssh/sejours-litteraises root@178.105.41.254 "echo OK"
```

**GitHub** : Push sur https://github.com/Massetho/sejours-litteraires-normandie

---

## 🎨 Palette de couleurs (Tailwind tokens)

```
wb-ink          #1E2B2F    Fonds sombres, headers
wb-cream        #FAF7F2    Fond clair
wb-bordeaux     #8B3A3A    CTA principal, accents
wb-gold         #C9A04E    Accents secondaires, hover
wb-sage         #6B8F71    Labels, eyebrows
wb-charcoal     #2A2A2A    Texte courant
```

Utilise ces tokens dans les classes Tailwind : `bg-wb-bordeaux`, `text-wb-cream`, etc.

---

## 📄 Pages principales à modifier

| Page | Fichier | Contenu |
|------|---------|---------|
| Accueil | `src/pages/index.astro` | Hero, présentation, cartes séjours |
| Séjour Écriture | `src/pages/sejour-ecriture.astro` | 23-25 oct, tarifs, programme |
| Séjour Lecture | `src/pages/sejour-lecture.astro` | 27-29 nov, tarifs, programme |
| CGV | `src/pages/cgv.astro` | Conditions générales de vente |

---

## 🖼️ Ajouter une image

1. Placer le fichier dans `public/images/`
2. Utiliser dans le .astro : `<img src="/images/nom.jpg" alt="description" />`
3. Builder : `npm run build`
4. Tester : `npm run preview`
5. Déployer : voir WORKFLOW.md
6. Commiter

---

## 💳 Paiements Stripe

Les Payment Links sont **hardcodées** dans les pages (pas d'API backend).

```
Séjour Écriture — Chambre Double
- Une fois (380€) : https://buy.stripe.com/dRmfZg3SYdS4aN9fPpfAc00
- 3x (130€) : https://buy.stripe.com/eVqdR8616bJW08vbz9fAc01

Séjour Écriture — Chambre Individuelle
- Une fois (440€) : https://buy.stripe.com/dRm5kC89e3dq2gD32DfAc03
- 3x (150€) : https://buy.stripe.com/dRm7sKdtyaFS6wT6ePfAc05

Séjour Lecture
- Une fois (380€) : https://buy.stripe.com/14AcN4gFKeW8aN946HfAc04
- 3x (130€) : https://buy.stripe.com/fZu8wOfBG9BOg7teLlfAc02
```

Si besoin de changer un lien, voir `SETUP_STRIPE.md`.

---

## 🎬 Animations GSAP

Les animations sont dans `src/scripts/animations.ts` et appliquées via la classe `.gsap-hidden`.

Ne modifie pas les scripts d'animation sans raison — ils sont complexes et testés.

---

## ✅ Checklist avant chaque push

- [ ] `npm run build` sans erreurs
- [ ] `npm run preview` et tester visuellement
- [ ] Images : vérifie qu'elles chargent en preview
- [ ] Pas de console.log() de debug
- [ ] Git status propre (pas de changements non committés)
- [ ] Message de commit clair et complet
- [ ] Include `Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>` dans le commit

---

## 🆘 Commandes de debug

```bash
# Vérifier les erreurs TypeScript
npm run check

# Voir la structure du projet
tree -L 2 -I 'node_modules|dist'

# Vérifier les images disponibles
ls public/images/

# Vérifier le statut Git
git status
git log --oneline -10

# Vérifier la connexion SSH
ssh -i ~/.ssh/sejours-litteraises root@178.105.41.254 "ls /var/www/sejours-litteraires/"
```

---

## 📞 Points de contact

- **Email client** : Celie.octopuscreatio@gmail.com
- **Domaine** : sejours-litteraires.fr
- **Serveur** : Hetzner CX23 (178.105.41.254)
- **Dépôt GitHub** : https://github.com/Massetho/sejours-litteraines-normandie

---

## 📚 Documentation complète

- **WORKFLOW.md** — Guide complet versionning & déploiement (LIRE EN PREMIER)
- **README.md** — Vue d'ensemble technique
- **DEPLOYMENT_HETZNER.md** — Configuration serveur détaillée
- **SETUP_STRIPE.md** — Configuration paiements
- **TODO.md** — Tâches restantes/en cours

---

## 💡 Astuces

1. **Toujours builder avant de déployer** — `npm run build`
2. **Prévisualise localement** — `npm run preview` pour les changements visuels
3. **Utilise le bon SSH key** — `-i ~/.ssh/sejours-litteraises`
4. **Cherche les exemples** — Y a du code réutilisable dans les .astro existants
5. **Mobile first** — Le site doit marcher sur iPhone/Android
6. **Messages clairs** — Aide à retrouver les changements plus tard

---

**Dernière révision** : 17 juin 2026  
**Projet actif** : Oui

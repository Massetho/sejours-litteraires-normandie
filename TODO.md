# TODO — Tâches restantes avant lancement

## 🚨 Critique

### 1. Configurer Stripe Payment Links

**Fichiers à modifier** :
- `src/pages/sejour-ecriture.astro` (ligne ~215)
- `src/pages/sejour-lecture.astro` (ligne ~247)

**Étapes** :

1. **Créer les Payment Links dans Stripe Dashboard** :
   - Aller sur https://dashboard.stripe.com → Products
   - Créer un produit "Séjour Écriture"
     - Nom : "Séjour Écriture — 23–25 octobre 2026"
     - Tarifs : 380€ et 440€ (ou 130€ et 150€ × 3)
   - Créer un produit "Séjour Lecture"
     - Nom : "Séjour Lecture & Noël — 20–22 novembre 2026"
     - Tarif : 380€ (ou 130€ × 3)
   - Générer les Payment Links (bouton "Create payment link")

2. **Récupérer les URLs Stripe** :
   ```
   Séjour Écriture (double) : https://buy.stripe.com/XXX
   Séjour Écriture (single) : https://buy.stripe.com/YYY
   Séjour Lecture : https://buy.stripe.com/ZZZ
   ```

3. **Mettre à jour les boutons dans le code** :

   **sejour-ecriture.astro** (ligne ~215) :
   ```html
   <a href="https://buy.stripe.com/VOTRE_PAYMENT_LINK_ECRITURE" 
      class="inline-block px-8 py-4 bg-wb-bordeaux text-wb-cream font-montserrat text-sm tracking-widest uppercase hover:bg-wb-gold hover:text-wb-ink transition-colors">
     Je réserve ma parenthèse
   </a>
   ```

   **sejour-lecture.astro** (ligne ~247) :
   ```html
   <a href="https://buy.stripe.com/VOTRE_PAYMENT_LINK_LECTURE" 
      class="inline-block px-8 py-4 bg-wb-bordeaux text-wb-cream font-montserrat text-sm tracking-widest uppercase hover:bg-wb-gold hover:text-wb-ink transition-colors">
     Je réserve ma parenthèse
   </a>
   ```

4. **Tester en sandbox** :
   - Utiliser la carte de test : `4242 4242 4242 4242` (expiration : future, CVC : 123)
   - Voir `SETUP_STRIPE.md` pour plus de détails

---

### 2. Configurer l'appel découverte gratuit (Calendly)

**Fichiers à modifier** :
- `src/pages/sejour-ecriture.astro` (ligne ~218)
- `src/pages/sejour-lecture.astro` (ligne ~250)

**Étapes** :

1. **Créer un événement Calendly** (ou utiliser le lien existant)
   - Aller sur https://calendly.com
   - Créer un événement "Appel découverte gratuit"
   - Durée : 30 min
   - Récupérer le lien : `https://calendly.com/q.thomasset`

2. **Vérifier les liens existants** :
   - Les deux pages pointent déjà vers Calendly (boutons "Appel découverte gratuit")
   - À vérifier que le lien est correct et que Calendly est configuré côté Célie

3. **Optionnel - Ajouter un pré-texte** :
   - Ajouter des infos avant le bouton Calendly (durée, ce qui sera discuté, etc.)

---

## ✅ Fait

- [x] Site déployé sur Hetzner (sejours-litteraires.fr)
- [x] SSL Let's Encrypt activé
- [x] Nginx configuré
- [x] DNS pointant vers le serveur
- [x] Structure de base + pages de vente
- [x] Animations GSAP
- [x] FAQ sections
- [x] Liens gîtes (Monceaux en Bessin + Carcagny)
- [x] Email de contact configuré
- [x] Boutons Calendly pour appel découverte

---

## 📋 Nice to have (optionnel)

- [ ] Analytics (Google Analytics ou Plausible)
- [ ] Formulaire de contact (optionnel, actuellement email direct)
- [ ] Blog ou articles (bibliothérapie)
- [ ] Témoignages des participantes
- [ ] Galerie photos des précédents séjours

---

## 🔍 Checklist avant lancement

- [ ] Stripe Payment Links créés et testés
- [ ] Liens Stripe mis à jour dans le code
- [ ] Boutons "Je réserve" fonctionnels
- [ ] Calendly configuré et testable
- [ ] Site accessible sur https://sejours-litteraires.fr
- [ ] Navigation et animations OK
- [ ] Mobile responsive (iPhone + Android)
- [ ] Tous les liens de gîtes fonctionnels
- [ ] Email de contact valide (Celie.octopuscreatio@gmail.com)

---

## 🚀 Commandes utiles

```bash
# Développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview

# Déployer vers Hetzner (après build)
scp -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/
```

---

## 📞 Contact technique

- **Email Célie** : Celie.octopuscreatio@gmail.com
- **Domaine** : sejours-litteraires.fr
- **Serveur** : Hetzner CX23 (178.105.41.254)
- **Repo** : https://github.com/Massetho/sejours-litteraires-normandie

---

**Date de création** : 12 juin 2026  
**Status** : 🟡 Prêt pour Stripe + Calendly setup

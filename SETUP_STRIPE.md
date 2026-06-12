# Configuration Stripe Payment Links

## 📋 Vue d'ensemble

Option 1 : Stripe Payment Links
- Aucun code nécessaire
- Gestion 100% dans Stripe Dashboard
- Paiement en 3 fois configurable
- Le bouton "Je réserve ma parenthèse" redirige simplement vers le lien

## 🔐 Compte Stripe

### Étape 1 : S'inscrire

1. Aller sur https://stripe.com
2. Cliquer "Créer un compte"
3. Email : celie.octopuscreatio@gmail.com (ou professionnel)
4. Région : France
5. Accepter les conditions

### Étape 2 : Activer le compte

- Vérifier identité (carte d'identité)
- Vérifier domicile (justificatif d'adresse)
- Activer paiements en EUR (Europe)

⏱️ **Délai** : 1-3 jours de validation

---

## 💳 Créer les Payment Links

### Créer le lien pour SÉJOUR ÉCRITURE

**Lieu** : Stripe Dashboard → Payments → Payment Links → Create

**Remplir les champs** :

| Champ | Valeur |
|-------|--------|
| Product name | `Séjour Écriture - 23 au 25 octobre 2026` |
| Description | `Hébergement + repas + ateliers bibliothérapie` |
| Price (USD) | `380 EUR` |
| Tax behavior | `Unspecified` |
| Payment method types | `Card, Bancontact, iDEAL` |

**Installments (Paiement 3x)** :

1. Dans "Payment settings" → Cocher **"Installment plans"**
2. Sélectionner **Klarna/Stripe Installments**
3. Configurer : **3 payments of €130** (ou €150 si chambre simple)
4. Ajouter frais si applicable

**Customer information** :
- ✅ Name
- ✅ Email
- ✅ Billing address

**Success settings** :
- Redirect after payment : `https://parentheses-hiver.fr/` (à adapter)
- Show thank you message

**Cliquer "Save"**

→ **Copier l'URL générée** (ex: `https://buy.stripe.com/cN2XXXXX...`)

### Créer le lien pour SÉJOUR LECTURE

Répéter la même démarche :

| Champ | Valeur |
|-------|--------|
| Product name | `Séjour Lecture - 20 au 22 novembre 2026` |
| Price | `380 EUR` |
| Installments | 3 × €130 |

→ **Copier la seconde URL**

---

## 🔗 Intégrer dans le site

Une fois les 2 URLs Stripe copiées, mettre à jour les boutons :

### Fichier : `src/pages/sejour-ecriture.astro`

Chercher et remplacer :
```html
<!-- AVANT -->
<a href="https://calendly.com/q.thomasset" ...>Je réserve ma parenthèse</a>

<!-- APRÈS -->
<a href="https://buy.stripe.com/cN2XXXXX..." ...>Je réserve ma parenthèse</a>
```

Faire pareil sur **tous les boutons "Je réserve"** (il y en a 3 sur la page) :
- Hero (ligne ~25)
- Section "Pour qui" (ligne ~130)
- Section "Ce que vous gagnez" (implicitement via le même lien)

### Fichier : `src/pages/sejour-lecture.astro`

Même opération avec l'URL du Séjour Lecture.

---

## 🧪 Tester les paiements

1. Build : `npm run build`
2. Preview : `npm run preview`
3. Cliquer le bouton "Je réserve ma parenthèse"
4. Vous êtes redirigé vers la page Stripe
5. Remplir avec une **carte de test Stripe** :
   - Numéro : `4242 4242 4242 4242`
   - Expiration : N'importe (futur)
   - CVC : `424`
5. Valider le paiement

✅ Le paiement apparaît dans Stripe Dashboard

---

## 📊 Gérer les paiements (Dashboard Stripe)

### Recevoir les paiements

Stripe → **Payments** → **Charges**
- Voir tous les paiements reçus
- État, montant, client, date
- Exporter les relevés

### Remboursements

Si une cliente veut annuler :
1. Aller dans "Charges"
2. Chercher la transaction
3. Cliquer "Refund"
4. L'argent revient automatiquement

### Factures/Reçus

Les clients reçoivent automatiquement un email avec :
- Reçu de paiement
- Détails transaction
- Lien de téléchargement PDF

---

## 🔒 Sécurité

✅ **Stripe s'occupe de** :
- Chiffrement SSL/TLS
- Conformité PCI DSS (norme cartes bancaires)
- Protection contre fraude
- Stockage sécurisé cartes

❌ **Vous ne stockez jamais** :
- Les numéros de carte
- Les données sensibles
- Stripe handle tout

---

## 💰 Frais Stripe

Stripe prélève :
- **2,9% + 0,30€** par transaction avec carte
- Gratuit pour paiements en 3x (Klarna)

Exemple : 380€ → **~11€ de frais** → ~369€ reçus

---

## 📝 Checklist déploiement

- [ ] Compte Stripe créé et activé
- [ ] Payment Link Écriture copié
- [ ] Payment Link Lecture copié
- [ ] Boutons mis à jour dans `sejour-ecriture.astro`
- [ ] Boutons mis à jour dans `sejour-lecture.astro`
- [ ] Test paiement en local
- [ ] Build production et déploiement
- [ ] Test paiement en production
- [ ] Vérifier les emails de reçus

---

## 🆘 Troubleshooting

**Q : Le bouton ne redirige pas vers Stripe**  
R : Vérifier l'URL copié est exacte et complète (starts with `https://buy.stripe.com/`)

**Q : Paiement bloqué en test**  
R : Utiliser la carte de test `4242 4242 4242 4242`, pas une vraie carte

**Q : Les clients n'ont pas de reçu**  
R : Vérifier l'email est correct dans les "Payment settings" de Stripe

**Q : Je veux changer le tarif**  
R : Créer un nouveau Payment Link et mettre à jour le bouton


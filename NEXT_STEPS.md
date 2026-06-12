# 🚀 Prochaines étapes — Déploiement live

## ✅ État actuel (12 juin 2026)

Le site **sejours-litteraires.fr** est en ligne et configuré !

```
✅ Domaine : sejours-litteraires.fr + www.sejours-litteraires.fr
✅ DNS : Pointant vers 178.105.41.254 (Hetzner)
✅ SSL : Let's Encrypt (certificat valide jusqu'au 10 sept 2026)
✅ Nginx : Configuré + HTTP → HTTPS redirection
✅ Site : Accessible via https://sejours-litteraires.fr
```

---

## 🎯 À faire maintenant (2-3 heures)

### **1️⃣ Configurer les paiements Stripe**

**Où** : https://dashboard.stripe.com  
**Quoi** : Créer 2 produits + 2 Payment Links

```
Produit 1 : Séjour Écriture
  └─ 380€ chambre double (130€ × 3)
  └─ 440€ chambre single (150€ × 3)

Produit 2 : Séjour Lecture
  └─ 380€ (130€ × 3)
```

**Résultat** : 2 URLs Stripe `https://buy.stripe.com/...`

**Puis** : Mettre à jour le code
```bash
# 1. Modifier sejour-ecriture.astro ligne ~215
# 2. Modifier sejour-lecture.astro ligne ~247
# 3. Remplacer les href par les URLs Stripe
# 4. npm run build
# 5. Pousser vers le serveur
```

Voir `TODO.md` section "Configurer Stripe Payment Links" pour détails.

---

### **2️⃣ Vérifier Calendly**

**Lien actuel** : https://calendly.com/q.thomasset

✅ **À vérifier** :
- [ ] Calendly est configuré du côté de Célie
- [ ] L'événement "Appel découverte gratuit" est créé
- [ ] Les disponibilités sont définies
- [ ] Les emails de confirmation fonctionnent

**Le lien est déjà dans le code**, rien à changer sauf confirmation.

---

### **3️⃣ Tester tout en production**

**Checklist** :

- [ ] Accéder à https://sejours-litteraires.fr → page charge
- [ ] Navigation fonctionne (Écriture, Lecture, CGV)
- [ ] Images chargent correctement
- [ ] Animations GSAP (scroll, hover)
- [ ] Responsive mobile (iPhone + Android)
- [ ] Lien Stripe Payment Link fonctionne (test card 4242...)
- [ ] Lien Calendly fonctionne
- [ ] Email de contact : Celie.octopuscreatio@gmail.com

---

## 📦 Déployer les changements

Après avoir modifié le code (Stripe links) :

```bash
# 1. Build
npm run build

# 2. Envoyer vers le serveur
scp -r dist/* root@178.105.41.254:/var/www/sejours-litteraires/

# Ou avec SSH
ssh -i ~/.ssh/sejours-litteraires root@178.105.41.254 << 'EOF'
cd /var/www/sejours-litteraires
rm -rf *
# Puis copier les fichiers
EOF
```

---

## 📚 Documentation de référence

| Fichier | Contenu |
|---------|---------|
| `README.md` | Vue d'ensemble du projet |
| `TODO.md` | **⭐ Tâches restantes détaillées** |
| `SETUP_STRIPE.md` | Guide Stripe complet |
| `DEPLOYMENT_HETZNER.md` | Configuration serveur |
| `DOMAINE.md` | Configuration DNS |

---

## 🎓 Pour Célie

À passer à Célie pour qu'elle teste le site :

1. **URL du site** : https://sejours-litteraires.fr
2. **Tester un paiement** (utiliser test card) :
   - Numéro : `4242 4242 4242 4242`
   - Expiration : Futur (ex: 12/28)
   - CVC : `123`
3. **Calendly** : Peut prendre un rendez-vous pour tester
4. **Feedback** : Navigation, images, textes, couleurs

---

## 🔐 Sécurité

- ✅ HTTPS/SSL actif
- ✅ Certificat valide
- ✅ Auto-renouvellement Let's Encrypt
- ✅ Headers de sécurité (X-Frame-Options, etc.)
- ✅ Clé SSH configurée (pas d'accès password)

---

## 💾 Backups et maintenance

**Certificat SSL** : Auto-renouvelé tous les 90 jours par Certbot

**Site** : Statique (aucune BDD) → Très stable

**À faire mensuellement** :
- [ ] Vérifier que le site est accessible
- [ ] Tester un paiement Stripe (sandbox)

---

## 🆘 Troubleshooting

| Problème | Solution |
|----------|----------|
| Site inaccessible | Vérifier DNS propagation, Nginx running |
| SSL erreur | Vérifier `/etc/letsencrypt/live/sejours-litteraires.fr/` |
| Stripe ne marche pas | Vérifier la clé API et le Payment Link |
| Images ne chargent pas | Vérifier `/var/www/sejours-litteraires/images/` |

---

**Status** : 🟡 **En attente de configuration Stripe**  
**Prêt pour** : ✅ Production (une fois Stripe configuré)

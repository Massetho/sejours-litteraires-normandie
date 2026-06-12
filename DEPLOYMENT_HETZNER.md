# Déploiement sur Hetzner VPS (CX23)

## OUI, vous pouvez déployer le site !

Votre serveur Hetzner existant peut héberger **2 applications simultanément** :
- linkedin-prospecting (déjà actif)
- sejours-litteraires (nouveau site Astro)

## Architecture

```
Serveur Hetzner CX23 (178.105.41.254)
│
├─ Nginx (reverse proxy)
│  ├─ sejours-litteraires.fr → /var/www/sejours-litteraires/ (site statique)
│  └─ linkedin-prospecting → port 3000 (app existante)
│
└─ Pas de conflit ✓
```

## Prérequis

✓ Accès SSH au serveur
✓ Nginx installé
✓ 40 GB disque disponible (vous en avez)

## 📦 Deployment en 5 étapes

### 1. Build local

```bash
cd SiteWeb/
npm run build
# Génère dist/
```

### 2. Upload sur Hetzner

```bash
# Via rsync (le plus simple)
rsync -avz --delete dist/ root@178.105.41.254:/var/www/sejours-litteraires/
```

### 3. Configuration Nginx

SSH et créer `/etc/nginx/sites-available/sejours-litteraires` :

```nginx
server {
    listen 80;
    server_name sejours-litteraires.fr www.sejours-litteraires.fr;
    root /var/www/sejours-litteraires;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

### 4. Activer et redémarrer

```bash
ln -s /etc/nginx/sites-available/sejours-litteraires \
     /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

### 5. Tester

Navigateur : `http://178.105.41.254` (IP directe pour test)
Ou : `http://sejours-litteraires.fr` (si domaine configuré)

## 🔒 Optionnel : SSL Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot certonly --nginx -d sejours-litteraires.fr
```

## 📝 Plus de détails

Voir le fichier DEPLOYMENT_HETZNER_COMPLET.md pour la config Nginx complète, SSL, monitoring, et troubleshooting.

## 🚀 Vous êtes prêt !

1. Créer un compte Stripe (SETUP_STRIPE.md)
2. Builder le site (`npm run build`)
3. Déployer sur Hetzner (5 étapes ci-dessus)
4. Pointer le domaine vers 178.105.41.254
5. Activer SSL
6. Tester !


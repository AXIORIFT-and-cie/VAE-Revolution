# 📖 GUIDE : Comment ajouter votre logo

Suivez ces étapes simples pour remplacer le logo par votre propre image.

## 🎯 Étape par étape

### 1. Préparez votre image logo
- Ouvrez votre image de logo sur votre PC
- **Important** : Renommez votre fichier en **`logo.png`** (exactement ce nom)
- Formats acceptés : PNG, JPG, JPEG, SVG

### 2. Téléchargez les fichiers du site depuis GitHub
Si vous ne l'avez pas déjà fait :
1. Allez sur : https://github.com/neildjaziri-dotcom/VAE-site-web
2. Cliquez sur la branche : `claude/axiorift-website-015J1YvKJEUQ7qzJ4btai63d`
3. Cliquez sur le bouton vert **"Code"**
4. Choisissez **"Download ZIP"**
5. Décompressez le ZIP sur votre PC

### 3. Ajoutez votre logo
1. Ouvrez le dossier `VAE-site-web` que vous venez de décompresser
2. Naviguez vers : `VAE-site-web/assets/images/`
3. **Copiez** votre fichier `logo.png` dans ce dossier
4. Si on vous demande de remplacer le fichier existant, cliquez **"Oui"**

### 4. Testez sur votre PC
1. Dans le dossier `VAE-site-web`, double-cliquez sur **`index.html`**
2. Votre site s'ouvre dans le navigateur
3. **Votre logo devrait apparaître** en haut et au centre de la page !

### 5. Publiez sur GitHub (optionnel)
Pour mettre à jour le site en ligne :
1. Ouvrez un terminal/invite de commande
2. Naviguez vers le dossier du site :
   ```bash
   cd chemin/vers/VAE-site-web
   ```
3. Ajoutez le logo :
   ```bash
   git add assets/images/logo.png
   git commit -m "Ajout du logo personnalisé"
   git push
   ```

## ❓ Questions fréquentes

**Q : Mon logo n'apparaît pas**
- Vérifiez que le fichier s'appelle **exactement** `logo.png` (pas `Logo.png` ou `logo.PNG`)
- Vérifiez qu'il est bien dans le dossier `assets/images/`

**Q : Mon logo est trop grand/petit**
- Le site adapte automatiquement la taille
- Pour un meilleur rendu, utilisez une image d'au moins 800px de large

**Q : Je veux utiliser un JPG au lieu d'un PNG**
- Renommez votre fichier en `logo.png` ou
- Modifiez `index.html` : changez `logo.png` en `logo.jpg` aux lignes 17 et 27

## 🆘 Besoin d'aide ?
Demandez-moi et je vous guiderai !

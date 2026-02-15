# 🌾 AgriClair - Prototype

**Plateforme digitale de conseil aux exploitations agricoles**

AgriClair aide les agriculteurs à simplifier leurs démarches administratives, juridiques, fiscales et sociales grâce à des outils digitaux accessibles 24/7.

## 📋 Contenu du prototype

Ce prototype inclut :

- ✅ **Page d'accueil** : Présentation de la plateforme et des offres
- ✅ **Simulateur fiscal** : Comparaison Micro-BA / Réel Simplifié / Réel Normal
- ✅ **Comparateur juridique** : EARL, GAEC, SCEA, Exploitation individuelle
- ✅ **Configuration centralisée** : Mise à jour facile des données fiscales

## 🚀 Déploiement

Ce site est conçu pour être déployé gratuitement sur Netlify ou Vercel.

**URL du site :** [À compléter après déploiement]

Consultez le fichier `GUIDE_DEPLOIEMENT.md` pour des instructions détaillées.

## 🔧 Mise à jour des données

Toutes les données fiscales et juridiques sont centralisées dans `agriclair_config.js`.

Pour mettre à jour (par exemple suite à une loi de finances) :

1. Ouvrez `agriclair_config.js`
2. Modifiez les valeurs concernées
3. Mettez à jour `meta.version` et `meta.dateMiseAJour`
4. Commit → Le site se met à jour automatiquement

### Exemple : Changer le plafond Micro-BA

```javascript
// Dans agriclair_config.js
microBA: {
  plafondCA: 95000,  // Modifié de 91900 à 95000
  // ...
}
```

## 📊 Données fiscales actuelles (2026)

- **Barème IR** : 0%, 11%, 30%, 41%, 45%
- **Plafond Micro-BA** : 91 900€
- **Taux abattement Micro-BA** : 87%
- **Cotisations MSA** : ~11% (Micro-BA), ~45% (Réel)

## 🎯 Objectifs des tests

1. Valider l'utilité des simulateurs
2. Identifier les fonctionnalités manquantes
3. Tester la compréhension de l'interface
4. Mesurer l'intérêt pour les offres payantes

## 💬 Feedback

Les retours utilisateurs sont collectés via [Lien Google Form à ajouter]

## 📝 Statut du projet

- **Version** : 1.0.0 (Prototype)
- **Date** : Février 2026
- **Statut** : Phase de test utilisateur
- **Prochaine étape** : MVP avec authentification et paiement

## 🛠️ Technologies

- HTML5 / CSS3
- JavaScript vanilla (pas de framework)
- Configuration centralisée
- Responsive design

## 📄 Licence

Tous droits réservés - AgriClair 2026

---

**Développé avec ❤️ pour aider les agriculteurs français**
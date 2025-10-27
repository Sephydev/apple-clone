# 🍏 Apple Clone - React Three Fiber & GSAP

![Screenshot](/screenshot.png)

Un clone du site Apple (section produit) réalisé dans le cadre d'un projet d'apprentissage.
L'objectif principal était de comprendre comment intégrer des modèles 3D et des animations  complexes dans une application React moderne.

🔗 **Live Demo:** [Apple Clone](https://apple-clone-kappa-sable.vercel.app/) 
📦 **Stack principale :** React, Three.js, GSAP, Zustand, TailwindCSS

---

## 🚀 Objectifs du projet

- Approfondir mes connaissances de Three.js pour intégrer des modèles `.glb` interactifs.
- Utiliser **GSAP** pour des animations fluides.
- Gérer des états globaux (comme la couleur, la taille, ou la vidéo du modèle 3D) via **Zustand**.
- Assurer un rendu **responsive et optimisé** avec **TailwindCSS**.
- Déployer un projet professionnel avec **Vercel**.

---

## 🧠 Ce que j'ai appris

- Initialiser la caméra via les attributs de `<Canvas><Canvas />`
- Gérer des animations synchronisées DOM + 3D avec **GSAP**.
- Créer un **store global** avec Zustand pour partager des états entre composants.
- Optimiser des modèles `.glb` grâce à l'option `-T` de `gltfjsx` pour réduire la taille des assets.
- Adapter des animations en fonction de la taille d'écran avec `react-responsive`.

---

## 🧩 Stack technique

| Technologie     | Rôle                             |
|-----------------|----------------------------------|
| **React**       | Structure de l'app et composants |
| **Three.js**    | Intégration de modèles 3D        |
| **GSAP**        | Animations                       |
| **Zustand**     | Gestion d'état globale           |
| **TailwindCSS** | Mise en page responsive          |
| **Vite**        | Outil de build et dev server     |
| **Vercel**      | Déploiement                      |

---

## 💡 Fonctionnalités clés

- 🎨 Personnalisation en temps réel de certains modèles 3D
- 🌀 Animation synchronisée au scroll
- 📱 Responsive complet
- ⚙️ Optimisation des modèles 3D
- 🚀 Déploiement automatisé via GitHub -> Vercel

---

## 🧩 Défis rencontrés

- **Positionnement des éléments lors des animations GSAP** (résolu après analyse du CSS et des propriétés de ScrollTrigger)
- **Performance des modèles 3D lourds** (solution : conversion optimisée via `gltfjsx -T`)

## 🔄 Améliorations possibles

- Ajouter un **thème clair/sombre**
- Proposer un *switch de langue (FR/EN)**

## 💬 Note personnelle

> Ce projet fait partie d'une série de projets tutoriels issus de la playlist [JSMastery - GSAP & Three.js](https://youtube.com/playlist?list=PL6QREj8te1P7d4j3k8Snfa187o-IjXuJx&si=1GRBOz5RZXWt2gaj)
> J'ai choisi de suivre ces tutos pour renforcer mes compétences techniques et de perfectionner mes bonnes pratiques de développement.

---

## 🧑‍💻 Auteur

**Sephydev**
🐙 [GitHub](https://github.com/Sephydev)

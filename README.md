# distribution-optimizer

## Cadre Logique et Fonctionnel du Projet de Distribution

### 1. Objectifs et Besoins

**Objectifs:**

* **Simplifier et optimiser la distribution de biens aux bénéficiaires.**
* **Améliorer la transparence et le suivi des distributions.**
* **Assurer une gestion efficace des stocks et des rations.**

**Besoins:**

* **Système de gestion d'utilisateurs avec rôles et permissions.**
* **Création et gestion de plans de distribution.**
* **Gestion des stocks et des articles à distribuer.**
* **Définition des rations et des stratégies de distribution.**
* **Suivi des distributions en temps réel.**
* **Synchronisation des données entre l'administration et les distributeurs.**

### 2. Fonctionnalités Principales

**A. Partie Administration:**

* **Authentification et Gestion des Utilisateurs:**
    * Connexion avec authentification.
    * Création et modification de comptes utilisateurs.
    * Gestion des rôles et permissions (admin, distributeur, etc.).
* **Gestion des Plans de Distribution:**
    * Création et modification de plans de distribution.
    * Définition des sites/communautés de distribution.
    * Sélection ou ajout d'articles à distribuer.
    * Configuration des rations par article et par site/communauté.
    * Définition des périodes de distribution.
    * Gestion des images et des listes des bénéficiaires.
    * Assignation des distributeurs aux plans de distribution.
* **Dashboard:**
    * Vue d'ensemble des plans de distribution en cours.
    * Statistiques globales sur les distributions.
    * Notifications et alertes.

**B. Partie Client (Distributeur):**

* **Authentification:**
    * Connexion avec des crédentiels définis par l'administration.
* **Dashboard:**
    * Accès aux plans de distribution assignés.
    * Affichage des informations sur les plans de distribution.
    * Téléchargement de la liste des bénéficiaires.
* **Gestion de la Distribution:**
    * Sélection de la stratégie de distribution (sexe, responsabilité, intervalle).
    * Verrouillage d'un intervalle de la liste des bénéficiaires.
    * Upload du fichier verrouillé en cache chiffré et zippé.
    * Statistiques sur l'intervalle verrouillé.
    * Page de distribution avec :
        * Scan du QR code du bénéficiaire.
        * Recherche du QR code dans la liste des bénéficiaires.
        * Affichage des informations et de l'image du bénéficiaire.
        * Impression du voucher.
        * Capture photo.
* **Synchronisation des Données:**
    * Synchronisation des données de distribution avec l'administration.
    * Envoi des images capturées.
* **Suivi de la Distribution:**
    * Affichage des statistiques de distribution (globales et partielles).
    * Suivi des articles distribués et du reste à distribuer.

### 3. Architecture Technique

* **Serveur d'application:** Python (Flask, Django, etc.)
* **Base de données :PostgreSQL.
* **Frontend:** HTML, CSS, JavaScript (React)
* **Mécanismes de sécurité:** Authentification, HTTPS, cryptage des données sensibles.
* **Interface de distribution:**application web responsive.

### 4. Déroulement du Projet

* **Phase de conception:**
    * Etablir les spécifications détaillées des fonctionnalités.
    * Créer les modèles de données pour la base de données.
    * Concevoir l'interface utilisateur ().
* **Phase de développement:**
    * Implémenter le backend en Python.
    * Développer le frontend en HTML, CSS, JavaScript.
    * Mettre en place la sécurité et la gestion des utilisateurs.
    * Intégrer les API pour la communication entre le frontend et le backend.
* **Phase de test:**
    * Tests unitaires et d'intégration.
    * Tests de performance et de sécurité.
* **Phase de déploiement:**
    * Déployer l'application sur un serveur web.
    * Configurer la base de données.
    * Former les utilisateurs.
* **Phase de maintenance:**
    * Surveillance de l'application.
    * Correction des bugs et des problèmes.
    * Mise à jour de l'application.

créer un frontend 


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/distribution-optimizer.git
cd distribution-optimizer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

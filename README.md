# 🚀 Projet Web-DAC (Gestion & Cotation)

Bienvenue sur le dépôt du projet **Web-DAC**. Cette application est construite avec **Next.js** (App Router) et gérée via **pnpm**. Elle centralise la gestion des calendriers et des grilles de cotation.

## 🛠 Stack Technique

* **Framework :** [Next.js 15+](https://nextjs.org/)
* **Package Manager :** [pnpm](https://pnpm.io/)
* **Styling :** Tailwind CSS (v4)
* **Langage :** TypeScript / JavaScript

---

## ⚙️ Configuration Locale

### 1. Prérequis

Assurez-vous d'avoir installé **Node.js** (LTS recommandé) et **pnpm**.

```bash
npm install -g pnpm

```

### 2. Installation

Clonez le projet et installez les dépendances :

1. Faites un **Fork** du projet sur GitHub vers votre compte personnel.
2. Clonez votre fork localement :
```bash
git clone https://github.com/VOTRE-NOM/web-dac.git

```

### 3. Variables d'environnement

Créez un fichier `.env.local` à la racine et configurez les clés nécessaires (API URL, etc.) :

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000

```

### 4. Lancement

Lancez le serveur de développement :

```bash
pnpm dev

```

L'application sera accessible sur [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

---

## 📁 Structure du Projet

```text
app/
├── (auth)/          # Pages d'authentification
└── page.tsx         # Dashboard principal

```
---

## 🤝 Workflow de Contribution

## 🍴 Flux de travail (Fork & Pull Request)

Pour contribuer au projet, nous utilisons le workflow "Fork & Pull". Voici les étapes obligatoires :

### 1. Préparation du Fork

1. Faites un **Fork** du projet sur GitHub vers votre compte personnel.
2. Clonez votre fork localement :
```bash
git clone https://github.com/VOTRE-NOM/web-dac.git

```


3. Ajoutez le dépôt officiel comme source distante nommée `upstream` :
```bash
git remote add upstream https://github.com/Mayisha-Solutions/web-dac.git

```



### 2. Travailler sur une fonctionnalité

Avant de créer une branche, assurez-vous d'être à jour avec le `main` officiel :

```bash
git checkout main
git pull upstream main
git push origin main

```

Ensuite, créez votre branche de travail :

```bash
git checkout -b feature/nom-de-votre-tache

```

### 3. Rester à jour pendant le développement

Si d'autres collaborateurs ont fusionné des changements sur le `main` officiel pendant que vous travaillez, synchronisez votre branche pour éviter les conflits au moment de la PR :

```bash
git fetch upstream
git rebase upstream/main

```

### 4. Soumettre vos modifications

1. Poussez vos modifications sur **votre** fork :
```bash
git push origin feature/nom-de-votre-tache

```


2. Allez sur GitHub et ouvrez une **Pull Request** vers la branche `main` du dépôt `Mayisha-Solutions/web-dac`.

---

## ⚠️ Règles d'or pour les collaborateurs

* **Zéro commit sur `main` :** Ne travaillez jamais directement sur la branche `main` de votre fork. Utilisez toujours des branches thématiques.
* **Rebase avant PR :** Avant de soumettre une Pull Request, faites toujours un `rebase` sur `upstream/main` pour garantir un historique propre.
* **Messages de commit :** Soyez clairs (ex: `feat: ajout de la colonne examen dans la grille`).

---

### Standards de Code

* **Mode Clair :** L'application est forcée en **Light Mode**. N'utilisez pas les classes `dark:`.
* **Composants :** Utilisez `"use client"` uniquement pour les composants nécessitant de l'interactivité (grilles, boutons).

---

## 📦 Scripts Utiles

* `pnpm dev` : Lance le serveur de dev.
* `pnpm build` : Prépare l'application pour la production.
* `pnpm start` : Lance l'application buildée.
* `pnpm lint` : Vérifie la qualité du code.

---
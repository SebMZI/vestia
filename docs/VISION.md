# Vestia

## Introduction

### Document Goal

This document defines the vision and objectives of the Vestia project. It establishes a shared understanding between all stakeholders, formalizes the functional scope, and serves as a reference throughout the development process.

### Definitions

A **User** is any person registered on the instance.
A **Board** is a set of columns, each composed by cards.
A **Column** is a part of a board, A board can contain multiple columns.
A **Card** is an object describing a task of a project.
A **Super Admin** is the highest role on the application and holds all permissions and manages the instance.
An **Admin** is a role with significant permissions.
A **Member** is a role with permissions defined by the Admin.
A **Tag** is a quick and simple way to identify a card.
A **Role** is an object that give limited permissions to a user.
A **Permission** allows the user to do something that he was originally not able to do.
A **Webhook** is a URL linked to a Discord channel.
An **Invite** is a link created by a super admin or an admin allowing someone to join a board
A **Notification** is an internal alert sent to a member when a relevant event occurs, such as being assigned to a card.

### References

- Dictionnary.md
- Permissions.md
- Requirements.md
- System use case diagram.png
- Use case diagram.jpg

## Positioning

### Business Opportunity

In an increasingly uncertain world, privacy has become a growing concern for individuals and organizations alike. The rise of the homelab community reflects a broader desire to regain control over personal and professional data. Project management tools such as Trello or Jira are widely used but store data on third-party servers, leaving users with no control over their own. Vestia addresses this gap by offering a self-hosted alternative that combines usability with data sovereignty.

Artificial intelligence has become a major topic, fueled by an intense race between companies to build the most powerful models. Training these models requires vast amounts of data, which is often collected from the internet without explicit user consent. Companies such as OpenAI or Anthropic rely on this data to improve their models, meaning that content stored on third-party platforms could potentially be used for AI training purposes. Users should have the right to decide what happens to their data — Vestia ensures that project data stays on your own infrastructure, away from any third-party collection, AI training, or any political behaviors.

### Problem Positioning

A developer or any company would use Trello for example to store and manage their personal or professional projects. This data is stored on American third-party servers, under Atlassian's Terms of Service, and could potentially be used for AI training purposes. The core problem is the lack of full control over your own data and how it is used.

### Product Positioning

For the developer or company managing personal or professional projects on third-party servers, Vestia is the solution. It is a self-hosted Kanban task manager that gives you full control over your own data. Unlike Trello or other project management tools, Vestia runs on your own infrastructure — deployed in minutes via Docker and Docker Compose on any machine of your choice. Your data stays where you decide, free from third-party collection, AI training, and political decisions. You are the only master of your data. Because privacy matters.

### Alternatives

| Tool      | Description                                      | Limitation vs Vestia                                                     |
| --------- | ------------------------------------------------ | ------------------------------------------------------------------------ |
| Trello    | Cloud-based Kanban tool by Atlassian             | Data stored on American servers, subject to Atlassian's ToS              |
| Planka    | Self-hosted Kanban board, Trello-like UI         | Limited features, no webhook support, no custom roles                    |
| Nextcloud | Self-hosted productivity suite with a Kanban app | Kanban is a secondary feature, not the core product — UI feels secondary |
| Wekan     | Open-source self-hosted Kanban                   | Outdated UI, poor user experience, limited active development            |
| Taiga     | Open-source project management tool              | Complex to self-host, heavier than needed for a simple Kanban use case   |
| Kanboard  | Minimalist self-hosted Kanban                    | Very basic UI, no modern design, limited collaboration features          |
| Linear    | Modern cloud project management tool             | Cloud only, no self-hosting option, data stored on third-party servers   |

## Description

### Stakeholders

Vestia is an open source project. As such, it has two types of stakeholders: those who define the needs (MOA) and those who build the product (MOE). Both roles are initially held by the same person, but the open source nature of the project means that anyone can contribute as MOE and any self-hosting user becomes a de facto MOA.

### Users

Vestia targets various types of users.

Companies and teams looking to manage their projects without paying for expensive subscriptions or giving up control of their data. Homelab enthusiasts who value privacy and prefer to keep their data on their own infrastructure. Developers who want a clean, modern and intuitive interface to organise their personal or professional projects.

What these users have in common is a desire for sovereignty — the ability to decide where their data lives and who has access to it.

### User Environment

Vestia is a self-hosted solution that can run on a personal server, a NAS, or a VPS. Users access Vestia through a web browser from any device, using either the IP address of the host machine or a domain name for simplified access.

Vestia is installed via Docker and a Docker Compose file. Basic knowledge of Linux and Docker is required for the initial setup, but daily usage only requires a web browser — no technical background needed.

Vestia is accessible from the local network or from the internet via a configured domain name.

## Essential Functionalities

### Manage board

Vestia allows users to create and manage multiple boards, each representing a project. A board contains columns and cards that reflect the current state of the project. Boards are created by the Superadmin and managed by Admins. To simplify onboarding, Superadmins and Admins can generate shareable invite links, allowing new members to join a board directly without requiring manual assignment. Invite links can be configured with an expiration date and a maximum number of uses to maintain security.

### Manage users

Vestia provides two levels of user management. At the instance level, the Superadmin can add, edit, and remove users from the entire Vestia instance, and control whether public registration is enabled. At the board level, Admins can assign and remove members from their boards, and control what role each member holds. Beyond the default roles — Admin and Member — the Superadmin can create custom roles and assign them specific permissions, allowing fine-grained access control adapted to any workflow.

### Manage instance

Vestia allows the Superadmin to configure the instance to match their infrastructure. This includes setting up a domain name to enable shareable invite links, configuring an SMTP server to enable email notifications, and controlling whether public registration is open or restricted.

### Manage columns

Vestia allows Superadmins and Admins to fully manage the columns of a board. Columns can be created, renamed, reordered, and deleted to reflect the workflow of the project. Each column represents a status and contains the cards associated with that stage.

### Manage cards

Vestia provides a comprehensive card management system. Admins can create cards to set up the project structure, while Members can interact with them according to their permissions — moving cards between columns to reflect progress, editing titles and descriptions, assigning cards to responsible members, setting due dates, and archiving or deleting cards when no longer needed.

### Manage tags

Tags provide a quick and visual way to categorise cards on a board. Superadmins and Admins can create, edit, and delete tags, defining a name and a color for each. Members can then add or remove tags on cards to identify their nature or priority at a glance.

## Outside Perimeter

The following features are explicitly out of scope for the current version of Vestia. They may be considered for future releases.

- **Single Sign-On (SSO)** — Authentication via third-party identity providers is not supported in this version.

- **Two-Factor Authentication (2FA)** — Additional login security via 2FA will not be implemented at this stage.

- **Card comments** — Members will not be able to leave comments under cards in this version.

- **File attachments** — Attaching files to cards is not supported. This feature would require additional storage management and is deferred to a future release.

- **Card history** — Tracking changes made to a card over time will not be available in this version.

## Constraints

### Timeline

Vestia's MVP must be completed by mid-September 2025, ahead of the certification presentation scheduled for September 23-24, 2025. Development takes place alongside a training program, limiting available time.

### Team

Vestia is primarily developed by a single developer, with occasional contributions from an external collaborator. As an open source project, additional contributors may join via GitHub at any time.

### Budget

The project has no allocated budget. All tools, frameworks, and infrastructure used must be free and open source.

### Technical

| Layer      | Technology        | Justification                                 |
| ---------- | ----------------- | --------------------------------------------- |
| Frontend   | Angular           | In training stack, strengthens portfolio      |
| Backend    | Node.js / Express | Already in stack, fast to prototype           |
| Database   | PostgreSQL        | Open source, robust, standard for self-hosted |
| Deployment | Docker / Compose  | Easy to deploy, cross-platform                |

The application must be fully deployable via Docker Compose on any machine running Docker, without requiring any cloud infrastructure.

### Privacy and Security

Vestia is designed to guarantee data privacy by construction. All data is stored exclusively on the machine where Vestia is hosted — whether it is a personal server, a NAS, or a VPS chosen by the user. No data is ever sent to or stored on third-party servers. The user has full control over their infrastructure and therefore full control over their data.

## Other Product Requirements

### 7.1 Ergonomics

Vestia's interface is designed to be clean and minimalist, prioritizing clarity over complexity. The application must be fully responsive and usable on any device — desktop, tablet, or mobile — through a web browser.

### 7.2 Performance

The application must respond to user interactions in under 2 seconds under normal usage conditions. This applies to page loads, board rendering, and card operations.

### 7.3 Robustness

In the event of a crash or server reboot, Docker's restart policy ensures Vestia automatically restarts without manual intervention. All data is persisted in the PostgreSQL database and survives any restart without data loss.

### 7.4 Security

Vestia implements the following security measures :

- **JWT authentication** — all API requests require a valid
  JSON Web Token
- **Password hashing** — passwords are never stored in plain text and must be hashed using a secure algorithm such as bcrypt

- **Self-hosted by design** — no data ever leaves the user's own infrastructure

### 7.5 Applicable Standards

- **REST API** — the backend exposes a RESTful API following standard HTTP conventions
- **Conventional Commits** — all commits must follow the Conventional Commits specification and be signed

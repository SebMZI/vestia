# Vestia

## Introduction

### Document Goal

This document defines the vision and objectives of the Vestia project. It establishes a shared understanding between all stakeholders, formalizes the functional scope, and serves as a reference throughout the development process.

### Definitions

A **User** is any person who has created an account on the instance.
A **Board** is a set of columns, each composed of cards.
A **Column** is a part of a board. A board can contain multiple columns.
A **Card** is an object describing a task of a project.
A **Super Admin** is the highest role on the application and holds all permissions and manages the instance.
An **Admin** is a role with significant permissions.
A **Member** is a role with permissions defined by the Admin.
A **Tag** is a quick and simple way to identify a card.
A **Role** is an object that gives limited permissions to a user.
A **Permission** allows the user to do something that they were originally not able to do.
A **Webhook** is a URL linked to a software such as Discord, Slack, or other external services, configured at the board level to send notifications to a chosen channel.
An **Invite** is a link created by a Super Admin or an Admin allowing someone to join a board. The invited person must have an account on the instance — either created beforehand or via the instance's registration URL — before they can be assigned to a board, whether through an invite link or manually by an Admin or Super Admin.
A **Notification** is an alert sent to a member when a relevant event occurs, such as being assigned to a card. Notifications are delivered internally within the application. If a webhook is configured on the board, the same notification is also sent to the configured external channel.
A **Comment** is a message written by an authorized member on a card.
A **History** is the chronological log of all actions performed on a card, visible to all members of the board.

### References

- Dictionnary.md
- Permissions.md
- Requirements.md
- System use case diagram
- Use case diagram

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

### Authentication

Vestia provides a complete authentication system accessible to all users.

Any person can create an account on the instance via the registration page, provided public registration is enabled by the Super Admin. Once registered, a user can log in with their credentials and log out at any time.

If a user forgets their password, they can request a reset by email. Vestia will send a reset link to their registered email address. This feature requires a valid SMTP configuration on the instance. If SMTP is not configured, password reset by email is unavailable.

The Super Admin can also reset any user's password manually from the instance administration interface, regardless of SMTP configuration.

### Manage Boards

Vestia allows users to create and manage multiple boards, each representing a project. A board contains columns and cards that reflect the current state of the project. Boards are created by the Super Admin and managed by Admins.

To simplify onboarding, Super Admins and Admins can generate shareable invite links, allowing new users to join a board directly. To use an invite link, the user must already have an account on the instance or create one via the instance's registration URL. Once registered, they can use the invite link or be manually assigned to a board by an Admin or Super Admin. Invite links can be configured with an expiration date and a maximum number of uses to maintain security.

Each board can be configured with a webhook URL pointing to an external service such as Discord or Slack. When configured, board-level notifications are forwarded to the chosen channel in addition to being delivered internally.

### Manage Users

Vestia provides two levels of user management.

At the instance level, the Super Admin can add, edit, and remove users from the entire Vestia instance, and control whether public registration is enabled.

At the board level, Admins can assign and remove members from their boards, and control what role each member holds. Beyond the default roles — Admin and Member — the Super Admin can create custom roles and assign them specific permissions, allowing fine-grained access control adapted to any workflow.

### Manage Instance

Vestia allows the Super Admin to configure the instance to match their infrastructure. This includes setting up a domain name to enable shareable invite links, configuring an SMTP server to enable email notifications, and controlling whether public registration is open or restricted.

### Manage Columns

Vestia allows Super Admins and Admins to fully manage the columns of a board. Columns can be created, renamed, reordered, and deleted to reflect the workflow of the project. Each column represents a status and contains the cards associated with that stage.

### Manage Cards

Vestia provides a comprehensive card management system. Admins can create cards to set up the project structure, while Members can interact with them according to their permissions — moving cards between columns to reflect progress, editing titles and descriptions, assigning cards to responsible members, setting due dates, archiving, and deleting cards when no longer needed.

Members with the appropriate permission can post comments on a card. All comments are visible to every member of the board. Every action performed on a card is recorded in the card's history, which is visible to all members of the board regardless of their role.

Archiving a card is a soft-delete mechanism. When a card is archived, it is hidden from the board view but not permanently deleted. Its full state at the time of archiving — title, description, assignees, tags, comments, and history — is preserved. The archive section is hidden by default and must be explicitly accessed by an Admin or Super Admin. From this view, any archived card can be restored to its original state, or permanently deleted if no longer needed. Members do not have access to the archive section.

### Manage Tags

Tags provide a quick and visual way to categorise cards on a board. Super Admins and Admins can create, edit, and delete tags, defining a name and a color for each. Members can then add or remove tags on cards according to their permissions, to identify their nature or priority at a glance.

### Manage Custom Roles

Beyond the default Admin and Member roles, the Super Admin can create custom roles and assign them a specific set of permissions. Custom roles are scoped to the instance and can be assigned to any member of any board. This allows fine-grained access control adapted to any workflow or organizational structure.

### Notifications

Vestia notifies members when relevant events occur, such as being assigned to a card or receiving a comment. Notifications are delivered internally within the application. If a webhook has been configured on the board, the same notification is also forwarded to the designated external channel (Discord, Slack, or any compatible service).

## Outside Perimeter

The following features are explicitly out of scope for the current version of Vestia. They may be considered for future releases.

- **Single Sign-On (SSO)** — Authentication via third-party identity providers is not supported in this version.
- **Two-Factor Authentication (2FA)** — Additional login security via 2FA will not be implemented at this stage.
- **File attachments** — Attaching files to cards is not supported. This feature would require additional storage management and is deferred to a future release.
- **Discussion Board** — A dedicated discussion space where users can communicate outside of cards is not part of this version.
- **Workspaces** — The ability to group boards into workspaces is not supported in this version. In a future release, a workspace would act as a container for multiple boards, allowing teams to organise their projects under a common space.
- **Cross-board card migration** — Moving a card from one board to another is not supported in this version. This feature would require cross-board permission resolution and is deferred to a future release.
- **Card filtering** — Filtering cards on a board or within a column by tag, due date, assignee, or any other attribute is not supported in this version and is deferred to a future release.

## Constraints

### Timeline

Vestia's MVP must be completed by mid-September 2025, ahead of the certification presentation scheduled for September 23–24, 2025. Development takes place alongside a training program, limiting available time.

### Team

Vestia is primarily developed by a single developer, with occasional contributions from an external collaborator. As an open source project, additional contributors may join via GitHub at any time.

### Budget

The project has no allocated budget. All tools, frameworks, and infrastructure used must be free and open source.

### Technical

| Layer      | Technology       | Justification                                 |
| ---------- | ---------------- | --------------------------------------------- |
| Frontend   | Angular, zardui  | In training stack, strengthens portfolio      |
| Backend    | NestJS, TypeORM  | Same structure as Angular                     |
| Database   | PostgreSQL       | Open source, robust, standard for self-hosted |
| Deployment | Docker / Compose | Easy to deploy, cross-platform                |

The application must be fully deployable via Docker Compose on any machine running Docker, without requiring any cloud infrastructure.

### Privacy and Security

Vestia is designed to guarantee data privacy by construction. All data is stored exclusively on the machine where Vestia is hosted — whether it is a personal server, a NAS, or a VPS chosen by the user. No data is ever sent to or stored on third-party servers. The user has full control over their infrastructure and therefore full control over their data.

## Other Product Requirements

### Ergonomics

Vestia's interface is designed to be clean and minimalist, prioritizing clarity over complexity. The application must be fully responsive and usable on any device — desktop, tablet, or mobile — through a web browser.

### Performance

The application must respond to user interactions in under 2 seconds under normal usage conditions. This applies to page loads, board rendering, and card operations.

### Robustness

In the event of a crash or server reboot, Docker's restart policy ensures Vestia automatically restarts without manual intervention. All data is persisted in the PostgreSQL database and survives any restart without data loss.

### Security

Vestia implements the following security measures:

- **JWT authentication** — all API requests require a valid JSON Web Token
- **Password hashing** — passwords are never stored in plain text and must be hashed using a secure algorithm such as bcrypt
- **Self-hosted by design** — no data ever leaves the user's own infrastructure

### Applicable Standards

- **REST API** — the backend exposes a RESTful API following standard HTTP conventions
- **OpenAPI / Swagger** — the REST API is documented automatically and accessible via a Swagger interface, generated by NestJS
- **Conventional Commits** — all commits must follow the Conventional Commits specification and be signed
- **Semantic Versioning (SemVer)** — project releases follow the MAJOR.MINOR.PATCH versioning convention, consistent with the Conventional Commits specification
- **OWASP Top 10** — development takes into account the most common vulnerabilities identified by the OWASP, including SQL injection prevention, JWT token handling, and password hashing

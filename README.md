# VESTIA

[![GitHub release](https://img.shields.io/github/v/release/SebMZI/vestia)](https://github.com/SebMZI/vestia/releases) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)](https://angular.io) [![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org) [![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com)

Vestia is a self-hosted and open-source task manager created from the idea of data sovereignty. Project management tools such as Trello or Jira are widely used but store data on third-party servers, leaving users with no control over their own. Vestia addresses this gap by offering a self-hosted alternative that combines usability with data sovereignty.

## Table of contents

1. [Tech Stack](#tech-stack)
2. [Contributing](#contributing)
3. [License](#license)
4. [Roadmap](#roadmap)
5. [Documentation](docs)
   1. [Vision Doc](docs/VISION.md)
   2. [Requirements](docs/REQUIREMENTS.md)
   3. [Permissions](docs/PERMISSIONS.md)
   4. [Data dictionary](docs/DICTIONARY.md)
   5. [SQL Schema](docs/schema.sql)
   6. [Diagrams](docs/diagrams)
      1. [UML no system use case](docs/diagrams/UML/diag_uml_no_system_use_case.png)
      2. [UML system use case](docs/diagrams/UML/diag_uml_system_use_case.png)
      3. [UML class](docs/diagrams/UML/diag_uml_class.jpg)
      4. [MCD](docs/diagrams/DATAMODELER/MCD.png)
      5. [MRD](docs/diagrams/DATAMODELER/MRD.png)
      6. [KANO](docs/diagrams/Diagramme%20de%20kano.ods)

## Tech Stack

| Layer      | Technology       | Justification                                 |
| ---------- | ---------------- | --------------------------------------------- |
| Frontend   | Angular, zardui  | In training stack, strengthens portfolio      |
| Backend    | NestJS, TypeORM  | Same structure as Angular                     |
| Database   | PostgreSQL       | Open source, robust, standard for self-hosted |
| Deployment | Docker / Compose | Easy to deploy, cross-platform                |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/) specification
4. All commits must be GPG-signed (`git commit -S -m "feat: your message"`)
5. Open a pull request targeting the `dev` branch

Please make sure your changes are consistent with the existing code style and documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
MIT License has been chosen to let developers use the source code freely.

## Roadmap

- [x] Conception
  - [x] UML diagrams
  - [x] MCD / MRD
  - [x] SQL Schema
- [ ] Figma Design
- [ ] Backend (NestJS)
- [ ] Frontend (Angular)
- [ ] Tests
- [ ] Deployment (Docker Compose)

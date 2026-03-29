## Data Dictionnary

---

| Name              | Type                | Description                                                                                                                           | Constraint  |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| User              | Entity              | A user represents the user of the app. A user can be a super admin, an admin or a member (By Default), but other roles can be created |             |
| idUser            | Attribut (N entier) | User id                                                                                                                               | Automatique |
| Notification      | Entity              | An internal alert sent to a member when a relevant event occurs in Vestia, such as being assigned to a card                           |             |
| Board             | Entity              | A board is a set of column, each composed by cards. A board is a project created by a super admin                                    |             |
| Column            | Entity              | A column is part of a board, they can be multiples and are defined by a title representing a status. They are composed of cards       |             |
| Card              | Entity              | A card is an object describing a task of a project. Defined by a title and a descripion                                               |             |
| Tag               | Entity              | A tag can be added to a card to give a quick and more simple description that members understand rapidly                              |             |
| Role              | Entity              | A role is assigned to a member giving him permissions                                                                                 |             |
| Permission        | Entity              | A permission allows the member that has it to do something he was originally not able to do                                           |             |
| Webhook           | Entity              | A URL linked to a Discord Channel, triggered automatically when a specific event occurs on a board                                    |             |
| Invite            | Entity              | An invite is a link created by a super admin or an admin allowing someone to join a board                                             |             |
| Instance settings | Entity              | Represents the global configuration of the Vestia instance, including domain name, SMTP settings, and registration policy etc...      |             |

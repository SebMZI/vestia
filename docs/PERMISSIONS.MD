## Permissions

---

### Legend

| Symbol | Meaning                                     |
| ------ | ------------------------------------------- |
| ✔️     | Always granted, cannot be changed           |
| ⚙️     | Configurable — depends on the assigned role |
|        | Never granted                               |

---

### Default roles

| Action                 | Superadmin | Admin | Member |
| ---------------------- | ---------- | ----- | ------ |
| Create board           | ✔️         |       |        |
| Edit board             | ✔️         | ✔️    |        |
| Delete board           | ✔️         |       |        |
| Generate invite link   | ✔️         | ✔️    |        |
| Assign user to board   | ✔️         | ✔️    |        |
| Remove user from board | ✔️         | ✔️    |        |
| Create column          | ✔️         | ✔️    |        |
| Edit column            | ✔️         | ✔️    |        |
| Reorder columns        | ✔️         | ✔️    |        |
| Delete column          | ✔️         | ✔️    |        |
| Create card            | ✔️         | ✔️    | ⚙️     |
| Edit card              | ✔️         | ✔️    | ⚙️     |
| Move card              | ✔️         | ✔️    | ⚙️     |
| Delete card            | ✔️         | ✔️    | ⚙️     |
| Archive card           | ✔️         | ✔️    | ⚙️     |
| Reorder cards          | ✔️         | ✔️    | ⚙️     |
| Add tag to card        | ✔️         | ✔️    | ⚙️     |
| Remove tag from card   | ✔️         | ✔️    | ⚙️     |
| Create tag             | ✔️         | ✔️    |        |
| Edit tag               | ✔️         | ✔️    |        |
| Delete tag             | ✔️         | ✔️    |        |
| Set webhooks           | ✔️         | ✔️    |        |

---

### Custom roles

| Action                       | Superadmin |
| ---------------------------- | ---------- |
| Create custom role           | ✔️         |
| Assign permissions to role   | ✔️         |
| Assign custom role to member | ✔️         |
| Delete custom role           | ✔️         |

---

### Instance administration

| Action                | Superadmin |
| --------------------- | ---------- |
| Manage instance users | ✔️         |
| Edit user account     | ✔️         |
| Delete user account   | ✔️         |
| Disable registration  | ✔️         |
| Configure domain      | ✔️         |
| Configure SMTP        | ✔️         |

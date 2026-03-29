# User Stories

---

## Authentication

- [ ] As a new user I want to be able to create an account to access the instance
- [ ] As a user I want to be able to log in to access my account
- [ ] As a user I want to be able to log out to secure my session
- [ ] As a user I want to reset my password by email to recover access to my account
- [ ] As a superadmin I want to reset any user's password manually to restore their access without requiring SMTP
- [ ] As a member I want to be able to connect through SSO (Future)
- [ ] As a member I want to set a 2FA to secure my account (Future)

---

## Boards

- [ ] As a superadmin I want to create a board to organise my projects
- [ ] As a superadmin I want to be able to create multiple boards to organise my projects and ideas
- [ ] As a superadmin or admin I want to edit a board name and description to keep it up to date
- [ ] As a superadmin I want to delete a board to remove projects that are no longer active
- [ ] As a superadmin or admin I want to assign members to a board to give them access
- [ ] As a superadmin or admin I want to remove members from a board to revoke their access
- [ ] As a superadmin or admin I want to assign roles to members to control what they can do
- [ ] As a superadmin or admin I want to generate a shareable invite link to a board to allow members to join without manual assignment
- [ ] As a superadmin or admin I want the invite link to expire after a set time or number of uses to keep the board secure
- [ ] As a user I want to join a board via a shareable link to access it without the superadmin manually assigning me
- [ ] As a user I want to see the boards I have joined to access my work quickly

---

## Custom Roles

- [ ] As a superadmin I want to create custom roles to extend the default permission system
- [ ] As a superadmin I want to assign permissions to a custom role to control precisely what its members can do
- [ ] As a superadmin I want to assign a custom role to a member to apply fine-grained access control
- [ ] As a superadmin I want to delete a custom role to keep the role list clean

---

## Columns

- [ ] As a superadmin or admin I want to create columns to adapt the board to my workflow
- [ ] As a superadmin or admin I want to edit a column name to rename it without deleting it
- [ ] As a superadmin or admin I want to reorder columns to adapt the board layout to my workflow
- [ ] As a superadmin or admin I want to delete a column to remove steps that are no longer needed

---

## Cards

- [ ] As a member I want to create cards to describe a task if my role allows it
- [ ] As a member I want to edit a card title and description to correct or update it if my role allows it
- [ ] As a member I want to move a card from one column to another to update its progress if my role allows it
- [ ] As a member I want to reorder cards within a column to prioritise my work if my role allows it
- [ ] As a member I want to assign a card to a member to know who is responsible
- [ ] As a member I want to add a due date to a card to track deadlines
- [ ] As a member I want to edit or remove a due date on a card to update the timeline
- [ ] As a member I want to add a tag to a card to categorise it if my role allows it
- [ ] As a member I want to remove a tag from a card to keep it organised if my role allows it
- [ ] As a member I want to leave a comment on a card to share my thoughts if my role allows it
- [ ] As a member I want to see the comments on a card to follow the discussion
- [ ] As a member I want to see the history of a card to know what has been changed
- [ ] As a member I want to archive a card to hide it from the board without losing its data if my role allows it
- [ ] As a member I want to delete a card to remove it permanently if my role allows it
- [ ] As a superadmin or admin I want to access the archive section to view all archived cards on a board
- [ ] As a superadmin or admin I want to restore an archived card to its original state to recover it if needed
- [ ] As a superadmin or admin I want to permanently delete an archived card to clean up the archive
- [ ] As a member I want to be able to add a file to a card (Future)

---

## Tags

- [ ] As a superadmin or admin I want to create tags to categorise cards on my board
- [ ] As a superadmin or admin I want to edit a tag to rename or recolor it
- [ ] As a superadmin or admin I want to delete a tag to keep the tag list clean

---

## Notifications

- [ ] As a member I want to receive an internal notification when a card is assigned to me to stay informed of my responsibilities
- [ ] As a member I want to receive an internal notification when someone comments on a card I am assigned to
- [ ] As a superadmin or admin I want to configure a webhook on a board to forward notifications to an external channel such as Discord or Slack

---

## Administration

- [ ] As a superadmin I want to manage all users of the instance to maintain control over who has access
- [ ] As a superadmin I want to edit a user account to correct information or restore access
- [ ] As a superadmin I want to delete a user account to remove someone from the instance permanently
- [ ] As a superadmin I want to disable public registration to prevent unknown users from creating accounts
- [ ] As a superadmin I want to configure the instance domain name to enable shareable invite links with a valid URL
- [ ] As a superadmin I want to configure an SMTP server to enable password reset by email and email notifications

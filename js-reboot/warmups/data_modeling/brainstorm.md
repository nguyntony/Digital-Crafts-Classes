Consider these apps:

-   Venmo (or Square cash)
-   Instagram
-   Reddit
-   Linked In

For each app, describe the main features and:

-   pick out the main nouns (Users, Posts, Comments, etc.)
-   describe the relationship between each one using these terms:
    -   has many
    -   has one
    -   belongs to
    -   has many and belongs to many

### Venmo

Nouns: Users, Transactions (Posts), Comments

-   Users _has many_ Transactions / Transactions _belongs to_ Users
-   Transcations _has many_ Comments / Comments _belongs to_ Transactions

### Instagram

Nouns: Users, Posts, Comments, Tags, Likes, Followers

-   Users _has many_ Posts
-   Users _has many_ Followers
-   Posts _has many_ Comments, Tags, Likes
-   Tags _belongs to many_ Posts
-   Comments _has many_ Likes

### Reddit

Nouns: Users, Posts, Comments, UpVote, DownVote, Badges

-   Users _has many_ Posts
-   Posts _has many_ UpVote, DownVote
-   Comments _belongs to_ Posts
-   Comments _has many_ UpVote, DownVote
-   Badges _belongs to_ Posts

### LinkedIn

Nouns: Users, Posts, Comments, Reactions, Skills, Endorsements, DM

-   Users _has many_ Posts
-   Posts _has many_ Comments, Reactions
-   Skills _belongs to_ Users
-   Skills _has many_ Endorsements
-   Users _has many_ DM

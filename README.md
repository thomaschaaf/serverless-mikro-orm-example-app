# serverless-mikro-orm-example-app

1. Install dependencies via `npm install`
2. Run `docker-compose up -d` to start mysql
3. Create DB schema via `npm run schema`
4. Run via `npm run dev`
5. Example API is running on localhost:3000

Available routes:

```
GET     /author        finds all authors
GET     /author/:id    finds author by id
POST    /author        creates new author
PUT     /author/:id    updates author by id
```

```
GET     /book          finds all books
GET     /book/:id      finds book by id
POST    /book          creates new book
PUT     /book/:id      updates book by id
```

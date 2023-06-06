## Sequelize

    npx sequelize-cli migration:generate --name create-user

    npx sequelize-cli db:migrate


## Comando automáticos preparados

Para criar o banco de dados

    npm run db:create

Para criar tabelas do migrate

    npm run migrate

Para apagar o banco de dados

    npm run db:drop

Para criar o banco de dados e rodar o migrate

    npm run start:db

Para apagar e criar o banco de dados e rodar o migrate

    npm run restart:db
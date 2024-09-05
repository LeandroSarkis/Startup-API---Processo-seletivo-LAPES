# Startup API - Processo Seletivo LAPES
##### Este projeto foi feito para o processo seletivo do grupo LAPES - Laboratório de Pesquisa de Engenharia de Software do CESUPA. O projeto integrar typescript com o banco de dados com a utilização do framework "nest.js" e a biblioteca de nodes, "node-postgres",  para criar uma API de startups 

# FEATURES 
##### ROOT: 
- ###### ROTA: ./
- ###### Descrição: Mostra todas as startups presentes no banco de dados.

##### searchByCodigo:
- ###### Rota: ./:codigo
- ###### Descrição: Mostra a startup que possui o código em específico.

##### updateNameByCodigo:
- ###### Utilizando do método put de algum software de API Ex: POSTMAN
```sh
{
    "name": "novo_nome_startup"// novo nome da startup
    "codigo": codigo_startup// codigo da startup 
}
```
- ###### Descrição: Troca o nome antigo da startup a parti do código dela.

#####   deleteByCodigo:
- ###### Utilizando do método delete de algum software de API Ex: POSTMAN
```sh
{
    "codigo": codigo_startup// codigo da startup que será deletada
}
```
- ###### Descrição: Deleta uma row inteira do banco de dados a partir do código da startup.

##### createRow:
- ###### Utilizando do método post de algum software de API Ex: POSTMAN
```sh
    {
        "state_code": "CA",
        "latitude": "37.238916",
        "longitude": "-121.973718",
        "zip_code": "95032",
        "id": "c:16283",
        "city": "Los Gatos",
        "Unnamed 6": null,
        "name": "TriCipher",
        "labels": "1",
        "founded_at": "1/1/2000",
        "closed_at": null,
        "first_funding_at": "2/14/2005",
        "last_funding_at": "12/28/2009",
        "age_first_funding_year": "5.126",
        "age_last_funding_year": "9.9973",
        "age_first_milestone_year": "7.0055",
        "age_last_milestone_year": "7.0055",
        "relationships": "9",
        "funding_rounds": "4",
        "funding_total_usd": "40100000",
        "milestones": "1",
        "state_code1": "CA",
        "is_ca": "1",
        "is_ny": "0",
        "is_ma": "0",
        "is_tx": "0",
        "is_otherstate": "0",
        "category_code": "enterprise",
        "is_software": "0",
        "is_web": "0",
        "is_mobile": "0",
        "is_enterprise": "1",
        "is_advertising": "0",
        "is_gamesvideo": "0",
        "is_ecommerce": "0",
        "is_biotech": "0",
        "is_consulting": "0",
        "is_othercategory": "0",
        "object_id": "c:16283",
        "has_vc": "1",
        "has_angel": "0",
        "has_rounda": "0",
        "has_roundb": "1",
        "has_roundc": "1",
        "has_roundd": "1",
        "avg_participants": "4.75",
        "is_top500": "1",
        "status": "acquired"
    }
```
- ###### Descrição: Ele irá criar uma nova row no banco de dados a partir das informações conhecidas.

# PRÉ-REQUISITOS
- ##### Typescript
- ##### Framework nest.JS
- ##### Biblioteca node-postegres
- ##### PostgresSQL

# COMO EXECUTAR
- ##### Use o git clone para pegar o código do programa
```s
    git clone https://github.com/LeandroSarkis/Startup-API---Processo-seletivo-LAPES
```

- ##### Coloque o script do banco de dados no postgres
>
- ##### Certifique-se que o const enviroment está de acordo com a sua database do postgres
```s
    export const enviroment = {
    user: 'postgres',// usúario da database
    password: '1234', // senha da database
    host: 'localhost', // local onde vai ser hosteada a database
    port: 5432, // port do postgres
    database: 'postgres', // nome da database
    }
```
- ##### Começe a api pelo console do visual studio code
 ```s
    npm run start
```


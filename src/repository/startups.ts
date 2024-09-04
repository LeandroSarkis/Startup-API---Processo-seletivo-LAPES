
import startups from 'src/domain/startups'
import { enviroment } from 'src/enviroment'
const pg = require('../../node_modules/pg')

export async function readAllStartups() {
    const { Client } = pg
    let client = new Client(enviroment)
    try {
        await client.connect()
        const res = await client.query('SELECT * FROM startups')
        return res.rows
    } catch (error) {
        console.log("Ocorreu um erro ao se comunicar com a base de dados: " + error)
    } finally {
        await client.end()
        client = null
    }
}

export async function searchByCodigo(codigo: number) {
    const { Client } = pg
    let client = new Client(enviroment)
    try {
        await client.connect()
        const res = await client.query('SELECT * FROM startups WHERE codigo=$1', [codigo])
        return res.rows
    } catch (error) {
        console.log("Ocorreu um erro ao se comunicar com a base de dados: " + error)
    } finally {
        await client.end()
        client = null
    }
}

export async function updateNameByCodigo(startups: startups) {
    const { Client } = pg
    let client = new Client(enviroment)
    try {
        await client.connect()
        await client.query('UPDATE startups SET name = $1 WHERE codigo = $2', [startups.name, startups.codigo])
        return startups

    } catch (error) {
        console.log("Ocorreu um erro ao se comunicar com a base de dados: " + error)
    } finally {
        await client.end()
        client = null
    }

}

export async function deleteByCodigo(codigo: number) {
    const { Client } = pg
    let client = new Client(enviroment)
    try {
        console.log(codigo)
        await client.connect()
        await client.query('DELETE FROM startups WHERE codigo =$1', [codigo])

    } catch (error) {
        console.log("Ocorreu um erro ao se comunicar com a base de dados: " + error)
    } finally {
        await client.end()
        client = null
    }
}

export async function createRow(startups: startups) {
    const { Client } = pg
    let client = new Client(enviroment)
    try {
        await client.connect()
        console.log(Object.values(startups).length)
        await client.query(`INSERT INTO startups 
                            (
                                  is_biotech
                                , is_tx
                                , is_otherstate
                                , is_software
                                , is_web
                                , is_mobile
                                , is_enterprise
                                , is_advertising
                                , is_gamesvideo
                                , is_ecommerce
                                , is_consulting
                                , is_othercategory
                                , has_vc
                                , has_angel
                                , has_rounda
                                , has_roundb
                                , has_roundc
                                , has_roundd
                                , avg_participants
                                , is_top500
                                , labels
                                , relationships
                                , funding_rounds
                                , funding_total_usd
                                , milestones
                                , is_ca
                                , is_ny
                                , is_ma
                                , state_code
                                , latitude
                                , longitude
                                , zip_code
                                , id
                                , city
                                , "Unnamed 6"
                                , name
                                , category_code
                                , founded_at
                                , closed_at
                                , first_funding_at
                                , last_funding_at
                                , age_first_funding_year
                                , age_last_funding_year
                                , age_first_milestone_year
                                , age_last_milestone_year
                                , state_code1
                                , object_id
                                , status
                            )
                            values
                            (
                                $1
                                ,$2
                                ,$3
                                ,$4
                                ,$5
                                ,$6
                                ,$7
                                ,$8
                                ,$9
                                ,$10
                                ,$11
                                ,$12
                                ,$13
                                ,$14
                                ,$15
                                ,$16
                                ,$17
                                ,$18
                                ,$19
                                ,$20
                                ,$21
                                ,$22
                                ,$23
                                ,$24
                                ,$25
                                ,$26
                                ,$27
                                ,$28
                                ,$29
                                ,$30
                                ,$31
                                ,$32
                                ,$33
                                ,$34
                                ,$35
                                ,$36
                                ,$37
                                ,$38
                                ,$39
                                ,$40
                                ,$41
                                ,$42
                                ,$43
                                ,$44
                                ,$45
                                ,$46
                                ,$47
                                ,$48
                            )`, [startups.is_biotech
            , startups.is_tx
            , startups.is_otherstate
            , startups.is_software
            , startups.is_web
            , startups.is_mobile
            , startups.is_enterprise
            , startups.is_advertising
            , startups.is_gamesvideo
            , startups.is_ecommerce
            , startups.is_consulting
            , startups.is_othercategory
            , startups.has_vc
            , startups.has_angel
            , startups.has_rounda
            , startups.has_roundb
            , startups.has_roundc
            , startups.has_roundd
            , startups.avg_participants
            , startups.is_top500
            , startups.labels
            , startups.relationships
            , startups.funding_rounds
            , startups.funding_total_usd
            , startups.milestones
            , startups.is_ca
            , startups.is_ny
            , startups.is_ma
            , startups.state_code
            , startups.latitude
            , startups.longitude
            , startups.zip_code
            , startups.id
            , startups.city
            , startups['Unnamed 6']
            , startups.name
            , startups.category_code
            , startups.founded_at
            , startups.closed_at
            , startups.first_funding_at
            , startups.last_funding_at
            , startups.age_first_funding_year
            , startups.age_last_funding_year
            , startups.age_first_milestone_year
            , startups.age_last_milestone_year
            , startups.state_code1
            , startups.object_id
            , startups.status]
        )
        return startups

    } catch (error) {
        console.log("Ocorreu um erro ao se comunicar com a base de dados: " + error)
    } finally {
        await client.end()
        client = null
    }
}



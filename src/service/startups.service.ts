/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import response from 'src/domain/response';
import startups from 'src/domain/startups';
import { searchByCodigo } from 'src/repository/startups';

@Injectable()
export class StartupsService {
    searchByCodigo(codigo):response<startups | null>{
        codigo = Number(codigo)
        console.log(typeof(codigo))
        if(typeof(codigo) !== 'number' || codigo <= 0) {
            return {
                data:null, message:'O codigo da startup é numérico e maior que zero', statusCode: 400
            }
        }
        const startup = searchByCodigo(codigo)[0]
        if(!startup) {
            return {
                data:null, message:'Startup não encontrada', statusCode: 404
            }
        }return {
            data:startup, message:'Startup encontrada com sucesso', statusCode: 200
        }
    }
}

import { Request, Response } from 'express'

import db from '../database/connection';
import convertHourToMinutes from '../utils/coverHourToMinutes';

// informando o que tem dentro do ScheduleItem como objeto
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}


export default class ClasseController {

    async index(request: Request, response: Response) {
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time);

        /*
            inner join para encontrar um dia e hora da semana, se o professor está 
            disponivel o horario disponivel. 
        */
        const classes = await db('classes')
            .whereExists(function() {
                this.select('class_schedule.*') // elecionando todos os campos da tabela
                    .from('class_schedule') 
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`') // verificando id
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) // verificando qual dia da semana pode ter agendamentos
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes]) // verificar qual o horario o proffessor pode atender o aluno
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]) // verificar qual o horario para termino da aula
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);
    }


    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        
        } = request.body;

        // try cath para enviar todos os dados de uma vez e se caso der errado não salva nada no banco
        const trx = await db.transaction();
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertedUsersIds[0];
            
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            });
        
            const class_id = insertedUsersIds[0];
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                };
                
            })
        
            await trx('class_schedule').insert(classSchedule);
            // commit para salvar alterações no banco de dados
            await trx.commit();
        
            return response.status(201).send();
        } catch (err) {

            // rolback para desfazer as alteraçoes no banco caso acontecça algo de errado
            await trx.rollback();
            
            return response.status(400).json({
                error: 'Unexpected error whiçe creatinh new class'
            })
        }
    }
}
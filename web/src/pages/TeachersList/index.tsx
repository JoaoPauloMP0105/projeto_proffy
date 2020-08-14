import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Select from '../../components/Select'
import Input from '../../components/Input'

import { api } from '../../services/api'

import * as S from './styles'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(event: FormEvent) {
    event.preventDefault()

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setTeachers(response.data)
  }

  return (
    <S.TeacherListWrapper>
      <PageHeader title="Esses são os proffys disponíveis">
        <S.SearchTeachers onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            labelcolor="var(--color-text-in-primary)"
            value={subject}
            onChange={event => {
              setSubject(event.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            labelcolor="var(--color-text-in-primary)"
            value={week_day}
            onChange={event => {
              setWeekDay(event.target.value)
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            labelcolor="var(--color-text-in-primary)"
            value={time}
            onChange={event => {
              setTime(event.target.value)
            }}
          />

          <S.SearchButton type="submit">Buscar</S.SearchButton>
        </S.SearchTeachers>
      </PageHeader>

      <S.ListAllTeachers>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </S.ListAllTeachers>
    </S.TeacherListWrapper>
  )
}

export default TeacherList;
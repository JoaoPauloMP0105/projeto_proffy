import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import { api } from '../../services/api'

import * as S from './styles'

const TeacherForm: React.FC = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  const labelColor = 'var(--color-text-complement)'

  const history = useHistory()

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '8:00 AM', to: '4:00 PM' }])
  }

  function setScheduleItemValue(index: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, position) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault()

    api
      .post('/classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso.')
      })
      .catch(() => {
        alert('Erro ao fazer cadastro.')
      })

    history.push('/')
  }

  return (
    <S.PageTeacherForm>
      <PageHeader
        title="Incrível que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <S.Main>
        <S.FormWrapper onSubmit={handleCreateClass}>
          <S.Fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
              labelcolor={labelColor}
            />
            <Input
              name="avatar"
              label="Avatar"
              labelcolor={labelColor}
              value={avatar}
              onChange={e => {
                setAvatar(e.target.value)
              }}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              labelcolor={labelColor}
              value={whatsapp}
              onChange={e => {
                setWhatsapp(e.target.value)
              }}
            />
            <TextArea
              name="bio"
              label="Biografia"
              labelcolor={labelColor}
              value={bio}
              onChange={e => {
                setBio(e.target.value)
              }}
            />
          </S.Fieldset>

          <S.Fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              labelcolor={labelColor}
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
              value={subject}
              onChange={event => {
                setSubject(event.target.value)
              }}
            />
            <Input
              name="cost"
              label="Custo da hora por aula"
              labelcolor={labelColor}
              value={cost}
              onChange={event => {
                setCost(event.target.value)
              }}
            />
          </S.Fieldset>

          <S.Fieldset>
            <legend>
              Horários disponíveis
              <S.TimeButton type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </S.TimeButton>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <S.ScheduleItem key={scheduleItem.week_day}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    labelcolor={labelColor}
                    value={scheduleItem.week_day}
                    onChange={event =>
                      setScheduleItemValue(index, 'week_day', event.target.value)
                    }
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
                    name="from"
                    label="Das"
                    type="time"
                    labelcolor={labelColor}
                    value={scheduleItem.from}
                    onChange={event =>
                      setScheduleItemValue(index, 'from', event.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    labelcolor={labelColor}
                    value={scheduleItem.to}
                    onChange={event =>
                      setScheduleItemValue(index, 'to', event.target.value)
                    }
                  />
                </S.ScheduleItem>
              )
            })}
          </S.Fieldset>

          <S.FormFooter>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os dados
            </p>
            <S.FooterButton type="submit">Salvar cadastro</S.FooterButton>
          </S.FormFooter>
        </S.FormWrapper>
      </S.Main>
    </S.PageTeacherForm>
  )
}

export default TeacherForm;
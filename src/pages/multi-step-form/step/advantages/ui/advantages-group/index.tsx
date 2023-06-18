/* eslint-disable perfectionist/sort-jsx-props */
import { Fragment, useCallback } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Button } from '@/shared/view/button'
import { Icon } from '@/shared/view/icon'
import { Input } from '@/shared/view/input'

import s from './index.module.css'

export function AdvantagesFields() {
  const { control, register } = useFormContext()

  const { append, fields, remove } = useFieldArray({
    control,
    name: 'advantages'
  })

  const addOne = useCallback(() => {
    append({})
  }, [append])

  return (
    <Fragment>
      <ul>
        {fields.map((field, index) => (
          <li key={field.id} className={s.field}>
            <Input
              id={`advantages.${index}.field-advantages-${index}`}
              label=""
              paperClassName={s.input}
              variant="secondary"
              {...register(`advantages.${index}.field-advantages-${index}`)}
            />
            <button
              type="button"
              className={s.control}
              onClick={() => remove(index)}>
              <Icon path="sprite/trash" />
            </button>
          </li>
        ))}
      </ul>
      <Button type="button" kind="outline" onClick={addOne}>
        <Icon path="sprite/plus" />
      </Button>
    </Fragment>
  )
}
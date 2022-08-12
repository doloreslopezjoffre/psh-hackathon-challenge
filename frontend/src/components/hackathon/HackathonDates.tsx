import React from 'react'
import dayjs from 'dayjs'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

interface Props {
  dateStart: Date
  dateEnd: Date
}

export const HackathonDates: React.FC<Props> = ({ dateStart, dateEnd }) => (
  <div className="space-x-3 inline-flex items-center">
    <time>{dayjs(dateStart).format('ll')}</time>
    <ArrowNarrowRightIcon className="h-5 w-5" />
    <time>{dayjs(dateEnd).format('ll')}</time>
  </div>
)

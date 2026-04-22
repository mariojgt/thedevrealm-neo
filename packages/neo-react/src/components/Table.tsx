import * as React from 'react'

export interface TableColumn<T> {
  /** Key in the row data object */
  key: keyof T
  /** Column header text */
  header: string
  /** Optional custom cell renderer */
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

export interface TableProps<T> {
  /** Column definitions */
  columns: TableColumn<T>[]
  /** Row data array */
  data: T[]
  /** Unique key for each row */
  rowKey: keyof T
  className?: string
}

/**
 * NeoTable — neo-brutalist data table.
 *
 * @example
 * <NeoTable
 *   rowKey="id"
 *   columns={[
 *     { key: 'name', header: 'Course' },
 *     { key: 'students', header: 'Students' },
 *   ]}
 *   data={courses}
 * />
 */
export function NeoTable<T>({ columns, data, rowKey, className }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={['neo-table', className].filter(Boolean).join(' ')}
      >
        <thead>
          <tr>
            {columns.map(col => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={String(row[rowKey])}>
              {columns.map(col => (
                <td key={String(col.key)}>
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

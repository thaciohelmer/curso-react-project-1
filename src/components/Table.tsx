import styles from '../styles/sass/Table.module.scss'
import Client from "@/core/Client"

interface TableProps {
  clients: Client[]
  selectClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

  const showActions = props.deletedClient || props.selectClient

  function RenderHeader() {
    return (
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        {showActions ? <th>Ações</th> : false}
      </tr>
    )
  }

  function RenderData() {
    return props.clients?.map((client, index) => {
      return (
        <tr
          key={index}
          className={
            (index % 2 === 0) ?
              '' :
              styles['u-background-color-2']
          }>
          <td>{client.id}</td>
          <td>{client.name}</td>
          <td>{client.age}</td>
          {showActions ? RenderActions(client) : false}
        </tr>
      )
    })
  }

  function RenderActions(client: Client) {
    return (
      <td className={styles.actions}>
        {
          props.selectClient ?
            (
              <button
                className={styles.btn}
                onClick={() => props.selectClient?.(client)}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
            )
            : false
        }
        {
          props.deletedClient ?
            (
              <button
                className={styles.btn}
                onClick={() => props.deletedClient?.(client)}
              >
                <i className="bi bi-trash3"></i>
              </button>
            )
            : false
        }
      </td>
    )
  }

  return (
    <table className={styles.table}>
      <thead>{RenderHeader()}</thead>
      <tbody>{RenderData()}</tbody>
    </table>
  )
};

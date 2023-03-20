import ClientCollection from "@/backend/db/ClientCollection"
import Client from "@/core/Client"
import ClientRepository from "@/core/ClientRepository"
import { useEffect, useState } from "react"
import useLayout from "./useLayout"

export default function useClients() {
  const repo: ClientRepository = new ClientCollection()

  const { mode, ToggleMode } = useLayout()

  function SelectedClient(client: Client) {
    setClient(client)
    ToggleMode()
  }

  function GetAll() {
    repo.GetAll().then(setClients)
  }

  function DeletedClient(client: Client) {
    repo.Delete(client)
    GetAll()
  }

  function SaveClient(client: Client) {
    repo.Save(client)
    GetAll()
    ToggleMode()
  }

  function NewClient() {
    setClient(Client.getClient())
    ToggleMode()
  }


  const [client, setClient] = useState<Client>(Client.getClient())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(GetAll, [])


  return {
    mode,
    ToggleMode,
    client,
    clients,
    NewClient,
    SaveClient,
    DeletedClient,
    GetAll,
    SelectedClient,
  }

};

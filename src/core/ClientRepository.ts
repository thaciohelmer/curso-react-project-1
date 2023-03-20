import Client from '@/core/Client';

export default interface ClientRepository {
  Save(client: Client): Promise<Client | undefined>
  Delete(client: Client): Promise<void> | false
  GetAll(): Promise<Client[]>
}
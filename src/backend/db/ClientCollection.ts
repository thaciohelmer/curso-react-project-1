import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import firebase from "../config";

export default class ClientCollection implements ClientRepository {

  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
      const data = snapshot.data(options)
      return new Client(data.name, data.age, snapshot?.id)
    }
  }

  async Save(client: Client): Promise<Client | undefined> {
    if (client.id) {
      await this.#collection().doc(client.id).set(client)
      return client
    } else {
      const docRef = await this.#collection().add(client)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  Delete(client: Client): Promise<void> | false {
    if (client.id) {
      return this.#collection().doc(client.id).delete()
    }

    return false
  }

  async GetAll(): Promise<Client[]> {
    const query = await this.#collection().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  #collection() {
    return firebase.firestore()
      .collection('clients')
      .withConverter(this.#conversor)
  }
}
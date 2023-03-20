import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Client";
import Button from "./Button";

interface FormProps {
  client?: Client
  cancel?: () => void
  save?: (client: Client) => void
}

export default function Form(props: FormProps) {
  const id = props.client?.id
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input
          readonly
          type="text"
          text="Id"
          value={id}
        />
      ) : false}
      <Input
        text="Name"
        value={name}
        onChange={setName}
      />
      <Input
        text="Age"
        type="number"
        value={age}
        onChange={setAge}
      />
      <div className="form-buttons">
        <Button
          onClick={() => props.save?.(new Client(name, age, id))}>
          {id ? 'Update' : 'Save'}</Button>
        <Button onClick={props.cancel}>Cancel</Button>
      </div>
    </div>
  )
};

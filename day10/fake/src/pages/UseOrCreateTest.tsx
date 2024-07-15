import { Title, Avatar } from "../components";
import * as D from "../data";
import { useOrCreate } from "./useOrCreate";

export default function CreateOrUseTest() {
  //prettier-ignore
  // 코드를 완성

  const headText = useOrCreate<string[]>("headText", () => ['NO', 'NAME', 'JOB TITLE', 'EMAIL ADDRESS']);

  const users = useOrCreate<D.IUser[]>("users", () =>
    D.makeArray(100).map(D.makeRandomUser)
  );

  const head = useOrCreate("head", () =>
    headText.map((text) => <th key={text}>{text}</th>)
  );

  const body = useOrCreate("children", () =>
    users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex itmes-center">
          <Avatar src={user.avatar} size="1.5rem" />
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  );

  return (
    <div className="m5-4">
      <Title>CreateOrUseTest</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  );
}
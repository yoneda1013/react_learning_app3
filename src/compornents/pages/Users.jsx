import styled from "styled-components";
import { UserCard } from "../organisms/user/UserCard";
import { SearchInput } from "../molecules/SearchInput";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `こめ-${val}`,
    email: "adggg@gmail",
    phone: "123",
    company: {
      name: "テスト会社"
    },
    website: "http/:::::"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

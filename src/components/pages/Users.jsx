// import { useContext } from "react";
import styled from "styled-components";
import { userState } from "../../atom/userState";
// import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useRecoilState } from "recoil";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hoge-${val}`,
    image: "http://source.unsplash.com/NE0XGVKTmcA",
    email: "hoge@exampl.ecom",
    phone: "090-xxxx-xxxx",
    company: {
      name: "hoge株式会社"
    },
    website: "https://hoge.com"
  };
});

export const Users = () => {
  // useContext使う場合
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // useRecoilState使う場合
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserAres>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserAres>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserAres = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

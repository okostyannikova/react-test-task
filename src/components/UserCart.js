import React from "react";
import styled from "styled-components";

const UserCart = ({ user }) => {
  return (
    <Wrapper>
      <Content>
        <Avatar>
          <AvatarImg src={user.avatar_url} />
        </Avatar>
        <UserInfo>
          <UserLogin href={user.html_url} target="_blank">
            {user.login}
          </UserLogin>
          <UserName>{user.name}</UserName>
          <UserBio>{user.bio}</UserBio>
          <UserMeta>
            <UserMetaItem>
              <svg
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                />
              </svg>
              {user.location}
            </UserMetaItem>
            {user.email && (
              <UserMetaItem>
                <svg
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                  />
                </svg>
                {user.email}
              </UserMetaItem>
            )}
          </UserMeta>
        </UserInfo>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 0;
`;

const Content = styled.div`
  display: flex;
`;

const Avatar = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 3px;
`;

const UserInfo = styled.div`
  margin-left: 14px;
  min-height: 48px;
  font-weight: 400;
  line-height: 20px;
`;

const UserLogin = styled.a`
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const UserName = styled.span`
  font-size: 16px;
  margin-left: 8px;
`;

const UserBio = styled.p`
  font-size: 14px;
  margin: 8px 0 10px;
`;

const UserMeta = styled.ul`
  display: flex;
  list-style: none;
  font-size: 12px;
  color: #586069;
  padding: 0;
`;

const UserMetaItem = styled.li`
  svg {
    vertical-align: text-bottom;
    margin-right: 3px;
  }

  &:first-child {
    margin-right: 16px;
  }
`;

export default UserCart;

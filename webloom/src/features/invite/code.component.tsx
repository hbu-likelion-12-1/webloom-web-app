import React from 'react';
import clsx from "clsx";
import useAuth from "@/shared/lib/use-auth.hook";

interface Props {
  code: string;
}

function createMessage(code: string, username: string) {
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  const url = `${baseUrl}/invite/classify?code=${code}`;

  return `
당신의 소중한 배우자 ${username}님으로부터
WeBloom 초대장이 도착했어요. 링크를 눌러 초대장을 받아주세요.
부부 코드: ${code}
URL: ${url}
  `;
}

const InviteCode: React.FC<Props> = ({ code }) => {
  const { user } = useAuth();

  const onClickLink = async () => {
    await window.navigator.clipboard.writeText(
      createMessage(code, user?.username as string)
    );
    alert("초대 코드가 복사되었습니다!");
  };

  return (
    <span
      className={clsx([
        "underline text-primary-0",
        "cursor-pointer",
      ])}
      onClick={onClickLink}
    >
      {code}
    </span>
  );
};

export default InviteCode;

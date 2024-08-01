import React from 'react';
import useJoinStore from "@/features/join/lib/use-join.store";
import clsx from "clsx";
import Button from "@/shared/ui/button";
import getDepressionResult from "@/shared/lib/depression";

const JoinResult = () => {
  const { depressionScore } = useJoinStore();
  const { title, content } = getDepressionResult(depressionScore);

  return (
    <article className={clsx([
      "w-full h-full px-[12px]",
      "flex flex-col items-center",
    ])}>
      <h1 className="font-bold text-[20px] pt-[56px] pb-[68px]">우울증 테스트 결과</h1>

      <section>
        <h3 className="text-primary-0 text-[36px] font-bold">{depressionScore}점</h3>
      </section>

      <section className={clsx([
        "flex flex-col items-center text-center",
        "shadow-card w-full py-[28px]",
        "rounded-[14px] border border-gray-100",
      ])}>
        <h4 className="text-[18px] font-bold text-primary-0 pb-[12px]">{title}</h4>
        <span className="text-[16px]">{content}</span>
      </section>

      <section>
        <Button
          theme="primary"
          className="w-full"
        >
          고생하셨어요! 이제 마지막 단계만 남았어요.
        </Button>
      </section>
    </article>
  );
};

export default JoinResult;

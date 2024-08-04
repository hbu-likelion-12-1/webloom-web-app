import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/entities/onboard-loader/constants/enum";
import Typo from "@/shared/ui/typography/typo.component";

const OnboardFinal = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[210px]">
        <IconUtils.Onboard4/>
      </div>
      <Announcer
        buttonText="난임 극복 여정 시작하기"
        next={OnBoardPhase.FINAL}
        isFinal={true}
        currentStep={3} // 현재 단계를 나타내는 prop 추가
        totalSteps={4}  // 전체 단계를 나타내는 prop 추가
      >
        <section className="flex flex-col text-center text-[20px] py-[40px] text-black">
          <Typo>지금 바로 가입하고,</Typo>
          <Typo>AI Bloom과 함께</Typo>
          <Typo>난임 극복을 위한 여정에</Typo>
          <Typo>행복한 꽃을 피워요!</Typo>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardFinal;

"use client";

import React from 'react';
import useJoinStore from "@/features/join/lib/use-join.store";
import { JoinPhase } from "@/features/join/constants/enum";
import JoinNickname from "@/features/join/ui/phase/join-nickname.component";
import ProgressBar from "@/features/join/ui/progress-bar.component";
import convertProgress from "@/features/join/lib/progress-converter.util";
import JoinSelectSex from "@/features/join/ui/phase/join-sex.component";
import JoinBirthday from "@/features/join/ui/phase/join-birthday.component";


// 13
const JoinScreenPage = () => {
  const { phase } = useJoinStore();
  const progress = convertProgress(phase);

  return (
    <article className="h-full w-full">
      <div className="pt-[23px]"/>
      <ProgressBar completed={progress}/>

      {phase === JoinPhase.NICKNAME && <JoinNickname/>}
      {phase === JoinPhase.SEX && <JoinSelectSex/>}
      {phase === JoinPhase.BIRTHDAY && <JoinBirthday/>}
    </article>
  );
};

export default JoinScreenPage;

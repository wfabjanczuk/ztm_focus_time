import React from 'react';
import {TimingButton} from './TimingButton';

export const Timing = ({changeTime}) => (
  <>
    <TimingButton changeTime={changeTime} time={1} />
    <TimingButton changeTime={changeTime} time={2} />
    <TimingButton changeTime={changeTime} time={3} />
  </>
);

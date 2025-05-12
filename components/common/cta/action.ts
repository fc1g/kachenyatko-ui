'use server';

import { SubmitHandler } from 'react-hook-form';
import { CtaFormData } from './type';

// TODO: add actual action

export const ctaAction: SubmitHandler<CtaFormData> = async data => {
  try {
    console.log(data);
  } catch (error) {
    console.error(error);
    throw new Error('Error submitting form');
  }
};

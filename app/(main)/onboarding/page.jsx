import { industries } from '@/data/industries';
import React from 'react'
import OnboardingForm from './_components/onboarding-form';
import { getUserOnboardingStatus } from '@/actions/user';

const OnboardingPage = async() => {
  //check if the user is already onboarded
  const {isOnboarded}=await getUserOnboardingStatus();
  if(isOnboarded){
    //redirect to dashboard
    redirect('/dashboard');
  }
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage;

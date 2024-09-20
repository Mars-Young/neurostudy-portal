'use client';

import goalIcon from '@/app/images/goalIcon.svg';
import ProfileCard from '../ProfileCard';
import { useProfileContext } from '@/app/utilities/profile/ProfileProvider';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { ProfileSectionRef } from '@/app/interfaces/Profile';
import ProfileGoalForm from './Form';
import ProfileAttributes from '../ProfileAttributes';
import { GOAL_FIELDS } from '@/app/utilities/profile/constants';

const ProfileGoalSection: ForwardRefExoticComponent<
  RefAttributes<ProfileSectionRef>
> = forwardRef<ProfileSectionRef>((_, formRef) => {
  const { isLoading, isEditing } = useProfileContext();

  return (
    <ProfileCard
      leftIconSrc={goalIcon}
      leftIconAlt='Goals & Interests'
      title='Goals & Interests'
      collapsible
      isLoading={isLoading}
    >
      {isEditing ? (
        <ProfileGoalForm ref={formRef} />
      ) : (
        <ProfileAttributes fields={GOAL_FIELDS} />
      )}
    </ProfileCard>
  );
});

ProfileGoalSection.displayName = 'ProfileGoalSection';

export default ProfileGoalSection;

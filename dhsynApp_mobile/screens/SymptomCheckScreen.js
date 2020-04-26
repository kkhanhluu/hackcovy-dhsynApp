import React, { useState } from 'react';

import SymtompCheckerIntroduction from '../components/SymptomChecker/SymtomCheckerIntroduction';
import Quiz1 from '../components/SymptomChecker/Quiz1';
import Quiz2 from '../components/SymptomChecker/Quiz2';
import Quiz3 from '../components/SymptomChecker/Quiz3';
import Quiz4 from '../components/SymptomChecker/Quiz4';
import SymptomCheckerResult from '../components/SymptomChecker/SymtomCheckerResult';

const SymptomCheckScreen = (props) => {
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [numberOfYesAnswer, setNumberOfYesAnswer] = useState(0);

  console.log(numberOfYesAnswer);
  if (step === 0) {
    return <SymtompCheckerIntroduction onNext={setStep} />;
  } else if (step === 1) {
    return (
      <Quiz1
        onNext={setStep}
        onGenderChange={(gender) => setGender(gender)}
        onAgeChange={(age) => setAge(age)}
        gender={gender}
      />
    );
  } else if (step === 2) {
    return (
      <Quiz2
        onNext={setStep}
        onYes={() => setNumberOfYesAnswer(numberOfYesAnswer + 1)}
        gender={gender}
      />
    );
  } else if (step === 3) {
    return (
      <Quiz3
        onNext={setStep}
        onYes={() => setNumberOfYesAnswer(numberOfYesAnswer + 1)}
        gender={gender}
      />
    );
  } else if (step === 4) {
    return (
      <Quiz4
        onNext={setStep}
        onYes={() => setNumberOfYesAnswer(numberOfYesAnswer + 1)}
        gender={gender}
      />
    );
  } else if (step === 5) {
    return (
      <SymptomCheckerResult active={numberOfYesAnswer >= 2} onNext={setStep} />
    );
  }
};

export default SymptomCheckScreen;

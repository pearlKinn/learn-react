import { useState } from 'react';

function LearnStateAndEffects() {
  // 성(lastName), 이름(firstName)
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  // const [showYourName, setShowYourName] = useState(false);

  // 성 + 이름(fullName) 출력
  // 파생된 상태 (derived state)
  const fullName = lastName + firstName;
  const fullNameLength = fullName.length
  const showYourName = lastName.length > 0 && firstName.length > 0;

  // console.log(showYourName);

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 text-2xl uppercase">
        상태 및 이펙트 학습하기
      </h2>

      <h3 className='text-slate-700 text-lg'>너의 이름은?</h3>

      <div className='flex gap-1'>
        <input
          type="text"
          name="lastName"
          aria-label="성"
          placeholder="김"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className='w-7 border-2 border-indigo-400 px-1 rounded-sm text-center'
        />
        <input
          type="text"
          name="firstName"
          aria-label="이름"
          placeholder="덕구"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className='w-12 border-2 border-indigo-400 px-1 rounded-sm text-center'
        />
        ({fullNameLength})
      </div>


      {
        showYourName &&
        <>
          <hr className='w-full my-2 border-1 border-dashed border-indigo-300' />
          <img src="https://bit.ly/45blNdl" alt="" className='h-40' />
          <p>아! 당신의 이름은 <b className='underline underline-offset-4 text-indigo-500'>{fullName}</b>이군요!</p>
        </>
      }
    </div>
  );
}

export default LearnStateAndEffects;
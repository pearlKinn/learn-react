function GoToButton({ direction /* 'up' | 'down' */, label /* string */ }) {
  // prop ? {direction, label}

  let className = ''
  // 문
  // if( direction === 'up') {
  //   className = 'scrollUp'
  //   label = '스크롤 업'
  // }else {
  //   className = 'scrollDown'
  //   label = '스크롤 다운'
  // }


  return (
    <>
      <button
        type="button"
        // className={className}
        // 식만 사용
        className={direction === 'top' ? 'scrollUp' : 'scrollDown' }
        aria-label={label}
        title={label}
      >
        <svg
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
        >
          <path
            d="m112 268 144 144 144-144M256 392V100"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeMiterlimit={10}
            strokeWidth="48px"
          />
        </svg>
      </button>
    </>
  );
}

export default GoToButton;

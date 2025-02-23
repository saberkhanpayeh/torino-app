const otpExpireTimer = (setstate) => {
  let seconds = 120; //2 min
  let second = 0;
  const timer = setInterval(() => {
    let minutes = Math.floor(seconds / 60);
    second = seconds % 60;
    //console.log(`زمان باقی مانده${minutes}:${second < 10 ? "0" : ""}${second}`);
    setstate({ minutes, second });
    if (seconds <= 0) {
      clearInterval(timer);
      setstate(timer=>({...timer,stop:true}));
      // console.log("زمان توقف");
    }
    seconds--;
  }, 1000);
};

export { otpExpireTimer };

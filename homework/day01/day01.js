function requestVerificationNumber() {
  const verificationNumber = String(
    Math.floor(Math.random() * 1000000)
  ).padStart(6, 0);

  let timer;
  let time = 179;
  timer = setInterval(() => {
    document.getElementById("requestCertificationNumber").disabled = true;
    document.getElementById("certificationNumber").innerText =
      verificationNumber;
    document.getElementById("requestCertificationNumber").style =
      "background-color: #c7c7c7; color: #f2f2f2; border: none;";
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    document.getElementById("verificationTime").innerText = `${min}:${sec}`;
    time -= 1;

    if (sec == "-1") {
      clearInterval(timer);
      document.getElementById("verificationTime").style.display = "none";
    }
  }, 1000);
}

function signUp() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  alert(`
    회원가입을 축하합니다.
    (가입일시 : ${year}-${month}-${day})
  `);
}

document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");
  const loginBtn = document.getElementById("loginBtn");
  const spinner = loginBtn.querySelector(".spinner");

  // Reset error
  errorMessage.textContent = "";

  if(username === "" || password === "") {
    errorMessage.textContent = "Semua field harus diisi!";
    return;
  }

  // Aktifkan loading
  loginBtn.disabled = true;
  spinner.style.display = "inline-block";
  loginBtn.querySelector(".btn-text").textContent = "Loading...";

  // Simulasi delay login
  setTimeout(() => {
    const correctUsername = "user";
    const correctPassword = "pass123";

    if(username === correctUsername && password === correctPassword){
      alert("Login berhasil!"); // nanti bisa diganti redirect
    } else {
      errorMessage.textContent = "Username atau password salah!";
      loginBtn.classList.add("shake");
      setTimeout(()=> loginBtn.classList.remove("shake"), 300);
    }

    // Reset loading
    loginBtn.disabled = false;
    spinner.style.display = "none";
    loginBtn.querySelector(".btn-text").textContent = "Login";
  }, 1500);
});

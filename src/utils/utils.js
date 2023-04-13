import Notiflix from 'notiflix';



export  function warningMessageRegister() {
    Notiflix.Notify.failure("Failed to register account! Password must be at least 7 characters");
};

export function warningMessageLogin() {
    Notiflix.Notify.failure("Email or password entered incorrectly");
};


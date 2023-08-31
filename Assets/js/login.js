let myModal;
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('myModal')) {
        myModal = new bootstrap.Modal(document.getElementById('myModal'));
    }
})
function frmLogin(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const clave = document.getElementById("clave");
    if (usuario.value == "") {
        clave.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        usuario.focus();
    } else if (clave.value == "") {
        usuario.classList.remove("is-invalid");
        clave.classList.add("is-invalid");
        clave.focus();
    } else {
        const url = base_url + "Usuarios/validar";
        const frm = document.getElementById("frmLogin");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.upload.addEventListener('progress', function () {
            document.getElementById('btnAccion').textContent = 'Procesando';
        });
        http.send(new FormData(frm));
        http.addEventListener('load', function () {
            document.getElementById('btnAccion').textContent = 'Login';
        });
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                if (res == "ok") {
                    window.location = base_url + "Administracion/home";                    
                } else {
                    document.getElementById('btnAccion').textContent = 'Login';
                    document.getElementById("alerta").classList.remove("d-none");
                    document.getElementById("alerta").innerHTML = res;
                }
            }
        }
    }
}
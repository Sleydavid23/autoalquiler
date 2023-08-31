<!DOCTYPE html>
<html>

<head>
    <title>Iniciar | Sesión</title>
    <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url; ?>Assets/css/login.css">
    <link rel="stylesheet" type="text/css" href="<?php echo base_url; ?>Assets/css/styles.css">
    <script src="<?php echo base_url; ?>Assets/js/all.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <img class="wave" src="<?php echo base_url; ?>Assets/img/wave.png">
    <div class="container-login">
        <div class="img">
            <img src="<?php echo base_url; ?>Assets/img/bg.svg">
        </div>
        <div class="login-content">
            <form id="frmLogin" class="form" onsubmit="frmLogin(event)" autocomplete="off">
                <img src="<?php echo base_url; ?>Assets/img/avatar.svg">
                <h3 class="title">Vida Informático</h3>
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <h5>Usuario</h5>
                        <input type="text" class="input" name="usuario" id="usuario">
                    </div>
                </div>
                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                        <h5>Contrasena</h5>
                        <input type="password" class="input" name="clave" id="clave">
                    </div>
                </div>
                <div class="alert alert-danger text-center fw-bold d-none" role="alert" id="alerta">
                </div>
                <button class="btn-login" type="submit"><i class="fas fa-sign-in-alt"></i><span id="btnAccion"> Login</span></button>
            </form>
        </div>
    </div>
    <script src="<?php echo base_url; ?>Assets/js/bootstrap.bundle.min.js"></script>
    <script src="<?php echo base_url; ?>Assets/js/sweetalert2.all.min.js"></script>
    <script>
        const base_url = '<?php echo base_url; ?>';
    </script>
	<script src="<?php echo base_url; ?>Assets/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo base_url; ?>Assets/js/login.js"></script>
    <script type="text/javascript" src="<?php echo base_url; ?>Assets/js/main.js"></script>

</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Panel Adminstrativo</title>
    <link href="<?php echo base_url; ?>Assets/css/styles.css" rel="stylesheet" />
    <link href="<?php echo base_url; ?>Assets/DataTables/datatables.min.css" rel="stylesheet" />
    <link href="<?php echo base_url; ?>Assets/css/jquery-ui.min.css" rel="stylesheet" />
    <link href="<?php echo base_url; ?>Assets/css/estilos.css" rel="stylesheet" />
    <script src="<?php echo base_url; ?>Assets/js/all.min.js"></script>
</head>

<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand-->
        <a class="navbar-brand ps-3" href="<?php echo base_url; ?>Administracion/home">Vida Informatico</a>
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>


        <!-- Navbar-->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="badge bg-success">En Línea</span>
                    <i class="fas fa-user-tie fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="<?php echo base_url; ?>Usuarios/perfil">Perfil</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="<?php echo base_url; ?>Usuarios/salir">Cerrar Sesión</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <a class="nav-link active bg-info" href="<?php echo base_url; ?>Usuarios/perfil">
                            <div class="sb-nav-link-icon">
                                <img class="rounded" src="<?php echo base_url . 'Assets/img/users/' . $_SESSION['perfil']; ?>" width="30">
                            </div>
                            Datos Personales
                        </a>
                        <?php if ($_SESSION['id_usuario'] == 1) { ?>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-cogs fa-2x"></i></div>
                            Administración
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="<?php echo base_url; ?>Usuarios">Usuarios</a>
                                <a class="nav-link" href="<?php echo base_url; ?>Administracion/moneda">Monedas</a>
                                <a class="nav-link" href="<?php echo base_url; ?>Administracion">Configuración</a>
                            </nav>
                        </div>
                        <?php } ?>
                        <a class="nav-link" href="<?php echo base_url; ?>Clientes">
                            <div class="sb-nav-link-icon"><i class="fas fa-users fa-2x"></i></div>
                            Clientes
                        </a>
                        <?php if ($_SESSION['id_usuario'] == 1) { ?>
                            <a class="nav-link" href="<?php echo base_url; ?>Documentos">
                                <div class="sb-nav-link-icon"><i class="fas fa-id-card fa-2x"></i></div>
                                Documentos
                            </a>

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseVehiculos" aria-expanded="false" aria-controls="collapseVehiculos">
                                <div class="sb-nav-link-icon"><i class="fas fa-truck-moving fa-2x"></i></div>
                                Vehículos
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseVehiculos" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="<?php echo base_url; ?>Marcas">Marcas</a>
                                    <a class="nav-link" href="<?php echo base_url; ?>Tipos">Tipos</a>
                                    <a class="nav-link" href="<?php echo base_url; ?>Vehiculos">Vehiculos</a>
                                </nav>
                            </div>
                        <?php } ?>
                        <a class="nav-link" href="<?php echo base_url; ?>Alquiler">
                            <div class="sb-nav-link-icon"><i class="fas fa-hourglass-start fa-2x"></i></div>
                            Alquiler de Vehículos
                        </a>
                        <a class="nav-link" href="<?php echo base_url; ?>Alquiler/pdfAlquiler" target="_blank">
                            <div class="sb-nav-link-icon"><i class="fas fa-file-pdf fa-2x"></i></div>
                            Reporte Prestamo
                        </a>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small text-capitalize"><?php echo $_SESSION['nombre']; ?></div>
                    <?php echo $_SESSION['usuario']; ?>
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4 mt-4">
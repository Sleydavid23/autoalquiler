let tblUsuarios, tblClientes, tblMarcas, tblTipos, tblAlquiler,
tblVehiculos, t_moneda, myModal, tbl, tblDoc, m_entrega;
document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById('entrega')) {
       m_entrega = new bootstrap.Modal(document.getElementById('entrega'));
    }
    //fin validaciones
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    if (document.getElementById('myModal')) {
        myModal = new bootstrap.Modal(document.getElementById('myModal'));
    }
    //Fin autocomple
    const buttons = [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Reporte',
            filename: 'Reporte',
            //Aquí es donde generas el botón personalizado
            text: '<span class="badge bg-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte',
            filename: 'Reporte',
            text: '<span class="badge bg-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, 1, 2, 3, 5]
            }
        },
        //Botón para PDF
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte',
            filename: 'Reporte',
            text: '<span class="badge bg-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Reporte',
            text: '<span class="badge bg-warning"><i class="fas fa-print"></i></span>'
        },
        //Botón para print
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Reporte',
            text: '<span class="badge bg-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge bg-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
    ];
    const dom = "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>";
    tblUsuarios = $('#tblUsuarios').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + 'Usuarios/listar',
            dataSrc: ''
        },
        columns: [
            {'data' : 'id'},
            {'data': 'usuario'},
            {'data': 'nombre'},
            {'data': 'correo'},
            {'data': 'estado'},
            {"data": "editar"},
            {"data": "eliminar"}
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ]
    });//Fin de la tabla usuarios
    t_moneda = $('#t_moneda').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: "" + base_url + "Administracion/listarMonedas",
            dataSrc: ""
        },
        columns: [{
                "data": "id"
            },
            {
                "data": "simbolo"
            },
            {
                "data": "nombre"
            },
            {
                "data": "estado"
            },
            {
                "data": "editar"
            }, 
            {
                "data": "eliminar"
            }
        ],
        language: {
                "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
            },
            dom,
            buttons,
            resonsieve: true,
            bDestroy: true,
            iDisplayLength: 10,
            order: [
                [0, "desc"]
            ]
    });
    tblClientes = $('#tblClientes').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + "Clientes/listar",
            dataSrc: ''
        },
        columns: [{'data': 'id'},
            {'data': 'dni'},
            {'data': 'nombre'},
            {'data': 'telefono'},
            {'data' : 'direccion'},
            {'data': 'estado'},
            {'data': 'editar'},
            {'data': 'eliminar'}
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
            bDestroy: true,
            iDisplayLength: 10,
            order: [
                [0, "desc"]
            ]
    });//Fin de la tabla clientes
    tblMarcas = $('#tblMarcas').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + 'Marcas/listar',
            dataSrc: ''
        },
        columns: [
            {'data': 'id'},
            {'data': 'marca'},
            {'data': 'estado'},
            {'data': 'editar'},
            {'data': 'eliminar'}
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
            bDestroy: true,
            iDisplayLength: 10,
            order: [
                [0, "desc"]
            ]
    });//Fin de la tabla marcas
    tblTipos= $('#tblTipos').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + 'Tipos/listar',
            dataSrc: ''
        },
        columns: [
            {'data': 'id'},
            {'data': 'tipo'},
            {'data': 'estado'},
            {'data': 'editar'},
            {'data': 'eliminar'}
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
            bDestroy: true,
            iDisplayLength: 10,
            order: [
                [0, "desc"]
            ]
    });//Fin de la tabla Tipos
    tblVehiculos = $('#tblVehiculos').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        pageLength: 25,
        ajax: {
            url: base_url + 'Vehiculos/listar',
            dataSrc: ''
        },
        columns: [
            {'data': 'id'},
            {'data': 'imagen'},
            {'data': 'placa'},
            {'data': 'marca'},
            {'data': 'tipo'},
            {'data': 'modelo'},
            {'data': 'estado'},
            {'data': 'editar'},
            {'data': 'eliminar'}
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        "createdRow": function (row, data, index) {
            //pintar una celda
            if (data.estado == 2) {
                $('td', row).eq(6).html('<span class="badge bg-dark">Alquilado</span>');
            }else{
                $('td', row).eq(6).html('<span class="badge bg-success">Activo</span>');
            }
            if (data.estado == 2) {
                $('td', row).css({
                    'background-color': '#ffff52'
                });
                $('td', row).eq(7).html('');
                $('td', row).eq(8).html('');
            }
        },
        buttons,
        resonsieve: true,
            bDestroy: true,
            iDisplayLength: 10,
            order: [
                [0, "desc"]
            ]
    });//Fin de vehiculos
    tblDoc = $('#tblDoc').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + 'Documentos/listar',
            dataSrc: ''
        },
        columns: [{
                'data': 'id'
            },
            {
                'data': 'documento'
            },
            {
                'data': 'estado'
            },
            {
                'data': 'editar'
            },
            {
                'data': 'eliminar'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ]
    }); //Fin de la tabla documentos
    tbl = $('#tbl').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        resonsieve: true,
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ]
    }); //Fin de la tabla usuarios
    tblAlquiler = $('#tblAlquiler').DataTable({
        responsive: true,
        processing: true,
        serverSide: false,
        ajax: {
            url: base_url + 'Alquiler/listar',
            dataSrc: ''
        },
        columns: [{
                'data': 'id'},
            {'data': 'documento'},
            {'data': 'nombre'},
            {'data': 'tipo'},
            {'data': 'placa'},
            {'data': 'modelo'},
            {'data': 'f_prestamo'},
            {'data': 'hora'},
            {'data': 'f_devolucion'},
            {'data': 'num_dias'},
            {'data': 'precio_dia'},
            {'data': 'abono'},
            {'data': 'estatus'},
            {'data': 'recibir'},
            {'data': 'accion'},
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom,
        buttons,
        "createdRow": function (row, data, index) {
            //pintar una celda
            if (data.estado == 1) {
                $('td', row).eq(10).html('<span class="badge bg-dark">Prestado</span>');
                $('td', row).css({
                'background-color': '#FEA4AE'
                });
            } else {
                $('td', row).eq(10).html('<span class="badge bg-success">Devuelto</span>');
            }
        },
        resonsieve: true,
        bDestroy: true,
        iDisplayLength: 10,
        order: [
            [0, "desc"]
        ]
    }); //Fin de la tabla alquiler
    $("#select_cliente").autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: base_url + 'Clientes/buscarCliente/',
                dataType: "json",
                data: {
                    cli: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        select: function (event, ui) {
            document.getElementById('id_cli').value = ui.item.id;
            document.getElementById('select_cliente').value = ui.item.nombre;
        }
    })
    $("#select_vehiculo").autocomplete({
        minLength: 2,
        source: function (request, response) {
            $.ajax({
                url: base_url + 'Vehiculos/buscarVehiculo/',
                dataType: "json",
                data: {
                    veh: request.term
                },
                success: function (data) {
                    response(data);
                }
            });
        },
        select: function (event, ui) {
            document.getElementById('id_veh').value = ui.item.id;
            document.getElementById('select_vehiculo').value = ui.item.placa;
        }
    })

})
function frmCambiarPass(e) {
    e.preventDefault();
    const actual = document.getElementById('clave_actual').value;
    const nueva = document.getElementById('clave_nueva').value;
    const confirmar = document.getElementById('confirmar_clave').value;
    if (actual == '' || nueva == '' || confirmar == '') {
        alertas('Todo los campos son obligatorios', 'warning');
        return false;
    } else {
        if (nueva != confirmar) {
            alertas('Las contraseñas no coinciden', 'warning');
            return false;
        }else{
            const url = base_url + "Usuarios/cambiarPass";
            const frm = document.getElementById("frmCambiarPass");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    myModal.hide();
                    frm.reset();
                }
            }
        }
    }
}
function frmUsuario() {
    document.getElementById("title").textContent = "Nuevo Usuario";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarUser(e) {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    if (usuario == "" || nombre == "" || correo == "") {
        alertas('Todo los campos son obligatorios', 'warning');
        return false;
    } else {
        const url = base_url + 'Usuarios/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                myModal.hide();
                tblUsuarios.ajax.reload();
                alertas(res.msg, res.icono);
            }
        }
    }
}
function btnEditarUser(id) {
    document.getElementById("title").textContent = "Actualizar usuario";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + 'Usuarios/editar/'+id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("usuario").value = res.usuario;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("correo").value = res.correo;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("claves").classList.add("d-none");
            myModal.show();
        }
    }
}
function btnEliminarUser(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El usuario no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblUsuarios.ajax.reload();
                }
            }
            
        }
    })
}
function btnReingresarUser(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }
        }
    })
}

//Fin Usuarios
function frmCliente() {
    document.getElementById("title").textContent = "Nuevo Cliente";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarCli(e) {
    e.preventDefault();
    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    if (dni == '' || nombre == '' || telefono == '' || direccion == '') {
        alertas('Todo los campos son obligatorios', 'warning');
    } else {
         const url = base_url + 'Clientes/registrar';
         const frm = document.getElementById("formulario");
         const http = new XMLHttpRequest();
         http.open("POST", url, true);
         http.send(new FormData(frm));
         http.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
                 const res = JSON.parse(this.responseText);
                 alertas(res.msg, res.icono);
                 frm.reset();
                 myModal.hide();
                 tblClientes.ajax.reload();
             }
         }
    }
}
function btnEditarCli(id) {
    document.getElementById("title").textContent = "Actualizar cliente";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + "Clientes/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("dni").value = res.dni;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("direccion").value = res.direccion;
                myModal.show();
        }
    }
}
function btnEliminarCli(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El cliente no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    tblClientes.ajax.reload();
                    alertas(res.msg, res.icono);
                }
            }

        }
    })
}
function btnReingresarCli(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }
        }
    })
}//Fin Clientes

function frmMarca() {
    document.getElementById("title").textContent = "Nueva Marca";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarMarca(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    if (nombre == '') {
        alertas('El nombre es requerido', 'warning');
    } else {
        const url = base_url + 'Marcas/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                frm.reset();
                myModal.hide();
                tblMarcas.ajax.reload();
            }
        }
    }
}
function btnEditarMarca(id) {
    document.getElementById("title").textContent = "Actualizar Marca";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + 'Marcas/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.marca;
            myModal.show();
        }
    }
}
function btnEliminarMarca(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "La marca no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Marcas/eliminar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblMarcas.ajax.reload();
                }
            }
        }
    })
}
function btnReingresarMarca(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Marcas/reingresar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

        }
    })
}//Fin Marcas
function frmTipo() {
    document.getElementById("title").textContent = "Nuevo Tipo";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}
function registrarTipo(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        alertas('El nombre es requerido', 'warning');
    } else {
        const url = base_url + 'Tipos/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                frm.reset();
                myModal.hide();
                tblTipos.ajax.reload();
            }
        }
    }
}
function btnEditarTipo(id) {
    document.getElementById("title").textContent = "Actualizar Tipo";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + 'Tipos/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("nombre").value = res.tipo;
            myModal.show();
        }
    }
}
function btnEliminarTipo(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El tipo no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Tipos/eliminar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblTipos.ajax.reload();
                }
            }

        }
    })
}
function btnReingresarTipo(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Tipos/reingresar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }
        }
    })
}//Fin Tipos
function frmVehiculo() {
    document.getElementById("title").textContent = "Nuevo Vehículo";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
    deleteImg();
}
function registrarVeh(e) {
    e.preventDefault();
    const placa = document.getElementById("placa").value;
    const marca = document.getElementById("marca").value;
    const tipo = document.getElementById("tipo").value;
    const modelo = document.getElementById("modelo").value;
    if (placa == '' || marca == '' || tipo == '' || modelo == '') {
        alertas('Todo los campos son requeridos', 'warning');
        return false;
    } else {
        const url = base_url + 'Vehiculos/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.upload.addEventListener('progress', function () {
            document.getElementById('btnAccion').textContent = 'Procesando...';
        });
        http.send(new FormData(frm));
        http.addEventListener('load', function () {
            document.getElementById('btnAccion').textContent = 'Procesando...';
        });
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                frm.reset();
                myModal.hide();
                tblVehiculos.ajax.reload();
            }
        }
    }
}
function btnEditarVeh(id) {
    document.getElementById("title").textContent = "Actualizar Vehículo";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + 'Vehiculos/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("placa").value = res.placa;
            document.getElementById("marca").value = res.id_marca;
            document.getElementById("tipo").value = res.id_tipo;
            document.getElementById("modelo").value = res.modelo;
            document.getElementById("img-preview").src = base_url + 'Assets/img/vehiculos/'+ res.foto;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-outline-danger" onclick="deleteImg()">
            <i class="fas fa-times-circle"></i></button>`;
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("foto_actual").value = res.foto;
            myModal.show();
        }
    }
}
function btnEliminarVeh(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El vehículo no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Vehiculos/eliminar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblVehiculos.ajax.reload();
                }
            }

        }
    })
}
function btnReingresarVeh(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Vehiculos/reingresar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

        }
    })
}
function preview(e) {
    var input = document.getElementById('imagen');
    var filePath = input.value;
    var extension = /(\.png|\.jpeg|\.jpg)$/i;
    if (!extension.exec(filePath)) {
        alertas('Seleccione un archivo valido', 'warning');
        deleteImg();
        return false;
    } else {
        const url = e.target.files[0];
        const urlTmp = URL.createObjectURL(url);
        document.getElementById("img-preview").src = urlTmp;
        document.getElementById("icon-image").classList.add("d-none");
        document.getElementById("icon-cerrar").innerHTML = `
        <button class="btn btn-outline-danger" onclick="deleteImg()"><i class="fas fa-times-circle"></i></button>
        `;
    }
}
function previewLogo(e) {
    var input = document.getElementById('imagen');
    var filePath = input.value;
    var extension = /(\.png)$/i;
    if (!extension.exec(filePath)) {
        alertas('Seleccione un formato png', 'warning');
        deleteImg();
        return false;
    } else {
        const url = e.target.files[0];
        const urlTmp = URL.createObjectURL(url);
        document.getElementById("img-preview").src = urlTmp;
        document.getElementById("icon-image").classList.add("d-none");
        document.getElementById("icon-cerrar").innerHTML = `
        <button class="btn btn-outline-danger" onclick="deleteImg()"><i class="fas fa-times-circle"></i></button>
        `;
    }
}
function deleteImg() {
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = '';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}
function modificarEmpresa(e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    const ruc = document.getElementById("ruc").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;

    if (id == '' || ruc == '' || nombre == '' || telefono == '' || correo == '' || direccion == '') {
        alertas('Todo los campos son requerido', 'warning');
        return false;
    } else {
        const frm = document.getElementById('formulario');
        const url = base_url + 'Administracion/modificar';
        const http = new XMLHttpRequest();
        let frmData = new FormData(frm);
        http.open("POST", url, true);
        http.upload.addEventListener('progress', function () {
            document.getElementById('btnAccion').textContent = 'Procesando...';
        });
        http.send(frmData);
        http.addEventListener('load', function () {
            document.getElementById('btnAccion').textContent = 'Modificar';
        });
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
            }
        }
    }
}
function alertas(mensaje, icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    })
}
function registrarPermisos(e) {
    e.preventDefault();
    const http = new XMLHttpRequest();
    const frm = document.getElementById("formulario");
    const url = base_url + 'Usuarios/registrarPermisos';
    http.open("POST", url);
    http.send(new FormData(frm));
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            alertas(res.msg, res.icono);
        }
    }
}
//Monedas
function frmMoneda() {
    document.getElementById('id').value = '';
    document.getElementById('title').textContent = 'Nuevo Moneda';
    document.getElementById('btnAccion').textContent = 'Registrar';
    document.getElementById('formulario').reset();
    myModal.show();
}
function registrarMoneda(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const simbolo = document.getElementById('simbolo');
    if (nombre.value == '' || simbolo.value == '') {
        alertas('Todo los campos son requeridos', 'warning');
        return false;
    } else {
        const url = base_url + 'Administracion/registrarMoneda';
        const frm = document.getElementById('formulario');
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                myModal.hide();
                t_moneda.ajax.reload();
            }
        }
    }
}
function btnEditarMoneda(id) {
    document.getElementById('title').textContent = 'Modificar Moneda';
    document.getElementById('btnAccion').textContent = 'Modificar';
    const url = base_url + 'Administracion/editarMoneda/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById('id').value = res.id;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('simbolo').value = res.simbolo;
            myModal.show();
        }
    }
}
function btnEliminarMoneda(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "La moneda no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Administracion/eliminarMoneda/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    t_moneda.ajax.reload();
                }
            }
        }
    })
}
function btnReingresarMoneda(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Administracion/reingresarMoneda/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

        }
    })
} //fin moneda
function frmDoc() {
    document.getElementById("title").textContent = "Nueva Documento";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
    myModal.show();
}

function registrarDoc(e) {
    e.preventDefault();
    const documento = document.getElementById("documento").value;
    if (documento == '') {
        alertas('El documento es requerido', 'warning');
    } else {
        const url = base_url + 'Documentos/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                frm.reset();
                myModal.hide();
                tblDoc.ajax.reload();
            }
        }
    }
}

function btnEditarDoc(id) {
    document.getElementById("title").textContent = "Actualizar Documento";
    document.getElementById("btnAccion").textContent = "Modificar";
    const url = base_url + 'Documentos/editar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);
            document.getElementById("id").value = res.id;
            document.getElementById("documento").value = res.documento;
            myModal.show();
        }
    }
}

function btnEliminarDoc(id) {
    Swal.fire({
        title: 'Esta seguro de eliminar?',
        text: "El documento no se eliminará de forma permanente, solo cambiará el estado a inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Documentos/eliminar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    tblDoc.ajax.reload();
                }
            }
        }
    })
}

function btnReingresarDoc(id) {
    Swal.fire({
        title: 'Esta seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + 'Documentos/reingresar/' + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    const res = JSON.parse(this.responseText);
                    alertas(res.msg, res.icono);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }

        }
    })
} //Fin doc
function salir() {
    Swal.fire({
        title: 'Esta seguro de cerrar la sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = base_url + 'Usuarios/salir';
        }
    })
}
function actualizarDatos(e) {
    e.preventDefault();
    const user = document.getElementById('usuario').value;
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const apellido = document.getElementById('apellido').value;
    if (user == '' || nombre == '' || apellido == '' || correo == '' || telefono == '' || direccion == '') {
        alertas('Todo los campos son requeridos', 'warning');
        return false;
    } else {
        const url = base_url + 'Usuarios/actualizarDato';
        const frm = document.getElementById("frmDatos");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
            }
        }
    }
}
function editarPerfil(){
    document.getElementById('editarPerfil').classList.remove('d-none');
}
function frmAlquiler() {
    document.getElementById("title").textContent = "Nuevo Alquiler";
    document.getElementById("btnAccion").textContent = "Registrar";
    document.getElementById("formulario").reset();
    myModal.show();
}
function registrarAlquiler(e) {
    e.preventDefault();
    const select_cliente = document.getElementById("select_cliente").value;
    const select_vehiculo = document.getElementById("select_vehiculo").value;
    const id_cli = document.getElementById("id_cli").value;
    const id_veh = document.getElementById("id_veh").value;
    const numero = document.getElementById("numero").value;
    const precio = document.getElementById("precio").value;
    const abono = document.getElementById("abono").value;
    const fecha = document.getElementById("fecha").value;
    const documento = document.getElementById("documento").value;
    if (select_cliente == '' || select_vehiculo == '' || id_cli == '' || id_veh == ''
    || numero == '' || precio == '' || abono == '' || fecha == '' || documento == '') {
        alertas('Todo los campos con * son requeridos', 'warning');
    } else {
        const url = base_url + 'Alquiler/registrar';
        const frm = document.getElementById("formulario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                alertas(res.msg, res.icono);
                frm.reset();
                myModal.hide();
                if (res.id_alquiler > 0) {
                    setTimeout(() => {
                        window.open(base_url + 'Alquiler/pdfPrestamo/'+ res.id_alquiler);
                    }, 2000);
                }
                tblAlquiler.ajax.reload();
            }
        }
    }
}
function entrega(id) {
    const url = base_url + 'Alquiler/ver/'+ id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const res = JSON.parse(this.responseText);
            document.getElementById('id_alquiler').value = res.id;
            document.getElementById('pendiente').value = res.abono;
            let = total = parseFloat((res.precio_dia * res.num_dias) - res.abono);
            document.getElementById('monto_pagar').value = total.toFixed(2);
            m_entrega.show();
        }
    }
    
}
function procesarEntrega(e) {
    e.preventDefault();
    const id = document.getElementById('id_alquiler').value;
    const url = base_url + 'Alquiler/procesar/' + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const res = JSON.parse(this.responseText);
            alertas(res.msg, res.icono);
            m_entrega.hide();
            tblAlquiler.ajax.reload();
        }
    }
}

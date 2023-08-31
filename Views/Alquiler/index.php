<?php include "Views/Templates/header.php"; ?>
<button class="btn btn-outline-primary mb-2" type="button" onclick="frmAlquiler();"><i class="fas fa-plus"></i></button>
<div class="card">
    <div class="card-header bg-info text-white">
        Alquiler de Vehículos
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered table-hover display responsive nowrap" id="tblAlquiler" style="width: 100%;">
                <thead class="bg-info text-white">
                    <tr>
                        <th>Id</th>
                        <th>Doc Garantia</th>
                        <th>Cliente</th>
                        <th>Vehículo</th>
                        <th>Placa</th>
                        <th>Módelo</th>
                        <th>F. Prestamo</th>
                        <th>Hora Entrega</th>
                        <th>F. Devolción</th>
                        <th>Cant. Días</th>
                        <th>Precio x Día</th>
                        <th>Abono</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="Label" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header bg-info">
                <h5 class="modal-title" id="title">Nuevo Alquiler</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="formulario" onsubmit="registrarAlquiler(event)" autocomplete="off">
                <div class="modal-body">
                    <?php foreach ($data['vehiculos'] as $row) { ?>
                        <span class="badge bg-success"> <i class="fas fa-taxi"></i> <?php echo $row['placa'] . ' - ' . $row['tipo'] . ' - ' . $row['marca'] ?></span>
                    <?php } ?>
                    <div class="card my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </symbol>
                            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </symbol>
                            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </symbol>
                        </svg>
                        <div class="alert alert-info d-flex align-items-center" role="alert">
                            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:">
                                <use xlink:href="#info-fill" />
                            </svg>
                            <div>
                                Todo los campos con <span class="text-danger fw-bold">*</span> son obligatorio.
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-floating mb-3">
                                        <input type="hidden" id="id_cli" name="id_cli">
                                        <input id="select_cliente" class="form-control" type="text" name="select_cliente" placeholder="Buscar Cliente" required>
                                        <label for="select_cliente">Buscar Cliente <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-floating mb-3">
                                        <input type="hidden" id="id_veh" name="id_veh">
                                        <input id="select_vehiculo" class="form-control" type="text" name="select_vehiculo" placeholder="Buscar Vehículo" required>
                                        <label for="select_vehiculo">Buscar Vehículo <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-floating mb-3">
                                        <input id="numero" class="form-control" type="number" name="numero" placeholder="N° Días" required>
                                        <label for="numero">N° Días <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio x Día" required>
                                        <label for="precio">Alquiler por día <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input id="abono" class="form-control" type="text" name="abono" placeholder="Abono" required>
                                        <label for="abono">Abono <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input id="fecha" class="form-control" type="date" name="fecha" value="<?php echo date('Y-m-d'); ?>" required>
                                        <label for="fecha">Fecha <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <input id="hora" class="form-control" type="time" name="hora" value="<?php echo date('H:i:s'); ?>" required>
                                        <label for="hora">Hora Entrega <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <select name="documento" id="documento" class="form-control" required>
                                            <?php foreach ($data['documentos'] as $doc) { ?>
                                                <option value="<?php echo $doc['id']; ?>"><?php echo $doc['documento']; ?></option>
                                            <?php } ?>
                                        </select>
                                        <label for="documento">Documento de Garantia <span class="text-danger fw-bold">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="form-group mb-3">
                                        <textarea id="observacion" class="form-control" name="observacion" rows="3" placeholder="Observación"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-outline-primary" id="btnAccion">Alquilar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="modal fade" id="entrega" tabindex="-1" aria-labelledby="Label" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-info">
                <h5 class="modal-title" id="Label">Entrega del Vehículo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="procesarEntrega" onsubmit="procesarEntrega(event)">
                <div class="modal-body">
                    <div class="form-floating mb-3">
                        <input type="hidden" id="id_alquiler">
                        <input id="pendiente" class="form-control" type="text" placeholder="Monto a Pendiente" disabled>
                        <label for="pendiente">Monto Abonado</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input id="monto_pagar" class="form-control" type="text" placeholder="Monto a Pagar" disabled>
                        <label for="monto_pagar">Pendiente</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Procesar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>
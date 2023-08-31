<?php include "Views/Templates/header.php"; ?>
<a class="btn btn-outline-primary mb-2" href="<?php echo base_url; ?>Usuarios"><i class="fas fa-reply"></i></a>
<div class="card">
    <div class="card-header bg-info text-white">
        Usuarios Inactivos
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered table-hover display responsive nowrap" style="width: 100%;" id="tbl">
                <thead class="bg-info text-white">
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($data['usuarios'] as $row) {
                        if ($row['estado'] == 0) {
                            $estado = '<span class="badge bg-danger">Inactivo</span>';
                        }
                    ?>
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo $row['usuario']; ?></td>
                            <td><?php echo $row['nombre']; ?></td>
                            <td><?php echo $row['correo']; ?></td>
                            <td><?php echo $estado; ?></td>
                            <td>
                                <button class="btn btn-outline-primary" type="button" onclick="btnReingresarUser(<?php echo $row['id'] ?>);"><i class="fas fa-trash-restore"></i></button>
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>
<?php include "Views/Templates/header.php"; ?>
<a class="btn btn-outline-primary mb-2" href="<?php echo base_url; ?>Vehiculos"><i class="fas fa-reply"></i></a>
<div class="card">
    <div class="card-header bg-info text-white">
        Vehículos Inactivos
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered table-hover display responsive nowrap" style="width: 100%;" id="tbl">
                <thead class="bg-info text-white">
                    <tr>
                        <th>Id</th>
                        <th>Foto</th>
                        <th>Placa</th>
                        <th>Marca</th>
                        <th>Tipo</th>
                        <th>Modelo</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($data['vehiculos'] as $row) {
                        if ($row['estado'] == 0) {
                            $estado = '<span class="badge bg-danger">Inactivo</span>';
                        }
                    ?>
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><img class="img-thumbnail" src="<?php echo base_url; ?>Assets/img/vehiculos/<?php echo $row['foto'] ?>" width="50"></td>
                            <td><?php echo $row['placa']; ?></td>
                            <td><?php echo $row['marca']; ?></td>
                            <td><?php echo $row['tipo']; ?></td>
                            <td><?php echo $row['modelo']; ?></td>
                            <td><?php echo $estado; ?></td>
                            <td>
                                <button class="btn btn-outline-success" type="button" onclick="btnReingresarVeh(<?php echo $row['id'] ?>);"><i class="fas fa-trash-restore"></i></button>
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>
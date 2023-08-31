<?php
class VehiculosModel extends Query{
    public function __construct()
    {
        parent::__construct();
    }
    public function getDatos(string $table)
    {
        $sql = "SELECT * FROM $table WHERE estado = 1";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function getVehiculos(int $estado)
    {
        $sql = "SELECT v.*, m.id AS id_marca, m.marca, t.id AS id_tipo, t.tipo FROM vehiculos v INNER JOIN marcas m ON v.id_marca = m.id INNER JOIN tipos t ON v.id_tipo = t.id WHERE v.estado = $estado";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function vehiculos()
    {
        $sql = "SELECT v.*, m.id AS id_marca, m.marca, t.id AS id_tipo, t.tipo FROM vehiculos v INNER JOIN marcas m ON v.id_marca = m.id INNER JOIN tipos t ON v.id_tipo = t.id WHERE v.estado = 1 OR v.estado = 2";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function registrarVehiculo(string $placa, int $marca, int $tipo, string $modelo, string $img)
    {
        $vericar = "SELECT * FROM vehiculos WHERE placa = '$placa'";
        $existe = $this->select($vericar);
        if (empty($existe)) {
            $sql = "INSERT INTO vehiculos(placa, id_marca, id_tipo, modelo, foto) VALUES (?,?,?,?,?)";
            $datos = array($placa, $marca, $tipo, $modelo, $img);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            }else{
                $res = "error";
            }
        }else{
            $res = "existe";
        }
        return $res;
    }
    public function modificarVehiculo(string $placa, int $marca, int $tipo, string $modelo, string $img, int $id)
    {
        $sql = "UPDATE vehiculos SET placa=?, id_marca=?, id_tipo=?, modelo=?, foto = ? WHERE id = ?";
        $datos = array($placa, $marca, $tipo, $modelo, $img, $id);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = "modificado";
        } else {
            $res = "error";
        }
        return $res;
    }
    public function editarVeh(int $id)
    {
        $sql = "SELECT * FROM vehiculos WHERE id = $id";
        $data = $this->select($sql);
        return $data;
    }
    public function accionVeh(int $estado, int $id)
    {
        $sql = "UPDATE vehiculos SET estado = ? WHERE id = ?";
        $datos = array($estado, $id);
        $data = $this->save($sql, $datos);
        return $data;
    }
    public function buscarVehiculo(string $valor)
    {
        $sql = "SELECT v.*, t.id AS id_tipo, t.tipo, m.id AS id_marca, m.marca FROM vehiculos v INNER JOIN tipos t ON t.id =  v.id_tipo INNER JOIN marcas m ON m.id = v.id_marca WHERE v.placa LIKE '%" . $valor . "%' AND v.estado = 1 OR t.tipo LIKE '%" . $valor . "%' AND v.estado = 1 OR m.marca LIKE '%" . $valor . "%'  AND v.estado = 1";
        $data = $this->selectAll($sql);
        return $data;
    }
}
